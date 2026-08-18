import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { COMPANY, WHY_REASONS } from '../../core/site-data';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RevealDirective, PageHero, CtaSection, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
  protected readonly reasons = WHY_REASONS;
  protected readonly company = COMPANY;
}
