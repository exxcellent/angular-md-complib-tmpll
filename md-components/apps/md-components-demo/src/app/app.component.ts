import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TonedButtonComponent, NewsCardComponent, ContinuousSliderComponent } from '@exxcellent/md-additional-components';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, TonedButtonComponent, NewsCardComponent, ContinuousSliderComponent, MatInputModule, FormsModule, MatIconModule, MatCheckboxModule, MatRadioModule, CommonModule],
  selector: 'md-components-root',
  template: `
<h1>Material Theme Demo</h1>
<div class="exx-theme">
<button mat-raised-button color="primary">Submit</button>
<button mat-raised-button color="warn">Submit</button>
<button mat-raised-button color="accent">Submit</button>
<exx-toned-button color="accent">Submit</exx-toned-button>
<div>
<section class="demo-checkbox-section">
  <mat-checkbox color="primary" [checked]="true">Checked</mat-checkbox>
  <mat-checkbox color="primary" [checked]="true" [disabled]="true">Disabled</mat-checkbox>
  <mat-checkbox class="example-margin"
                [checked]="allComplete"
                [color]="task.color"
                [indeterminate]="someComplete()"
                (change)="setAll($event.checked)">
    {{task.name}}
  </mat-checkbox>
  <ul>
    <li *ngFor="let subtask of task.subtasks">
      <mat-checkbox [(ngModel)]="subtask.completed"
                    [color]="subtask.color"
                    (ngModelChange)="updateAllComplete()">
        {{subtask.name}}
      </mat-checkbox>
    </li>
  </ul>
</section>
<section class="demo-radiobutton-section">
  <mat-radio-group
    aria-labelledby="demo-radio-group-label"
    class="demo-radio-group"
    [(ngModel)]="favoriteSeason">
    <mat-radio-button color="primary" class="demo-radio-button" *ngFor="let season of seasons" [value]="season">
      {{season}}
    </mat-radio-button>
  </mat-radio-group>
</section>
<section class="demo-card-section">
  <exx-news-card class="demo-card"
                 [mediaURL]="news.mediaURL"
                 [date]="news.date"
                 [headline]="news.headline"
                 [text]="news.text"
                 [meta]="news.meta">
  </exx-news-card>
</section>
<section class="demo-slider-section">
  <exx-continuous-slider [iconLeft]="slider.iconLeft"
                         [iconRight]="slider.iconRight"
                         [topLabel]="slider.topLabel"
                         [helperText]="slider.helperText">
  </exx-continuous-slider> 
</section>
<mat-form-field class="example-form-field">
  <mat-label>Clearable input</mat-label>
  <input matInput type="text" [(ngModel)]="value">
  <button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
    <mat-icon>close</mat-icon>
  </button>
</mat-form-field>
</div>
<img src="https://placekitten.com/300/300" alt="">

</div>
<router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'Bob';
  favoriteSeason: string = 'Spring';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: true, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };
  news = {
    mediaURL: 'https://picsum.photos/600/200?random=2',
    date: new Date(),
    headline: 'Lorem Ipsum dolores mia dela Culpa dela Riga de la Rey garda di Sol',
    text: 'Lorem Ipsum dolores mia dela ulpa dela rey. Die raga di ruga lorem ipsum dolores ...',
    meta: 'Konzern <br> 3min. Lesezeit, 513 Wörter',
  };
  slider = {
    iconLeft: "volume_mute",
    iconRight: "volume_up",
    topLabel: "Top Label",
    helperText: 'Helper Text'
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
