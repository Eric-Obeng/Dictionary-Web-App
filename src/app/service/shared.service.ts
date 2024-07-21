import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private currentWordSubject = new BehaviorSubject<string>('');
  currentWord$ = this.currentWordSubject.asObservable();

  setCurrentWord(word: string) {
    this.currentWordSubject.next(word);
  }

  getCurrentWord() {
    return this.currentWordSubject.value;
  }
}
