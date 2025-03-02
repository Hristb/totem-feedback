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
    this.router.navigate(['/totem/feedback'])


  }

  createFirework(event: MouseEvent): void {
    const numParticles = 10; // Número de partículas por clic
    for (let i = 0; i < numParticles; i++) {
      const firework = this.renderer.createElement('div');
      this.renderer.addClass(firework, 'firework');

      // Posición inicial
      this.renderer.setStyle(firework, 'left', `${event.clientX}px`);
      this.renderer.setStyle(firework, 'top', `${event.clientY}px`);

      // Color aleatorio
      const randomColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
      this.renderer.setStyle(firework, 'background-color', randomColor);
      this.renderer.setStyle(firework, 'box-shadow', `0 0 10px ${randomColor}`);

      // Movimiento aleatorio
      const x = (Math.random() - 0.5) * 200 + 'px';
      const y = (Math.random() - 0.5) * 200 + 'px';
      this.renderer.setStyle(firework, '--x', x);
      this.renderer.setStyle(firework, '--y', y);

      document.body.appendChild(firework);

      // Eliminar después de la animación
      setTimeout(() => {
        firework.remove();
      }, 1000);
    }
  }
}
