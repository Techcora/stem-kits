import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyName = 'Modular STEM Labs'; // Placeholder; update as needed
  contactEmail = 'contact@modularstemlabs.com'; // Placeholder; update as needed
  currentYear = new Date().getFullYear(); // Dynamically set the current year for copyright
}