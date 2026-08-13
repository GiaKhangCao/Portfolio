import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { SkillsTools } from '../skills-tools/skills-tools';

@Component({
  selector: 'app-home',
  imports: [MatAnchor, About, Experience, SkillsTools],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
