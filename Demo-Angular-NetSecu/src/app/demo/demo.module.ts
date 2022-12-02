import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DeuxiemeComposantComponent } from './demo1/deuxieme-composant/deuxieme-composant.component';
import { MonComposantComponent } from './demo1/mon-composant/mon-composant.component';


@NgModule({
  declarations: [
    DeuxiemeComposantComponent,
    MonComposantComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
