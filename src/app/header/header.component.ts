import { Component, EventEmitter, Output } from '@angular/core';
import { FontSelectorComponent } from './font-selector/font-selector.component';
import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontSelectorComponent, ThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() fontChange = new EventEmitter<string>();

  onFontChange(font: string) {
    this.fontChange.emit(font);
  }
}
