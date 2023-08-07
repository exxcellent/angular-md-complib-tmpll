import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'exx-toned-button, button[exx-toned-button]',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `<button mat-raised-button [color]="color"><ng-content></ng-content></button>`,
  styleUrls: ['./toned-button.component.scss'],
})
export class TonedButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}


