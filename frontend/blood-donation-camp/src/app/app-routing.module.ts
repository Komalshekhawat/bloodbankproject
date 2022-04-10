import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewallblooddonationcampsComponent } from './Components/viewallblooddonationcamps/viewallblooddonationcamps.component';
import { AddblooddonationcampComponent } from './Components/addblooddonationcamp/addblooddonationcamp.component';
import { GetblooddonationcampstartdateComponent } from './Components/getblooddonationcampstartdate/getblooddonationcampstartdate.component';
import { UpdatecampdetailsComponent } from './Components/updatecampdetails/updatecampdetails.component';
import { BlooddonationcampmenuComponent } from './Components/blooddonationcampmenu/blooddonationcampmenu.component';
import { GethospitaldetailsComponent } from './Components/gethospitaldetails/gethospitaldetails.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HospitalmenuComponent } from './Components/hospitalmenu/hospitalmenu.component';
import { AddhospitalComponent } from './Components/addhospital/addhospital.component';
import { UpdatehospitalComponent } from './Components/updatehospital/updatehospital.component';
import { DeletehospitalComponent } from './Components/deletehospital/deletehospital.component';
import { GetbloodbanksComponent } from './Components/getbloodbanks/getbloodbanks.component';
import { AddbloodbankComponent } from './Components/addbloodbank/addbloodbank.component';
import { UpdatebloodbankComponent } from './Components/updatebloodbank/updatebloodbank.component';
import { BloodbankmenuComponent } from './Components/bloodbankmenu/bloodbankmenu.component';
import { LoginComponent } from './Components/login/login.component';
import { AddblooddonordetailsComponent } from './Components/addblooddonordetails/addblooddonordetails.component';
import { DeleteblooddonordetailsComponent } from './Components/deleteblooddonordetails/deleteblooddonordetails.component';
import { UpdateblooddonordetailsComponent } from './Components/updateblooddonordetails/updateblooddonordetails.component';
import { AddblooddonordonationComponent } from './Components/addblooddonordonation/addblooddonordonation.component';
import { GetblooddonordetailsComponent } from './Components/getblooddonordetails/getblooddonordetails.component';
import { BlooddonormenuComponent } from './Components/blooddonormenu/blooddonormenu.component';

//defining routes to the components
const routes: Routes = [

  {path:'addblooddonordonation',component:AddblooddonordonationComponent},
  {path:'deleteblooddonordetails',component:DeleteblooddonordetailsComponent},
  {path:'updateblooddonordetails',component:UpdateblooddonordetailsComponent},
  {path:'addblooddonordetails',component:AddblooddonordetailsComponent},
  {path:'getblooddonordetails',component:GetblooddonordetailsComponent},
  {path:'blooddonormenu',component:BlooddonormenuComponent},

  {path:'viewbloodbanks',component:GetbloodbanksComponent},
  {path:'addbloodbank',component:AddbloodbankComponent},
  {path:'updatebloodbank',component:UpdatebloodbankComponent},
  {path:'bloodbankmenu',component:BloodbankmenuComponent},

  {path:'viewblooddonation',component:ViewallblooddonationcampsComponent},
  {path:'addblooddonation',component:AddblooddonationcampComponent},
  {path:'editblooddonation',component:GetblooddonationcampstartdateComponent},
  {path:'updateblooddonation',component:UpdatecampdetailsComponent},
  {path:'blooddonationcampmenu',component:BlooddonationcampmenuComponent},

  {path:'deletehospital',component:DeletehospitalComponent},
  {path:'updatehospital',component:UpdatehospitalComponent},
  {path:'viewhospital',component:GethospitaldetailsComponent},
  {path:'addhospital',component:AddhospitalComponent},
  {path:'hospitalmenu',component:HospitalmenuComponent},

  {path:'homepage',component:HomepageComponent},
  {path:'',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
