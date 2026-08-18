import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { Testimonials } from '../testimonials/testimonials';
import {
  BUSINESS_PROBLEMS,
  CAPABILITIES,
  OUR_SOLUTIONS,
  STATS,
} from '../../core/site-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, SectionHeading, CtaSection, Testimonials],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly capabilities = CAPABILITIES;
  protected readonly problems = BUSINESS_PROBLEMS;
  protected readonly solutions = OUR_SOLUTIONS;
  protected readonly stats = STATS;
}
