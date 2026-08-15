import { Component, Input } from '@angular/core';
import { ProjectModel } from '../../models/ProjectModel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-card',
  imports: [MatCardModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
 @Input({required: true}) project!: ProjectModel;
}
