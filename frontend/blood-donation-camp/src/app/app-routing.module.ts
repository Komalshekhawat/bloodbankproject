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

//defining routes to the components
const routes: Routes = [



  {path:'viewbloddbanks',component:GetbloodbanksComponent},
  

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

  {path:'',component:HomepageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
