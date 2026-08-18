import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CtaSection } from '../../shared/cta-section/cta-section';
import { Testimonials } from '../testimonials/testimonials';
import {
  ABOUT_HIGHLIGHTS,
  ABOUT_INTRO,
  COMPANY,
  FOUNDERS,
  STATS,
} from '../../core/site-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, PageHero, CtaSection, Testimonials],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly company = COMPANY;
  protected readonly intro = ABOUT_INTRO;
  protected readonly highlights = ABOUT_HIGHLIGHTS;
  protected readonly stats = STATS;
  protected readonly founders = FOUNDERS;
}
