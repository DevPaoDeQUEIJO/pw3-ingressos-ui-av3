import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Reusable seat component that renders an SVG cinema seat icon.
 *
 * Displays a chair whose fill color changes based on its current state:
 * - **disponivel** (available): the seat can be selected by the user.
 * - **ocupado** (occupied): the seat is taken and cannot be clicked.
 * - **escolhido** (selected): the seat has been picked by the current user.
 *
 * The component emits an `assentoClick` event when the user clicks on an
 * available or already-selected seat; clicks on occupied seats are ignored.
 *
 * @example
 * ```html
 * <app-assento
 *   [disponivel]="lugar.disponivel"
 *   [escolhido]="isMarcado(lugar)"
 *   [posicao]="lugar.posicao"
 *   (assentoClick)="marcar(lugar)">
 * </app-assento>
 * ```
 */
@Component({
  selector: 'app-assento',
  standalone: true,
  templateUrl: './assento.html',
  styleUrl: './assento.css'
})
export class AssentoComponent {

  /** Whether the seat is available for selection. */
  @Input() disponivel = true;

  /** Whether the seat is currently selected by the user. */
  @Input() escolhido = false;

  /** Whether the seat is interactive (clickable with cursor changes). When false, the default cursor is kept. */
  @Input() interativo = true;

  /** The seat number displayed below the icon. */
  @Input() posicao!: number;

  /** Emitted when the user clicks on an available or selected seat. */
  @Output() assentoClick = new EventEmitter<void>();

  /**
   * Returns the CSS class string that determines the seat's visual state.
   *
   * @returns A space-separated class string containing 'assento' plus the
   *          appropriate state class ('ocupado', 'escolhido', or 'disponivel').
   */
  get classeAssento(): string {
    const base = this.interativo ? 'assento' : 'assento readonly';
    if (!this.disponivel) return base + ' ocupado';
    if (this.escolhido) return base + ' escolhido';
    return base + ' disponivel'; 
  }

  /**
   * Handles click events on the seat SVG. Emits `assentoClick` only when the
   * seat is not occupied; occupied seats are silently ignored.
   */
  onClick(): void {
    if (!this.disponivel) return;
    this.assentoClick.emit();
  }
}
