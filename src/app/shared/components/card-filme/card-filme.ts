import { Component, Input } from '@angular/core';
import { Filme } from '../../../core/models';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-filme',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './card-filme.html',
  styleUrl: './card-filme.css'
})
export class CardFilmeComponent {
  @Input() filme!: Filme;
}
