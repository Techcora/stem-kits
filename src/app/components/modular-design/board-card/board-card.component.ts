import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css'],
})
export class BoardCardComponent {
  @Input() board: any; // Board data passed from parent component
}
