import { TestBed } from '@angular/core/testing';

import { TmdbApiService } from './tmdb-api.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TmdbApiService', () => {
  let service: TmdbApiService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(TmdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
