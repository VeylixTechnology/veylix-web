import { Directive, HostListener, input } from '@angular/core';

/**
 * Smooth-scrolls to an element by id on click (single-page navigation).
 * Use `scrollTo="top"` to scroll to the very top of the page.
 */
@Directive({
  selector: '[scrollTo]',
  standalone: true,
})
export class ScrollLinkDirective {
  readonly scrollTo = input.required<string>();

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const id = this.scrollTo();

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  }
}
