import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.scss'
})
export default class TotemComponent {
  title = 'Totem';
}
