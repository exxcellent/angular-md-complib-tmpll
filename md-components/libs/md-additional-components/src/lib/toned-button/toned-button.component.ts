import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'exx-toned-button, button[exx-toned-button]',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `<button mat-raised-button color="primary"><ng-content></ng-content></button>`,
  styleUrls: ['./toned-button.component.scss'],
})
export class TonedButtonComponent {}


