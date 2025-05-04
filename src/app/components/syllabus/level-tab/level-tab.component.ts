import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterCardComponent } from '../chapter-card/chapter-card.component';

@Component({
  selector: 'app-level-tab',
  standalone: true,
  imports: [CommonModule, ChapterCardComponent],
  templateUrl: './level-tab.component.html',
  styleUrls: ['./level-tab.component.css']
})
export class LevelTabComponent {
  @Input() level: any; // Level data passed from parent component
}