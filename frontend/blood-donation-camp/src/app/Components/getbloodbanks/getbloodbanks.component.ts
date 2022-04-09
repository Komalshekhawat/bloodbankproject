import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodbankserviceService } from 'src/app/Services/bloodbankservice.service';

@Component({
  selector: 'app-getbloodbanks',
  templateUrl: './getbloodbanks.component.html',
  styleUrls: ['./getbloodbanks.component.css']
})
export class GetbloodbanksComponent implements OnInit {
bloodbanks:BloodBank[];
bloodbank:BloodBank;
  constructor(private bloodbankservice:BloodbankserviceService) {
    this.bloodbank=new BloodBank();
    //add GetAllBloodDonationCamps() response to product array
        this.bloodbankservice.GetBloodBanks().subscribe(response=>{
        this.bloodbanks=response;

        })
        this.GetBloodBanks();


  }

  ngOnInit(): void {
  }
  GetBloodBanks(){
    this.bloodbankservice.GetBloodBanks().subscribe(response=>{
      this.bloodbanks=response;
    })

  }

}
