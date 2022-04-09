import { Component, OnInit } from '@angular/core';

import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BlooddonationcampService } from 'src/app/Services/blooddonationcamp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getblooddonationcampstartdate',
  templateUrl: './getblooddonationcampstartdate.component.html',
  styleUrls: ['./getblooddonationcampstartdate.component.css']
})
export class GetblooddonationcampstartdateComponent implements OnInit {
  errMsg:string=''
  usercampdate:Date;
  date:Date;
  today: object = new Date();
blooddonationcamps:BloodDonationCamp[];
blooddonationcamp:BloodDonationCamp;
  constructor(private BloodDonationCampService:BlooddonationcampService,private router:Router) {
    this.blooddonationcamp=new BloodDonationCamp();
    this.GetBloodDonationCampStartDate();
  }

  ngOnInit(): void {
  }
  GetBloodDonationCampStartDate(): void{
    let id=this.blooddonationcamp.bloodDonationCampId;
    this.BloodDonationCampService.GetBloodDonationCampStartDate(id).subscribe(res=>{
           this.usercampdate=new Date(res);
            this.date=new Date(2022,4,10);

           if (this.usercampdate > this.today) {
            this.router.navigateByUrl('updateblooddonation');
           }
           else{
            //input date bigger than todays date
            this.errMsg='date should be greater than today'
        }

    })

  }


}
