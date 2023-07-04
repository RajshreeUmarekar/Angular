import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor(private http: HttpClient) {
  }

  public getParkingAvailability(): Observable<boolean> {
    return this.http.get<boolean>(Urls.slotAvailabilityApiUrl);
  }
}
