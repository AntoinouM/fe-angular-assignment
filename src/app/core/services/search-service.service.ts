import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  private isEmptySubject = new BehaviorSubject<boolean>(true);
  isEmpty$ = this.isEmptySubject.asObservable();  

  constructor() {}

  // Method to update the term in the BehaviorSubject
  setTerm(term: string): void {
    this.searchSubject.next(term);
  }

  checkEmpty(term: string | null): void {
    this.isEmptySubject.next(term!.length === 0);
  }
}
