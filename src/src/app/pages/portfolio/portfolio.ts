import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { PROJECTS } from '../../core/site-data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RevealDirective, PageHero, CtaSection, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected readonly projects = PROJECTS;
}
