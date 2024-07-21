import { Component, EventEmitter, Output } from '@angular/core';
import { DictionaryService } from '../service/dictionary.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  word: string = '';
  @Output() wordData = new EventEmitter<any>();
  errorMessage: string = '';
  // errerMessage: string = '';
  noDefinitionsFound: boolean = false;

  constructor(
    private dictionaryService: DictionaryService,
    private sharedService: SharedService
  ) {
    this.sharedService.currentWord$.subscribe((word) => {
      this.word = word;
      if (this.word) {
        this.onSearch();
      }
    });
  }

  onSearch() {
    if (this.word.trim()) {
      this.errorMessage = '';
      this.noDefinitionsFound = false;
      this.dictionaryService.searchWord(
        this.word.trim(),
        (data) => {
          this.wordData.emit(data);
          this.noDefinitionsFound = false;
        },
        (error) => {
          this.noDefinitionsFound = true;
          this.wordData.emit(null);
          console.log('Error fetching word data', error);
        }
      );
    } else {
      this.errorMessage = 'Whoops, can’t be empty…';
      this.wordData.emit(null);
      this.noDefinitionsFound = false;
    }
  }

  onInput() {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
    this.noDefinitionsFound = false;
  }
}
