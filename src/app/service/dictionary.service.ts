import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
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

  searchWord(
    query: string,
    onSuccess: (data: any) => void,
    onError: (error: string) => void
  ): void {
    this.fetchWord(query).subscribe(
      (data: any) => {
        if (data.length === 0) {
          onError('No definitions found');
        } else {
          onSuccess(data[0]);
        }
      },
      () => {
        onError('Error fetching word data');
      }
    );
  }
}
