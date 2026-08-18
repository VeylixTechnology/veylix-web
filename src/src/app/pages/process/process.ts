import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { PROCESS_STEPS } from '../../core/site-data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [RevealDirective, PageHero, CtaSection, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  protected readonly steps = PROCESS_STEPS;
}
