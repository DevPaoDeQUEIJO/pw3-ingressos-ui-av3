import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { RouterLink } from "@angular/router";
import { inject } from '@angular/core';
import { SalaService } from '../../../../core/services/sala.service';



@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent {
  private salaService = inject(SalaService);
  private router = inject(RouterLink);

  listaSalas(): void {
    this.salas = this.salaService.listarSalas();
  }

  editar(id: number): void {
    this.router.navigate(['/salas', id, 'editar']);
  }

  excluir(id: number): void {
    this.salaService.excluir(id).subscribe{() => {
      this.listaSalas();
    }};
  }
}
