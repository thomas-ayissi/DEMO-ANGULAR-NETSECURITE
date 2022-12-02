import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeuxiemeComposantComponent } from './demo1/deuxieme-composant/deuxieme-composant.component';
import { MonComposantComponent } from './demo1/mon-composant/mon-composant.component';

const routes: Routes = [
  {path : 'demo1', component : MonComposantComponent, children : [
    {path : 'enfant', component : DeuxiemeComposantComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
