import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { DeuxiemeComposantComponent } from './deuxieme-composant/deuxieme-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    DeuxiemeComposantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
