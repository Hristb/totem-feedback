import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundCanvasComponent } from './components/background-canvas/background-canvas.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent,BackgroundCanvasComponent,SidebarMenuComponent],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.scss'
})
export default class TotemComponent {
  title = 'Totem';
  isOpen: boolean = false;

  sidevarEvent(event:string){
  console.log("Event: ");
  this.isOpen=!this.isOpen;
  }
}
