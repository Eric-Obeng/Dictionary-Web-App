import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  private searchResultsSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  fetchWord(query: string): Observable<any> {
    return this.http
      .get(`${this.url}${query}`)
      .pipe(tap((results) => this.searchResultsSubject.next(results)));
  }

  getSearchResults(): Observable<any> {
    return this.searchResultsSubject.asObservable();
  }

  testSearch() {
    this.fetchWord('keybord');
  }
}
