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
import { GetblooddonationcampstartdateComponent } from './Components/getblooddonationcampstartdate/getblooddonationcampstartdate.component';
import { UpdatecampdetailsComponent } from './Components/updatecampdetails/updatecampdetails.component';
import { GethospitaldetailsComponent } from './Components/gethospitaldetails/gethospitaldetails.component';
import { HospitalmenuComponent } from './Components/hospitalmenu/hospitalmenu.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AddhospitalComponent } from './Components/addhospital/addhospital.component';
import { UpdatehospitalComponent } from './Components/updatehospital/updatehospital.component';
import { DeletehospitalComponent } from './Components/deletehospital/deletehospital.component';
import { GetbloodbanksComponent } from './Components/getbloodbanks/getbloodbanks.component';
import { AddbloodbankComponent } from './Components/addbloodbank/addbloodbank.component';
import { UpdatebloodbankComponent } from './Components/updatebloodbank/updatebloodbank.component';
import { BloodbankmenuComponent } from './Components/bloodbankmenu/bloodbankmenu.component';
import { LoginComponent } from './Components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewallblooddonationcampsComponent,
    AddblooddonationcampComponent,
    BlooddonationcampmenuComponent,
    GetblooddonationcampstartdateComponent,
    UpdatecampdetailsComponent,
    GethospitaldetailsComponent,
    HospitalmenuComponent,
    HomepageComponent,
    AddhospitalComponent,
    UpdatehospitalComponent,
    DeletehospitalComponent,
    GetbloodbanksComponent,
    AddbloodbankComponent,
    UpdatebloodbankComponent,
    BloodbankmenuComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule


  ],
  providers: [BlooddonationcampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
