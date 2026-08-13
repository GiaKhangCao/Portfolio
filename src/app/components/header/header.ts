import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { Home } from "../pages/home/home";
import { About } from "../pages/about/about";
import { Experience } from "../pages/experience/experience";
import { SkillsTools } from "../pages/skills-tools/skills-tools";
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButtonModule, RouterLink, Home, About, Experience, SkillsTools],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
