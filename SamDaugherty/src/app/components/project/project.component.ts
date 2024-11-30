import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  standalone: true,
  imports: [NgFor]
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() link!: string;
  @Input() technologies!: string[];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
