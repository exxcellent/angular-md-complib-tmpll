import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TonedButtonComponent } from '@exxcellent/md-additional-components';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, TonedButtonComponent, MatInputModule, FormsModule, MatIconModule, CommonModule],
  selector: 'md-components-root',
  template: `
<h1>Material Theme Demo</h1>
<div class="exx-theme">
<button mat-raised-button color="primary">Submit</button>
<button mat-raised-button color="warn">Submit</button>
<button mat-raised-button color="accent">Submit</button>
<exx-toned-button color="accent">Submit</exx-toned-button>
<div>
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
  value = 'Bob'
}
