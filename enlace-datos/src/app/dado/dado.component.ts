import { Component,OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit{

 @Input () valor:string = this.randomNum().toString();
 @Output () suma=new EventEmitter<string>(); 

 randomNum(){
  return Math.floor(Math.random() * 6 ) + 1;
}

ngOnInit(): void{
  this.suma.emit(this.valor);
}

}
