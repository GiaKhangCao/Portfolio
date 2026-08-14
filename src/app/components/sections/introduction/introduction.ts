import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-introduction',
  imports: [MatAnchor, MatCardModule],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {

}
