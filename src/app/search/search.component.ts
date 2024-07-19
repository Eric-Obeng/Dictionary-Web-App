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

  constructor(private dictionaryService: DictionaryService) {}

  onSearch() {
    if (this.word.trim()) {
      this.dictionaryService.fetchWord(this.word.trim()).subscribe(
        (data) => {
          this.wordData.emit(data[0]);
          console.log(data[0]);
        },
        (error) => {
          console.log('Error fetching word data', error);
        }
      );
    } else {
      this.errorMessage = 'Whoops, can’t be empty…';
    }
  }

  onInput() {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
  }
}
