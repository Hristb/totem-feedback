import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Card {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}
@Component({
  selector: 'app-reversible-card',
  standalone: true,
  imports: [],
  templateUrl: './reversible-card.component.html',
  styleUrl: './reversible-card.component.scss'
})
export class ReversibleCardComponent {
  @Input() card!: Card;
  @Input() tabId!:number;
  @Output() cardEvent = new EventEmitter<{ card: Card; tabId: number }>(); 
  flipped = false;

  toggleFlip() {
    this.flipped = !this.flipped;
  }
  sendData() {
    this.cardEvent.emit({ card: this.card, tabId: this.tabId });
  }
}
