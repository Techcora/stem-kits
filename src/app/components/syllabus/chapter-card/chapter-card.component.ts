import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent {
  @Input() chapter: any; // Chapter data passed from parent component
  isExpanded: boolean = false; // Track if the card is expanded

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}