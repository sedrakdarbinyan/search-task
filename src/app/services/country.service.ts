import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private API_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountries(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/name/${query}`);
  }
}
