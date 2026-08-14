import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatAnchor, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
