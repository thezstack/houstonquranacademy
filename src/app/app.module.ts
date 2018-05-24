import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { TitleComponent } from './title/title.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
