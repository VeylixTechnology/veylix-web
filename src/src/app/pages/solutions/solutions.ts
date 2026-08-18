import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { INDUSTRIES, SOLUTIONS } from '../../core/site-data';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RevealDirective, PageHero, CtaSection, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
})
export class Solutions {
  protected readonly solutions = SOLUTIONS;
  protected readonly industries = INDUSTRIES;
}
