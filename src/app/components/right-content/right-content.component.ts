import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-right-content',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './right-content.component.html',
  styleUrl: './right-content.component.css'
})
export class RightContentComponent {

}
