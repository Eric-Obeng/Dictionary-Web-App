import { Component, Input } from '@angular/core';
import { DictionaryService } from '../service/dictionary.service';
import { error } from 'console';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-meaning',
  standalone: true,
  imports: [],
  templateUrl: './meaning.component.html',
  styleUrl: './meaning.component.css',
})
export class MeaningComponent {
  @Input() meanings: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  trackByFn(index: number, item: any): number {
    return index;
  }

  underline(event: Event) {
    (event.target as HTMLElement).style.textDecoration = 'underline';
  }

  removeUnderline(event: Event) {
    (event.target as HTMLElement).style.textDecoration = 'none';
  }

  onSynonymClick(synonym: string) {
    this.sharedService.setCurrentWord(synonym);
  }

  onAntonymClick(antonym: string) {
    this.sharedService.setCurrentWord(antonym);
  }
}
