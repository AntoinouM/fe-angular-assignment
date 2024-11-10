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

  private lastSearchTerm: string = '';

  setTerm(term: string): void {
    this.searchSubject.next(term);
    this.lastSearchTerm = term;
  }

  checkEmpty(term: string | null): void {
    this.lastSearchTerm = term!;
    this.isEmptySubject.next(term!.length === 0);
  }

  getLastSearchTerm(): string {
    return this.lastSearchTerm;
  }

  setLastSearchTerm(str: string) {
    this.lastSearchTerm = str;
  }
}
