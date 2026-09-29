import { Component, OnInit, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Filme } from '../../../core/models';
import { CardFilmeComponent } from '../card-filme/card-filme';
import { ContainerComponent } from '../container/container';
import { FilmeService } from '../../../core/services/filme.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

// restante do código

@Component({
  selector: 'app-em-cartaz',
  standalone: true,
  imports: [CardFilmeComponent, ContainerComponent, AsyncPipe],
  templateUrl: './em-cartaz.html',
  styleUrl: './em-cartaz.css'
})
export class EmCartazComponent implements OnInit {

  private filmeService = inject(FilmeService);

  filmes: Observable<Filme[]> = of([]);

  ngOnInit(): void {
    this.filmes = this.filmeService.listarEmCartaz();
  }

}
