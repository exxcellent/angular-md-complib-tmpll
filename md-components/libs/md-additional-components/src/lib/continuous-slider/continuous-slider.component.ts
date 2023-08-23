import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'exx-continuous-slider',
  standalone: true,
  imports: [MatSliderModule, MatIconModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './continuous-slider.component.html',
  styleUrls: ['./continuous-slider.component.scss'],
})
export class ContinuousSliderComponent {
  value = 0;

  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  @Input()
  disableRipple!: boolean;

  @Input()
  disabled: boolean = false;

  @Input()
  discrete: boolean = true;

  @Input()
  displayWith: (value: number) => string = it => it.toString()

  @Input()
  max: number = 100;

  @Input()
  min: number = 0;

  @Input()
  showTickMarks!: boolean

  @Input()
  step: number = 1;

  @Input()
  iconLeft!: string;

  @Input()
  iconRight!: string;

  @Input()
  topLabel!: string;

  @Input()
  helperText!: string;
}
