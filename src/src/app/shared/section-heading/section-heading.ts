import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="sh" reveal [class.sh--center]="center()">
      @if (eyebrow()) {
        <span class="eyebrow">{{ eyebrow() }}</span>
      }
      <h2 class="sh__title">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="sh__subtitle muted">{{ subtitle() }}</p>
      }
    </div>
  `,
  styles: [
    `
      .sh {
        max-width: 720px;
        margin-bottom: 48px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .sh--center {
        margin-inline: auto;
        text-align: center;
        align-items: center;
      }
      .sh__title {
        font-size: clamp(1.9rem, 3.6vw, 2.85rem);
      }
      .sh__subtitle {
        font-size: 1.08rem;
        line-height: 1.65;
      }
    `,
  ],
})
export class SectionHeading {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly center = input<boolean>(false);
}
