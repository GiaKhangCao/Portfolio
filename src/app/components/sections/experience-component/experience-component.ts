import { Component } from '@angular/core';
import { Experience } from '../../../models/experience';
import { ExperienceCard } from '../../experience-card/experience-card';

@Component({
  selector: 'app-experience-component',
  imports: [ExperienceCard],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Junior Technical Analyst',
      organization: 'Ministry of Public and Business Service Delivery and Procurement, ON',
      dateRange: 'Sep — Dec 2025',
      bullets: [
        'Resolved ~20 incident tickets/week, coordinating with clients and cross-functional teams.',
        'Ran functional testing on updates, preventing 80% of potential outages.',
        'Maintained a Blazor app, implementing business-requested UI updates.'
      ]
    },
    {
      role: 'Web Developer Intern (Co-op)',
      organization: 'Ceana, Toronto, ON',
      dateRange: 'Jan — Apr 2025',
      bullets: [
        'Built front-end features in React, contributing to a 15% rise in user satisfaction.',
        'Developed RESTful API endpoints in Python/FastAPI for front-end/back-end data exchange.',
        'Fixed 30+ bugs alongside the team, supporting an on-schedule product launch.'
      ]
    }
  ]
}
