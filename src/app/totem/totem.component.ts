import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReversibleCardComponent } from './components/reversible-card/reversible-card.component';
import { TotemService } from './totem.service';
import { Card, DataSelecctions, Tab } from './totem.model';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReversibleCardComponent],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.scss'
})
export default class TotemComponent implements OnInit {
  title = 'Home';
  comentario: string = '';
  mostrarResumen: boolean = false;
  seleccionados: DataSelecctions[] = [];
  progreso: number = 0;
  tabs: Tab[] = [];

  constructor(private dataService: TotemService) {}

  ngOnInit() {
    this.dataService.getTabsData().subscribe((data) => {
      this.tabs = data;
    });
  }

  seleccionarTab(id: number) {
    this.tabs.forEach(tab => {
      tab.activo = tab.id === id;
      tab.deshabilitado = tab.id < id;
    });

    this.progreso = this.tabs.findIndex(tab => tab.id === id);
  }

  seleccionarCard(event: { card: Card; tabId: number }) {
    const { card, tabId } = event;  
    const index = this.seleccionados.findIndex(c => c.card.id === card.id && c.tabId === tabId);
    if (index === -1) {
      this.seleccionados.push({card, tabId});
    }

    if (tabId < this.tabs.length) {
      this.seleccionarTab(tabId + 1);
    }
  }

  confirmarComentario() {
    if (this.comentario.trim() !== '' && this.seleccionados.length >= 2) {
      this.mostrarResumen = true;
    }
  }
  esUltimoTab(id: number): boolean {
    return id === this.tabs[this.tabs.length - 1].id;
  }
  
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
