import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SERVICES } from '../../core/site-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective, PageHero, CtaSection, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services = SERVICES;
}
