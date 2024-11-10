import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private language = 'en-US';

  constructor(private http:HttpClient) {}

  // FUNCTIONS CALL
  getTopRated(page: number, mediaType: string): Observable<any> {
    const params = this.buildParams({ page: page.toString(), language: this.language })
    return this.http.get(`${this.apiUrl}/${mediaType}/top_rated`, { params })
  }

  // call to specific id
  getTvShow(mediaType: string ,id: number): Observable<any> {
    const params = this.buildParams({ language: this.language })
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}`, { params })
  }

  // get credit for specific id
  getCredits(mediaType: string, id: number): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/credits`, { params })
  }

  // search
  search(mediaType: string, query: string): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/search/${mediaType}?query=${query}`, { params })
  }

  // get external id
  getExternalId(id: any): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/find/${id}?external_source=imdb_id`, { params })
  }

  // HELPER
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


