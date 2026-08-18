import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { COMPANY, CONTACT_SERVICES } from '../../core/site-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RevealDirective,
    PageHero,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly company = COMPANY;
  protected readonly services = CONTACT_SERVICES;
  protected readonly submitted = signal(false);

  protected readonly whatsappLink = `https://wa.me/${COMPANY.whatsapp}`;

  protected readonly contactCards = [
    {
      icon: 'mail',
      label: 'Email',
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      external: false,
    },
    {
      icon: 'call',
      label: 'Phone',
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone}`,
      external: false,
    },
    {
      icon: 'chat',
      label: 'WhatsApp',
      value: COMPANY.whatsappDisplay,
      href: this.whatsappLink,
      external: true,
    },
    {
      icon: 'business',
      label: 'LinkedIn',
      value: 'Veylix Tech',
      href: COMPANY.linkedin,
      external: true,
    },
  ];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('Please complete all required fields.');
      return;
    }

    const v = this.form.getRawValue();
    const subject = `Consultation Request - ${v.name}${v.company ? ' (' + v.company + ')' : ''}`;
    const bodyLines = [
      `Name: ${v.name}`,
      `Company: ${v.company || '-'}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone || '-'}`,
      `Service Required: ${v.service}`,
      '',
      'Message:',
      v.message,
    ];
    const mailto =
      `mailto:${this.company.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
    this.form.reset();
    this.submitted.set(false);
  }
}
