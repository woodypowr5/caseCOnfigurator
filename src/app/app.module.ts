import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfiguredImageComponent } from './configured-image/configured-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguredImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
