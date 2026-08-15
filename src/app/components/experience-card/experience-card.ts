import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Experience } from '../../models/experience';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  @Input({required: true}) experience!: Experience;
}
