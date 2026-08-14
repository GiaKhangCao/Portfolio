import { Component } from '@angular/core';
import { About } from "../sections/about/about";
import { Experience } from "../sections/experience/experience";
import { SkillsTools } from "../sections/skills-tools/skills-tools";
import { Introduction } from '../sections/introduction/introduction';

@Component({
  selector: 'app-main-page',
  imports: [ About, Experience, SkillsTools, Introduction],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
