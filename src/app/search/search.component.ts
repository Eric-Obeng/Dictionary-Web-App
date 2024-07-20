import { Component, EventEmitter, Output } from '@angular/core';
import { DictionaryService } from '../service/dictionary.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  errerMessage: string = '';
  noDefinitionsFound: boolean = false;

  constructor(private dictionaryService: DictionaryService) {}

  onSearch() {
    if (this.word.trim()) {
      this.errerMessage = '';
      this.noDefinitionsFound = false;
      this.dictionaryService.fetchWord(this.word.trim()).subscribe(
        (data) => {
          if (data.length === 0) {
            this.noDefinitionsFound = true;
            this.wordData.emit(null);
          } else {
            this.wordData.emit(data[0]);
            this.noDefinitionsFound = false;
            console.log(data[0]);
          }
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
