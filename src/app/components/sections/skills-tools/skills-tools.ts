import { Component } from '@angular/core';
import { Skill, SkillCategory } from '../../../models/skill-model';
import { Badge } from '../../badge/badge';
import { SkillsCategory } from '../../skills-category/skills-category';

@Component({
  selector: 'app-skills-tools',
  imports: [SkillsCategory],
  templateUrl: './skills-tools.html',
  styleUrl: './skills-tools.scss',
})
export class SkillsTools {
  skillCategories: SkillCategory[] = [
    {number: '01', label: 'Languages', skills: [
      {name: 'C', iconName: 'C'},
      {name: 'C#', iconName: 'C#'},
    ]},
    
    {number: '02', label: 'Web Dev', skills: [
      {name: 'Angular', iconName: 'Angular'}
    ]},

    {number: '03', label: 'Tools', skills: [
      {name: 'ClaudeCode', iconName: 'ClaudeCode'}
    ]}
  ]
}
