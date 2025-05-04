import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  // Scroll to the Modular Design section when the CTA button is clicked
  scrollToModularDesign(): void {
    this.viewportScroller.scrollToAnchor('modular-design');
  }
}