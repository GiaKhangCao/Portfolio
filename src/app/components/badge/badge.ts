import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill-model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  imports: [MatIconModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  @Input({required: true}) skill!: Skill;
}
