import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: "md-components-chips-demo",
  templateUrl: "./chips-demo.component.html",
  styleUrls: ["./chips-demo.component.scss"],
  imports: [MatChipsModule],
  standalone: true,
})
export class ChipsDemoComponent {}
