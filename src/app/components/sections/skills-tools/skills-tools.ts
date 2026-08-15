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
      {name: 'C#', iconName: 'C#'},
      {name: 'Python', iconName: 'Python'},
      {name: 'Java', iconName: 'Java'},
      {name: 'TypeScript', iconName: 'TypeScript'},
    ]},
    
    {number: '02', label: 'Web Dev', skills: [
      {name: 'Angular', iconName: 'Angular'},
      {name: 'React', iconName: 'React'},
      {name: 'Blazor', iconName: 'Blazor'},
      {name: '.NET', iconName: '.NET'},
      {name: 'HTML5', iconName: 'HTML5'},
      {name: 'CSS', iconName: 'CSS'},
      {name: 'FastAPI', iconName: 'FastAPI'},
    ]},

    {number: '03', label: 'Tools', skills: [
      {name: 'ClaudeCode', iconName: 'ClaudeCode'},
      {name: 'Git', iconName: 'Git'},
      {name: 'Linux', iconName: 'Linux'},
      {name: 'Docker', iconName: 'Docker'},
      {name: 'PostgreSQL', iconName: 'PostgreSQL'},
      {name: 'VS Code', iconName: 'VSCode'},
    ]}
  ]
}
