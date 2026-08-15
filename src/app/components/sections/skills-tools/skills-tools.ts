import { Component } from '@angular/core';
import { Skill } from '../../../models/skill-model';
import { Badge } from '../../badge/badge';

@Component({
  selector: 'app-skills-tools',
  imports: [Badge],
  templateUrl: './skills-tools.html',
  styleUrl: './skills-tools.scss',
})
export class SkillsTools {
  skills: Skill[] = [
    {
      name: 'Angular',
      iconName: 'Angular'
    },
    {
      name: 'Blazor',
      iconName: 'Blazor'
    },
    {
      name: 'C#',
      iconName: 'C#'
    },
  ]
}
