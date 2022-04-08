import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlooddonationcampService {
  BloodDonationCamp_api=environment.BloodDonationCamp_api
  constructor(private http:HttpClient) { }
}
