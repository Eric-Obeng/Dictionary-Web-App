import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-font-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-selector.component.html',
  styleUrl: './font-selector.component.css',
})
export class FontSelectorComponent {
  fonts: string[] = ['Sans Serif', 'Serif', 'Mono'];
  selectedFont: string = 'Sans Serif';
  isDropdownOpen: boolean = false;

  @Output() fontChange = new EventEmitter<string>();

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectFont(font: string) {
    this.selectedFont = font;
    this.isDropdownOpen = false;
    this.fontChange.emit(font);
  }

  onFontChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectFont(target.value);
  }
}
