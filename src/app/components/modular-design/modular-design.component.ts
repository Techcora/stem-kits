import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { BoardCardComponent } from './board-card/board-card.component';

@Component({
  selector: 'app-modular-design',
  standalone: true,
  imports: [CommonModule, BoardCardComponent],
  templateUrl: './modular-design.component.html',
  styleUrls: ['./modular-design.component.css']
})
export class ModularDesignComponent implements OnInit {
  boards: any[] = [];
  benefits: string[] = [
    'Reusable components reduce waste.',
    'Progressive learning from beginner to expert.',
    'Affordable expansion with each new board.'
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.boards = this.dataService.getBoards();
  }
}