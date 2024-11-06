import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  private endpoint = '';
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    }
  };

  constructor(private http:HttpClient) {}

  getData() {
    console.log(import.meta.env.NODE_ENV)
    return this.http.get(this.apiUrl)
  }
}


