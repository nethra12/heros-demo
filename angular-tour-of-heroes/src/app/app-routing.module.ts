import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const route : Routes = [
  {path : 'heroes', component : HeroesComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
