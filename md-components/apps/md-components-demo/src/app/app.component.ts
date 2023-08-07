import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TonedButtonComponent } from '@exxcellent/md-additional-components';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, TonedButtonComponent],
  selector: 'md-components-root',
  template: `
<h1>Material Theme Demo</h1>
<div class="exx-theme">
<button mat-raised-button color="primary">Submit</button>
<button mat-raised-button color="warn">Submit</button>
<button mat-raised-button color="accent">Submit</button>
<exx-toned-button>Submit</exx-toned-button>
<img src="https://placekitten.com/300/300" alt="">

</div>
<router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
