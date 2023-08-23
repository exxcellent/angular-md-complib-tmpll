import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  TonedButtonComponent,
  NewsCardComponent,
  ContinuousSliderComponent,
} from '@exxcellent/md-additional-components';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-components-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
  imports: [
    MatButtonModule,
    TonedButtonComponent,
    NewsCardComponent,
    ContinuousSliderComponent,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    CommonModule,
  ],
  standalone: true,
})
export class ButtonDemoComponent {
  value = 'Bob';
  favoriteSeason: string = 'Spring';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: true, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };
  news = {
    mediaURL: 'https://picsum.photos/600/200?random=2',
    date: new Date(),
    headline:
      'Lorem Ipsum dolores mia dela Culpa dela Riga de la Rey garda di Sol',
    text: 'Lorem Ipsum dolores mia dela ulpa dela rey. Die raga di ruga lorem ipsum dolores ...',
    meta: 'Konzern <br> 3min. Lesezeit, 513 Wörter',
  };
  slider = {
    iconLeft: 'volume_mute',
    iconRight: 'volume_up',
    topLabel: 'Top Label',
    helperText: 'Helper Text',
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
