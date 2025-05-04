import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModularDesignComponent } from './components/modular-design/modular-design.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { VideoShowcaseComponent } from './components/video-showcase/video-showcase.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ModularDesignComponent,
    SyllabusComponent,
    VideoShowcaseComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'modular-robo-kits-for-stem';
}
