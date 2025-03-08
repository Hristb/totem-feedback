import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<string>();

  constructor(private router:Router){}

  clickHome(){
    this.router.navigate(['/totem/home']);
  }

  clickRedirectToRegister(){
    this.router.navigate(['/totem/register']);
  }

  toggleMenu() {
    this.menuToggle.emit('ok'); 
  }
}
