import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TonedButtonComponent } from '@exxcellent/md-additional-components';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, TonedButtonComponent, MatInputModule, FormsModule, MatIconModule, MatCheckboxModule, CommonModule],
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
</section>
</div>
<div>
<section class="demo-checkbox-section">
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
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
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
