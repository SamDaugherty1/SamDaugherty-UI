import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true
})
export class ProjectsComponent {
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
