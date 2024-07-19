import { Component, Input } from '@angular/core';
import { MeaningComponent } from '../meaning/meaning.component';
import { SynonymComponent } from '../synonym/synonym.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-detail',
  standalone: true,
  imports: [MeaningComponent, SynonymComponent, CommonModule],
  templateUrl: './word-detail.component.html',
  styleUrl: './word-detail.component.css',
})
export class WordDetailComponent {
  @Input() wordDetails: any;

  playAudio() {
    const audioUrl = this.getAudioUrl();
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      console.log('No audio URL found');
    }
  }

  getAudioUrl(): string | null {
    if (this.wordDetails && this.wordDetails.phonetics) {
      for (const phonetic of this.wordDetails.phonetics) {
        if (phonetic.audio) {
          return phonetic.audio;
        }
      }
    }
    return null;
  }
}
