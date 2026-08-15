import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Experience } from '../../types/experience';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  @Input({required: true}) experience!: Experience;
}
