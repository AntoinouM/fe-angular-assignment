import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = import.meta.env.NG_APP_KEY;
  private language = 'en-US';

  constructor(private http:HttpClient) {}

  // functions for specific request
  // const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
  getTopRated(page: number, mediaType: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    })
    const params = this.buildParams({ page: page.toString(), language: this.language })
    return this.http.get(`${this.apiUrl}/${mediaType}/top_rated`, { headers , params })
  }

  // function to generate call parameters
  private buildParams(params: any): HttpParams {
    let httpParams = new HttpParams()
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }
}


