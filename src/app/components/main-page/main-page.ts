import { Component } from '@angular/core';
import { About } from "../sections/about/about";
import { SkillsTools } from "../sections/skills-tools/skills-tools";
import { Introduction } from '../sections/introduction/introduction';
import { ExperienceComponent } from '../sections/experience-component/experience-component';
import { PersonalProject } from '../sections/personal-project/personal-project';
import { Contact } from '../sections/contact/contact';

@Component({
  selector: 'app-main-page',
  imports: [ About, SkillsTools, Introduction, ExperienceComponent, PersonalProject, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
