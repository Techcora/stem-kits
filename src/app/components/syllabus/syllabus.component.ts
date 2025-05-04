import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { LevelTabComponent } from './level-tab/level-tab.component';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [CommonModule, LevelTabComponent],
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  levels: any[] = [];
  activeTab: number = 0; // Track the active tab (default to first tab)

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.levels = this.dataService.getSyllabus();
  }

  // Set the active tab when a tab is clicked
  setActiveTab(index: number): void {
    this.activeTab = index;
  }
}