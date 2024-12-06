import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConciergeResponse, ConciergeItem } from '../models/concierge.model';

@Injectable({providedIn: 'root'})
export class ConciergeService {
  private baseUrl = 'https://eregulatorio-hackaton04.tecnobank.com.br/api';

  constructor(private http: HttpClient) {}

  getConcierge(UF?: string, Status?: number, Title?: string, FileName?: string, PageIndex?: number, PageSize?: number): Observable<ConciergeResponse> {
    let params = new HttpParams();
    if (UF) params = params.set('UF', UF);
    if (Status != null) params = params.set('Status', Status.toString());
    if (Title) params = params.set('Title', Title);
    if (FileName) params = params.set('FileName', FileName);
    if (PageIndex != null) params = params.set('PageIndex', PageIndex);
    if (PageSize != null) params = params.set('PageSize', PageSize);

    return this.http.get<ConciergeResponse>(`${this.baseUrl}/Concierge`, { params });
  }

  updateConcierge(id: number, data: Partial<ConciergeItem>): Observable<any> {
    return this.http.put(`${this.baseUrl}/Concierge/${id}`, data);
  }

  approveConcierge(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/Concierge/${id}/approve`, {});
  }

  denyConcierge(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/Concierge/${id}/deny`, {});
  }
}
