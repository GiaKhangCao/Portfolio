import { Component } from '@angular/core';
import { Home } from "../sections/home/home";
import { About } from "../sections/about/about";
import { Experience } from "../sections/experience/experience";
import { SkillsTools } from "../sections/skills-tools/skills-tools";

@Component({
  selector: 'app-main-page',
  imports: [Home, About, Experience, SkillsTools],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
