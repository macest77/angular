import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HttpClientModule } from '@angular/common/http';
import { PoloniaComponent } from './polonia/polonia.component';
import { CzarniComponent } from './czarni/czarni.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegiaComponent } from './legia/legia.component';
import { MilanComponent } from './milan/milan.component';
import { StalComponent } from './stal/stal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    PoloniaComponent,
    CzarniComponent,
    MainpageComponent,
    LegiaComponent,
    MilanComponent,
    StalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
