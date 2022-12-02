import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeuxiemeComposantComponent } from './deuxieme-composant/deuxieme-composant.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';

const routes: Routes = [
  {path : 'component', component : MonComposantComponent, children : [
    {path : 'enfant', component : DeuxiemeComposantComponent}
  ]},
  {path : 'component2', component : DeuxiemeComposantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
