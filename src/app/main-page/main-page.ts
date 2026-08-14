import { Component } from '@angular/core';
import { Home } from "../components/sections/home/home";
import { About } from "../components/sections/about/about";
import { Experience } from "../components/sections/experience/experience";
import { SkillsTools } from "../components/sections/skills-tools/skills-tools";

@Component({
  selector: 'app-main-page',
  imports: [Home, About, Experience, SkillsTools],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
