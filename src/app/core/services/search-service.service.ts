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

  private resetSearchSubject = new BehaviorSubject<boolean>(true);
  resetSearch$ = this.resetSearchSubject.asObservable();  

  private lastSearchTerm: string = '';

  setTerm(term: string): void {
    this.searchSubject.next(term);
    this.lastSearchTerm = term;
  }

  checkEmpty(term: string | null): void {
    this.isEmptySubject.next(term!.length === 0);
  }

  resetSearch(term: string | null): void {
    if (term!.length < 3) {
      this.resetSearchSubject.next(true);
    } else {
      this.resetSearchSubject.next(false);
    }
  }

  getLastSearchTerm(): string {
    return this.lastSearchTerm;
  }
}
