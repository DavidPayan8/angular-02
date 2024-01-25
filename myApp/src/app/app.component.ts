import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  //Nombre de la etiqueta HTML para poder ver el/los componentes.
  selector: 'app-root',
  //En true obliga a usar los demas componentes que se indican abajo.
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  //Las URL son donde van a usarse los componentes(donde se pinten).
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: String = 'Angular-02';
  NUMBER:number =10;
  count: number = 10;

  sumar1(): void {
    this.count++;
  }

  restar1(): void {
    this.count--;
  }

  resetCount():void{
    this.count=this.NUMBER;
  }
}
