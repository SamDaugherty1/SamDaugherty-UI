import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { NgFor } from '@angular/common';
import { Project, ProjectsData } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [ProjectComponent, NgFor]
})
export class ProjectsComponent {
  projects: Project[] = ProjectsData.projects;
}
