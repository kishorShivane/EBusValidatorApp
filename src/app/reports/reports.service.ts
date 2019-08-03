import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../models/appSettings';
import { usageSummary, SearchParams } from '../../models/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  public header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  constructor(private http: HttpClient) {
  }

  GetAllTransactions(): Observable<usageSummary[]> {
    return this.http.get<usageSummary[]>(AppSettings.API_URL + AppSettings.GET_ALL_USAGESUMMARY);
  }

  GetTransactions(fromDate, toDate): Observable<usageSummary[]> {
    var body: SearchParams = { FromDate: fromDate, ToDate: toDate };
    return this.http.post<usageSummary[]>(AppSettings.API_URL + AppSettings.GET_USAGESUMMARY, body, { headers: this.header });
  }
}
