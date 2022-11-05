import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LangplComponent } from './langpl/langpl.component';
import { AboutMeComponent } from './langpl/about-me/about-me.component';
import { MainComponent } from './langpl/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LangplComponent,
    AboutMeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
