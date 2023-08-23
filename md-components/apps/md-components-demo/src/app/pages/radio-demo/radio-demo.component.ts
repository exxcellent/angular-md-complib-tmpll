import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-components-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss'],
  imports: [
    FormsModule,
    MatRadioModule,
    CommonModule,
  ],
  standalone: true,
})
export class RadioDemoComponent {
  favoriteSeason: string = 'Spring';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
