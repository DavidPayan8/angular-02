import { Component } from '@angular/core';
import { Personaje } from './personajes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})

export class PersonajeComponent {
  personajes: Personaje[] = [
    {
      id: 1,
      nombre: "Frodo",
      nivel: 1,
    },
    {
      id: 2,
      nombre: "Golum",
      nivel: 20,
    },
    {
      id: 2,
      nombre: "Sam",
      nivel: 200,
    }
  ]
  personajeSel!: Personaje; //Se declara y le ponemos el ! porque esta esperando un valor

  onSelect(personaje: Personaje): void {
    this.personajeSel = personaje;
  }
}
