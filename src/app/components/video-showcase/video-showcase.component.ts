import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { VideoPlayerComponent } from './video-player/video-player.component';

@Component({
  selector: 'app-video-showcase',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent],
  templateUrl: './video-showcase.component.html',
  styleUrls: ['./video-showcase.component.css']
})
export class VideoShowcaseComponent implements OnInit {
  videos: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.videos = this.dataService.getVideos();
  }
}