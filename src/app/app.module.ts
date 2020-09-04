import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ng-scrollbar';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
