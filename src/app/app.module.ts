import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllairlinesComponent } from './allairlines/allairlines.component';
import { RouterModule, Routes } from '@angular/router';
import { AllpassangerComponent } from './allpassanger/allpassanger.component';

const appRoutes:Routes=[
  {
    path:"",component:AllairlinesComponent
  },
  {
    path:"view",component:AllpassangerComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllairlinesComponent,
    AllpassangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
