import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { BlooddonationcampService } from './Services/blooddonationcamp.service';
import { ViewallblooddonationcampsComponent } from './Components/viewallblooddonationcamps/viewallblooddonationcamps.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewallblooddonationcampsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    
  ],
  providers: [BlooddonationcampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
