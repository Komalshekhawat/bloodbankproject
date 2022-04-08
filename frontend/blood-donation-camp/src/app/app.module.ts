import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AddblooddonationcampComponent } from './Components/addblooddonationcamp/addblooddonationcamp.component';


import { BlooddonationcampService } from './Services/blooddonationcamp.service';
import { ViewallblooddonationcampsComponent } from './Components/viewallblooddonationcamps/viewallblooddonationcamps.component';
import { BlooddonationcampmenuComponent } from './Components/blooddonationcampmenu/blooddonationcampmenu.component';
import { EditblooddonationcampdetailsComponent } from './Components/editblooddonationcampdetails/editblooddonationcampdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewallblooddonationcampsComponent,
    AddblooddonationcampComponent,
    BlooddonationcampmenuComponent,
    EditblooddonationcampdetailsComponent

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
