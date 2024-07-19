import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-font-selector',
  standalone: true,
  imports: [],
  templateUrl: './font-selector.component.html',
  styleUrl: './font-selector.component.css'
})
export class FontSelectorComponent {
  @Output() fontChange = new EventEmitter<string>();

  onFontChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.fontChange.emit(target.value)
  }
}
