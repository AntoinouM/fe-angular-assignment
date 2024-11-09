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

  // FUNCTIONS CALL
  // const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
  // const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  getTopRated(page: number, mediaType: string): Observable<any> {
    const headers = this.buildHeaders(this.apiKey);
    const params = this.buildParams({ page: page.toString(), language: this.language })
    return this.http.get(`${this.apiUrl}/${mediaType}/top_rated`, { headers , params })
  }

  // call to specific id
  getTvShow(mediaType: string ,id: number): Observable<any> {
    const headers = this.buildHeaders(this.apiKey);
    const params = this.buildParams({ language: this.language })
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}`, { headers , params })
  }

  // get credit for specific id
  getCredits(mediaType: string, id: number): Observable<any> {
    const headers = this.buildHeaders(this.apiKey);
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/credits`, { headers, params })
  }

  // search
  search(query: string): Observable<any> {
    //url = 'https://api.themoviedb.org/3/search/movie?query=_testquery_&include_adult=false&language=en-US&page=1';
    const headers = this.buildHeaders(this.apiKey);
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}`, { headers, params })
  }

  // get external id
  getExternalId(id: any): Observable<any> {
    // https://api.themoviedb.org/3/find/external_id?external_source='
    const headers = this.buildHeaders(this.apiKey);
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/find/${id}?external_source=imdb_id`, { headers, params })
  }

  // HELPERS
  // private functions to control request
  private buildHeaders(key: string): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    })
    return headers;
  }
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


