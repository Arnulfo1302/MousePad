import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ItemComponent } from '../item/item.component';
import { RightContentComponent } from '../right-content/right-content.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BenefitsComponent } from '../benefits/benefits.component';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [SideNavComponent, ItemComponent, RightContentComponent, RouterLink, RouterOutlet, BenefitsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
