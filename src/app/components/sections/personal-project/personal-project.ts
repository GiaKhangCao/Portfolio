import { Component } from '@angular/core';
import { ProjectModel } from '../../../models/ProjectModel';
import { ProjectCard } from '../../project-card/project-card';

@Component({
  selector: 'app-personal-project',
  imports: [ProjectCard],
  templateUrl: './personal-project.html',
  styleUrl: './personal-project.scss',
})
export class PersonalProject {
  projects: ProjectModel[] = [
    {
      name: 'To Do Web App',
      description: 'Task manager with creation, toggling, and deletion',
      url: 'https://github.com/GiaKhangCao/To-Do-App',
      usingTools: [
        'React', 'TypeScript', 'CSS'
      ]
    },
    {
      name: 'Java Calculator',
      description: 'Desktop caculator handling core arithmetic operations, using a stack data structure under the hood and a Java SwingGUI',
      usingTools: [
        'Java', 'Swing'
      ],
      url: 'https://github.com/GiaKhangCao/Calculator-Project'
    }
  ]
}
