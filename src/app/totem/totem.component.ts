import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
interface Tab {
  id: number;
  titulo: string;
  activo: boolean;
  deshabilitado: boolean;
  cards: Card[]; // Contenido de las cards
}

interface Card {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}


@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.scss'
})
export default class TotemComponent {
  title = 'Home';
  comentario: string = '';
  mostrarResumen: boolean = false;
  seleccionados: Card[] = [];
  progreso: number = 0;
  tabs: Tab[] = [
    { id: 1, titulo: 'Animal', activo: true, deshabilitado: false, cards: [
      { id: 1, titulo: 'hormiga', descripcion: 'Reconoces y utilizas eficazmente la fortaleza de los demás', imagen: 'assets/img/animal-ant.png' },
      { id: 2, titulo: 'murciélago', descripcion: 'Ves las oportunidades emergentes mejor que nadie', imagen: 'assets/img/animal-bat.png' },
      { id: 3, titulo: 'abeja', descripcion: 'Demuestras una eficiencia extraordinaria', imagen: 'assets/img/animal-bee.png' },
      { id: 4, titulo: 'caribú', descripcion: 'No temes explorar nuevos caminos', imagen: 'assets/img/animal-caribou.png' },
      { id: 5, titulo: 'camaleón', descripcion: 'Te adaptas fácilmente a una variedad de situaciones', imagen: 'assets/img/animal-chameleon.png' },
      { id: 6, titulo: 'caballo', descripcion: 'Permites que otros vayan más rápido y más lejos', imagen: 'assets/img/animal-horse.png' },
      { id: 7, titulo: 'colibrí', descripcion: 'Haces todo con precisión y consideración', imagen: 'assets/img/animal-humming.png' },
      { id: 8, titulo: 'leopardo', descripcion: 'Actúas rápidamente', imagen: 'assets/img/animal-leopard.png' },
      { id: 9, titulo: 'león', descripcion: 'Asumes naturalmente un rol de liderazgo', imagen: 'assets/img/animal-lion.png' },
      { id: 10, titulo: 'ave lira', descripcion: 'Te llevas bien con todos', imagen: 'assets/img/animal-lyrebird.png' },
      { id: 11, titulo: 'monarca', descripcion: 'Nunca te rindes antes de llegar a tu destino', imagen: 'assets/img/animal-monarch.png' },
      { id: 12, titulo: 'ratón', descripcion: 'Prestas atención a los detalles', imagen: 'assets/img/animal-mouse.png' },
      { id: 13, titulo: 'búho', descripcion: 'Escuchas de manera sincera y genuina', imagen: 'assets/img/animal-owl.png' },
      { id: 14, titulo: 'mapache', descripcion: 'Clasificas y organizas las cosas con destreza', imagen: 'assets/img/animal-racoon.png' },
      { id: 15, titulo: 'rinoceronte', descripcion: 'Te mantienes fiel y auténtico en todas las situaciones', imagen: 'assets/img/animal-rhinoceros.png' },
      { id: 16, titulo: 'gallo', descripcion: 'Siempre se puede contar contigo', imagen: 'assets/img/animal-rooster.png' },
      { id: 17, titulo: 'ardilla', descripcion: 'Planificas hábilmente para responder a necesidades futuras', imagen: 'assets/img/animal-squirrel.png' },
      { id: 18, titulo: 'cisne', descripcion: 'Te diferencias respetando a los demás', imagen: 'assets/img/animal-swan.png' },
      { id: 19, titulo: 'tigre', descripcion: 'Lideras de manera justa y equitativa', imagen: 'assets/img/animal-tiger.png' },
      { id: 20, titulo: 'ballena', descripcion: 'Permaneces tranquilo en medio del caos', imagen: 'assets/img/animal-whale.png' },
      { id: 21, titulo: 'salvaje', descripcion: 'Sabes cómo usar los problemas para mejorar tu vida', imagen: 'assets/img/animal-wild.png' }
]
    },
    { id: 2, titulo: 'Cualidad', activo: false, deshabilitado: true, cards: [
      { id: 1, titulo: 'Altruista', descripcion: 'Tu altruismo', imagen: 'assets/img/cualidades/altruistic.jpeg' },
      { id: 2, titulo: 'Elocuente', descripcion: 'Tu don de la palabra', imagen: 'assets/img/cualidades/articulate.jpeg' },
      { id: 3, titulo: 'Valiente', descripcion: 'Tu valentía', imagen: 'assets/img/cualidades/brave.jpeg' },
      { id: 4, titulo: 'Comprometido', descripcion: 'Tu compromiso', imagen: 'assets/img/cualidades/committed.jpeg' },
      { id: 5, titulo: 'Creativo', descripcion: 'Tu creatividad', imagen: 'assets/img/cualidades/creative.jpeg' },
      { id: 6, titulo: 'Empático', descripcion: 'Tu empatía', imagen: 'assets/img/cualidades/empathetic.jpeg' },
      { id: 7, titulo: 'Íntegro', descripcion: 'Tu integridad', imagen: 'assets/img/cualidades/ethical.jpeg' },
      { id: 8, titulo: 'Enfocado', descripcion: 'Tu enfoque', imagen: 'assets/img/cualidades/focused.jpeg' },
      { id: 9, titulo: 'Influyente', descripcion: 'Tu influencia', imagen: 'assets/img/cualidades/influential.jpeg' },
      { id: 10, titulo: 'Ingenioso', descripcion: 'Tu ingenio', imagen: 'assets/img/cualidades/ingenious.jpeg' },
      { id: 11, titulo: 'Innovador', descripcion: 'Tu capacidad de innovación', imagen: 'assets/img/cualidades/innovative.jpeg' },
      { id: 12, titulo: 'Perspicaz', descripcion: 'Tu percepción aguda', imagen: 'assets/img/cualidades/insightfull.jpeg' },
      { id: 13, titulo: 'Leal', descripcion: 'Tu lealtad', imagen: 'assets/img/cualidades/loyal.jpeg' },
      { id: 14, titulo: 'Motivado', descripcion: 'Tu motivación', imagen: 'assets/img/cualidades/motivated.jpeg' },
      { id: 15, titulo: 'De mente abierta', descripcion: 'Tu mentalidad abierta', imagen: 'assets/img/cualidades/open-minded.jpeg' },
      { id: 16, titulo: 'Optimista', descripcion: 'Tu optimismo', imagen: 'assets/img/cualidades/optimistic.jpeg' },
      { id: 17, titulo: 'Organizado', descripcion: 'Tus habilidades organizativas', imagen: 'assets/img/cualidades/organized.jpeg' },
      { id: 18, titulo: 'Paciente', descripcion: 'Tu paciencia', imagen: 'assets/img/cualidades/patient.jpeg' },
      { id: 19, titulo: 'Perseverante', descripcion: 'Tu perseverancia', imagen: 'assets/img/cualidades/perseverant.jpeg' },
      { id: 20, titulo: 'Productivo', descripcion: 'Tu productividad', imagen: 'assets/img/cualidades/productive.jpeg' },
      { id: 21, titulo: 'Respetuoso', descripcion: 'Tu respeto', imagen: 'assets/img/cualidades/respectful.jpeg' },
      { id: 22, titulo: 'Colaborador', descripcion: 'Tu espíritu de equipo', imagen: 'assets/img/cualidades/team-oriented.jpeg' },
      { id: 23, titulo: 'Versátil', descripcion: 'Tu versatilidad', imagen: 'assets/img/cualidades/versatile.jpeg' },
      { id: 24, titulo: 'Sabio', descripcion: 'Tu sabiduría', imagen: 'assets/img/cualidades/wise.jpeg' }
]
    },
    { id: 3, titulo: 'Comentario', activo: false, deshabilitado: true, cards: [] }
  ];

  seleccionarTab(id: number) {
    this.tabs.forEach(tab => {
      tab.activo = tab.id === id;
      tab.deshabilitado = tab.id < id;
    });

        this.progreso = this.tabs.findIndex(tab => tab.id === id);
  }

  seleccionarCard(card: Card, tabId: number) {
    const index = this.seleccionados.findIndex(c => c.id === card.id);
    if (index === -1) {
      this.seleccionados.push(card);
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
