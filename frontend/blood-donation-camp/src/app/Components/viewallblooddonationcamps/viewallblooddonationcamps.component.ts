import { Component, OnInit } from '@angular/core';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BlooddonationcampService } from 'src/app/Services/blooddonationcamp.service';
@Component({
  selector: 'app-viewallblooddonationcamps',
  templateUrl: './viewallblooddonationcamps.component.html',
  styleUrls: ['./viewallblooddonationcamps.component.css']
})
export class ViewallblooddonationcampsComponent implements OnInit {
blooddonationcamps:BloodDonationCamp[]
  constructor(private blooddonationcampservice:BlooddonationcampService) {
    this.blooddonationcampservice.GetAllBloodDonationCamps().subscribe(response=>{
      this.blooddonationcamps=response;//add GetAllBloodDonationCamps() response to product array
    })
  }

  ngOnInit(): void {
  }

}
