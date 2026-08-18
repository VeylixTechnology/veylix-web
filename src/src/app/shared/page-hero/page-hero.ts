import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero section--navy">
      <div class="page-hero__glow"></div>
      <div class="page-hero__orb"></div>
      <div class="page-hero__grid"></div>
      <div class="container page-hero__inner">
        <span class="eyebrow">{{ eyebrow() }}</span>
        <h1 class="page-hero__title">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="page-hero__subtitle muted">{{ subtitle() }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        position: relative;
        overflow: hidden;
        background-size: 200% 200%;
        animation: gradient-drift 20s ease infinite;
        padding-block: clamp(72px, 11vw, 128px) clamp(56px, 8vw, 96px);
      }
      .page-hero__glow {
        position: absolute;
        inset: 0;
        background: var(--gradient-glow);
        animation: pulse-glow 7s ease-in-out infinite;
      }
      .page-hero__orb {
        position: absolute;
        top: -140px;
        right: -100px;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(203, 167, 90, 0.45), transparent 70%);
        filter: blur(60px);
        animation: float 11s ease-in-out infinite;
        pointer-events: none;
      }
      .page-hero__grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 56px 56px;
        mask-image: radial-gradient(70% 70% at 50% 20%, #000 0%, transparent 75%);
      }
      .page-hero__inner {
        position: relative;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
      }
      .page-hero__title {
        color: #fff;
        font-size: clamp(2.2rem, 5vw, 3.6rem);
        max-width: 900px;
      }
      .page-hero__subtitle {
        max-width: 640px;
        font-size: 1.12rem;
        line-height: 1.65;
      }
    `,
  ],
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
