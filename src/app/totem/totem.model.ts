export interface Tab {
    id: number;
    titulo: string;
    activo: boolean;
    deshabilitado: boolean;
    cards: Card[];
  }
  
  export interface Card {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
  }

  export interface DataSelecctions {
    card: Card; 
    tabId: number ;
  }