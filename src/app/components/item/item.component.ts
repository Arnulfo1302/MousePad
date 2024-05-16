import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ItemViewComponent } from '../item-view/item-view.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { Route } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ItemViewComponent, MainContentComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

}
