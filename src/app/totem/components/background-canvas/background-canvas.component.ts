import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background-canvas',
  standalone: true,
  imports: [],
  templateUrl: './background-canvas.component.html',
  styleUrl: './background-canvas.component.scss'
})
export class BackgroundCanvasComponent implements OnInit {
  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;
  private stars: { x: number; y: number; radius: number; speed: number }[] = [];
  private numStars = 300;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d')!;
    this.initCanvas();
    this.createStars();
    this.animate();
    window.addEventListener('resize', () => this.initCanvas());
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createStars() {
    this.stars = [];
    const isMobile = window.innerWidth < 768; 
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: isMobile ? Math.random() * 1.5 : Math.random() * 2,
        speed: Math.random() * (isMobile ? 0.6 : 1) + 0.2 
      });
    }
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const gradient = this.ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
    gradient.addColorStop(0, '#ff00f2'); 
    gradient.addColorStop(0.2, '#66ccff');
    gradient.addColorStop(0.4, '#ffff'); 
    gradient.addColorStop(0.6, '#ff00f2'); 
    gradient.addColorStop(0.6, '#ffff'); 
    gradient.addColorStop(1, '#cc66ff');

    this.stars.forEach(star => {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient; 
      this.ctx.fill();
      star.y += star.speed;

      if (star.y > window.innerHeight) {
        star.y = 0;
        star.x = Math.random() * window.innerWidth;
      }
    });
  };
}