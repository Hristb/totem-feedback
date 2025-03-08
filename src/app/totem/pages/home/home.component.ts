import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  
  constructor(private renderer: Renderer2, private router:Router) { }

  clickRedirest(){
    this.router.navigate(['/totem/register']);
  }

}
