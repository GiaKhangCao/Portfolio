import { Component, Input } from '@angular/core';
import { Badge } from '../badge/badge';
import { SkillCategory } from '../../models/skill-model';

@Component({
  selector: 'app-skills-category',
  imports: [Badge],
  templateUrl: './skills-category.html',
  styleUrl: './skills-category.scss',
})
export class SkillsCategory {
  @Input({required: true}) category!: SkillCategory;
}
