import { Component } from '@angular/core';
import { Home } from "../home/home";
import { About } from "../about/about";
import { Experience } from "../experience/experience";
import { SkillsTools } from "../skills-tools/skills-tools";

@Component({
  selector: 'app-main-page',
  imports: [Home, About, Experience, SkillsTools],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
