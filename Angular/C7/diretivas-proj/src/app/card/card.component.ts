import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = []
  menuType:string = "bla"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
   }

   adicionar(){
    this.produtos.push("kayque");
   }

   remover(index:number){
    this.produtos.splice(index, 1)
   }

  ngOnInit(): void {
  }

}
