import {
  Component,
  EventEmitter,
  HostBinding,
  Output,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  @Output() themeChange = new EventEmitter<boolean>();

  isDarkMode: boolean = false;

  @HostBinding('class.dark-mode') get darkMode() {
    return this.isDarkMode;
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme(event: Event) {
    const target = event.target as HTMLElement;
    if (
      target.classList.contains('toggle') ||
      target.classList.contains('toggle-btn')
    ) {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      this.themeChange.emit(this.isDarkMode);
    }
  }
}
