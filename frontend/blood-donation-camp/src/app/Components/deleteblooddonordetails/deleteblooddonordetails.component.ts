import { Component, OnInit } from '@angular/core';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
@Component({
  selector: 'app-deleteblooddonordetails',
  templateUrl: './deleteblooddonordetails.component.html',
  styleUrls: ['./deleteblooddonordetails.component.css']
})
export class DeleteblooddonordetailsComponent implements OnInit {
  blooddonors:BloodDonor[];
  blooddonor:BloodDonor;
  errMsg:string=''
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) { 
    this.DeleteBloodDonor();
  }

  ngOnInit(): void {
  }
DeleteBloodDonor():void{
  let id=this.blooddonor.bloodDonorId;
  if(
    this.blooddonorcontrollerservice.DeleteBloodDonor(id).subscribe(res=>{

    })){
      this.errMsg='deleted';
    }
    this.errMsg='not';
  }
}


