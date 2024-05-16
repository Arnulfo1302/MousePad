import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ItemViewComponent } from '../../item-view/item-view.component';
import { MainContentComponent } from '../../main-content/main-content.component';
@Component({
  selector: 'app-shared-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ItemViewComponent, MainContentComponent],
  templateUrl: './shared-item.component.html',
  styleUrl: './shared-item.component.css'
})
export class SharedItemComponent {

}
