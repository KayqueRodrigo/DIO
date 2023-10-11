import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  // a primeira coisa que precisamos passar para uma RouterState, 
  // é o caminho. Para isso usamos o 'path:'
  {path:'', component: TitleComponent, pathMatch:'full'},
  {path:'portifolio', component: CardComponent, children:[
    {path:':id', component: CardComponent},
    {path:':id/:token', component: CardComponent},
  ]},
  // pathMatch: 
  //prefix(URL exata, não pode haver variação) || full(URL tem o q precisa e pode ter outras coisa)
  // {path:'portifolio/:id', component: CardComponent},
  //Rota coringa. ** seguinifica qualquer coisa.
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
