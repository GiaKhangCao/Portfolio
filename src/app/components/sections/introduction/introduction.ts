import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-introduction',
  imports: [MatAnchor, MatCardModule,MatGridListModule, MatListModule, MatDividerModule],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {

}
