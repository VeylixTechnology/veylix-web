import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta">
      <div class="cta__glow"></div>
      <div class="container cta__inner" reveal>
        <span class="eyebrow">Get Started</span>
        <h2 class="cta__title">
          Let's explore how we can <span class="text-gradient">modernize your operations</span>
        </h2>
        <p class="cta__text muted">
          Share your objectives and constraints. We'll outline how custom software and AI address
          your specific challenges.
        </p>
        <div class="cta__actions">
          <a routerLink="/contact" class="btn btn-primary">
            <span class="material-icons-round">mail</span> Contact Us
          </a>
          <a routerLink="/contact" class="btn btn-ghost-light">
            <span class="material-icons-round">event_available</span> Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta {
        position: relative;
        background: var(--gradient-navy);
        color: #fff;
        overflow: hidden;
        border-radius: 32px;
        margin: 0 24px;
      }
      .cta__glow {
        position: absolute;
        inset: 0;
        background: var(--gradient-glow);
        pointer-events: none;
      }
      .cta__inner {
        position: relative;
        padding-block: clamp(56px, 8vw, 96px);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
      }
      .cta__title {
        color: #fff;
        font-size: clamp(1.9rem, 4vw, 3rem);
        max-width: 760px;
      }
      .cta__text {
        max-width: 560px;
        font-size: 1.08rem;
      }
      .cta__actions {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 12px;
      }
    `,
  ],
})
export class CtaSection {}
