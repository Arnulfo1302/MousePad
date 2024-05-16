import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, MainContentComponent, RouterLink, RouterLinkActive, ItemViewComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MousePad';
}
