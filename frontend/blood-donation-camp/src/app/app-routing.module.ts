import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewallblooddonationcampsComponent } from './Components/viewallblooddonationcamps/viewallblooddonationcamps.component';
import { AddblooddonationcampComponent } from './Components/addblooddonationcamp/addblooddonationcamp.component';

//defining routes to the components
const routes: Routes = [
  {path:'view',component:ViewallblooddonationcampsComponent},
  {path:'add',component:AddblooddonationcampComponent},
  {path:'',component:ViewallblooddonationcampsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
