import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>('');

  search$ = this.searchSubject.asObservable();

  constructor() {}

  // Method to update the term in the BehaviorSubject
  setTerm(term: string): void {
    this.searchSubject.next(term);
  }
}
