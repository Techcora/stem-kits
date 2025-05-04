import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() video: any; // Video data passed from parent component
  safeEmbedUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize the embed URL to prevent security issues
    this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.embedUrl);
  }
}