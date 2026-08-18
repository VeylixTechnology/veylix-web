import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, NAV_LINKS } from '../../core/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly company = COMPANY;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();

  protected readonly whatsappLink = `https://wa.me/${COMPANY.whatsapp}`;
  protected readonly mailtoLink = `mailto:${COMPANY.email}`;
}
