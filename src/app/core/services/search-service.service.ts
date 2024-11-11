import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  private lastSearchTerm: string = '';
  private lastActiveTab: number = 0;

  setTerm(term: string): void {
    this.searchSubject.next(term);
    this.lastSearchTerm = term;
  }

  getLastActiveTab(): number {
    return this.lastActiveTab;
  }

  setLastActiveTab(index: number): void {
    this.lastActiveTab = index;
  }

  getLastSearchTerm(): string {
    return this.lastSearchTerm;
  }

  setLastSearchTerm(str: string) {
    this.lastSearchTerm = str;
  }
}
