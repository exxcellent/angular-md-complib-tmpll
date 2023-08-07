import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  selector: 'md-components-root',
  template: `
<h1>Material Theme Demo</h1>
<button mat-raised-button color="primary">Submit</button>
<button mat-raised-button color="warn">Submit</button>
<button mat-raised-button color="accent">Submit</button>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'md-components-demo';
}
