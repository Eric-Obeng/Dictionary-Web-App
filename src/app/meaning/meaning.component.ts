import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meaning',
  standalone: true,
  imports: [],
  templateUrl: './meaning.component.html',
  styleUrl: './meaning.component.css',
})
export class MeaningComponent {
  @Input() meanings: any[] = [];
}
