import { 
  Component, 
  OnInit, 
  DoCheck, 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements 
OnInit, 
DoCheck, 
AfterContentChecked, 
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
{
  quantidade:number = 0

  constructor() { }

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  //Checked -> content -> view

  //Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  //Depois da inicialização da view
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

   //Quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  //Após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  ngOnDestroy(): void {
    console.log("goodbye my friend")
  }

}
