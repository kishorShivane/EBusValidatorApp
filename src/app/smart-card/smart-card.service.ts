import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../models/appSettings';
import { SmartCard } from '../../models/smart-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartCardService {

  public header = new HttpHeaders({'Content-Type' : 'application/json; charset=utf-8',  'Access-Control-Allow-Origin':'*'});
  constructor(private http: HttpClient) {

   }

   GetAllSmartCard(): Observable<SmartCard[]>
   {
     return this.http.get<SmartCard[]>(AppSettings.API_URL+AppSettings.GET_ALL_SMARTCARDS);
   }

   GetSmartCard(smartCardID): Observable<SmartCard>
   {
     return this.http.get<SmartCard>(AppSettings.API_URL+AppSettings.GET_SMARTCARD+"/?smartcardID="+smartCardID,{headers: this.header});
   }

   InsertOrUpdateSmartCard(smartCard): Observable<any>
   {
     var headers = new HttpHeaders({"content-type": "application/json"});
     return this.http.post(AppSettings.API_URL+AppSettings.INSERT_UPDATE_SMARTCARD,smartCard,{headers:this.header});
   }
}
