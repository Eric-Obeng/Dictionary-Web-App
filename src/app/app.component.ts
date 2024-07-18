import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { FooterComponent } from './footer/footer.component';
import { DictionaryService } from './service/dictionary.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    WordDetailComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DictionaryService],
})
export class AppComponent {
  title = 'dictionary-web-app';
  currentWordDetails: any;

  onWordDataFetched(details: any) {
    this.currentWordDetails = details;
  }

  // constructor(private renderer: Renderer2) {}

  onFontChange(font: string) {
    console.log('selected font', font);
    let fontFamily!: string;
    switch (font) {
      case 'Sans Serif':
        fontFamily = 'var(--font-sans-serif)';
        console.log(fontFamily);
        break;
      case 'Serif':
        fontFamily = 'var(--font-serif)';
        console.log(fontFamily);

        break;
      case 'Mono':
        fontFamily = 'var(--font-mono)';
        console.log(fontFamily);

        break;
    }
    document.documentElement.style.setProperty(
      '--global-font-family',
      fontFamily
    );
    // this.renderer.setStyle(
    //   document.documentElement,
    //   '--global-font-family',
    //   fontFamily
    // );
    console.log(fontFamily);
  }
}
