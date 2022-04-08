import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BlooddonationcampService } from 'src/app/Services/blooddonationcamp.service';
@Component({
  selector: 'app-editblooddonationcampdetails',
  templateUrl: './editblooddonationcampdetails.component.html',
  styleUrls: ['./editblooddonationcampdetails.component.css']
})
export class EditblooddonationcampdetailsComponent implements OnInit {
blooddonationcamps:BloodDonationCamp[];
blooddonationcamp:BloodDonationCamp;
  blooddonationcampservice: any;
  constructor() { }

  ngOnInit(): void {
  }
  GetBloodDonationCampStartDate(){
    let id=this.blooddonationcamp.bloodDonationCampId;
    this.blooddonationcampservice.GetBloodDonationCampStartDate(id).subscribe(res=>{
           var usercampdate=res;

    })

  }
  if()

}
