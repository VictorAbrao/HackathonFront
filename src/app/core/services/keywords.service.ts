import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Keyword } from '../models/keyword.model';
import { Observable } from 'rxjs';

interface KeywordsResponse {
  totalPages: number;
  totalItems: number;
  items: Keyword[];
}

@Injectable({providedIn: 'root'})
export class KeywordsService {
  private baseUrl = 'https://eregulatorio-hackaton04.tecnobank.com.br/api';

  constructor(private http: HttpClient) {}

  getKeywords(UF?: string, Word?: string, SubWords?: string[], OffSet=0, Limit=25): Observable<KeywordsResponse> {
    let params = new HttpParams().set('OffSet', OffSet).set('Limit', Limit);
    if (UF) params = params.set('UF', UF);
    if (Word) params = params.set('Word', Word);
    if (SubWords && SubWords.length) {
      SubWords.forEach(sw => params = params.append('SubWords', sw));
    }
    return this.http.get<KeywordsResponse>(`${this.baseUrl}/Keywords`, { params });
  }

  getKeywordById(id: number): Observable<Keyword> {
    return this.http.get<Keyword>(`${this.baseUrl}/Keywords/${id}`);
  }

  createKeyword(keyword: Keyword): Observable<{id: number}> {
    return this.http.post<{id: number}>(`${this.baseUrl}/Keywords`, keyword);
  }

  updateKeyword(id: number, keyword: Keyword): Observable<any> {
    return this.http.put(`${this.baseUrl}/Keywords/${id}`, keyword);
  }

  deleteKeyword(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Keywords/${id}`);
  }
}
