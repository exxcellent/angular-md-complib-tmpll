import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import {
  ContinuousSliderComponent,
  RangeSliderComponent,
  RangeSliderLeftContentDirective,
  RangeSliderRightContentDirective
} from '@exxcellent/md-additional-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-components-radio-demo',
  templateUrl: './sliders-demo.component.html',
  styleUrls: ['./sliders-demo.component.scss'],
  imports: [
    ContinuousSliderComponent,
    RangeSliderComponent,
    RangeSliderLeftContentDirective,
    RangeSliderRightContentDirective,
    FormsModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule,
    CommonModule,
  ],
  standalone: true,
})
export class SlidersDemoComponent {
  slider1 = {
    value: 10,
    min: 0,
    max: 100,
    label: 'Volume',
    helperText: 'Helper Text',
  };
  slider2 = {
    iconLeft: 'volume_mute',
    iconRight: 'volume_up',
    label: 'Volume',
    helperText: 'Helper Text',
  };
  slider3 = {
    label: 'Price category',
    value1: 30,
    value2: 80,
    min: 0,
    max: 100,
    step: 1,
    helperText: 'Helper Text',
  };
  slider4 = {
    label: 'Price category',
    value1: 20,
    value2: 55,
    min: 0,
    max: 100,
    step: 1,
    helperText: 'Helper Text',
  };

  formatLabel(value: number): string {
    return `${value}€`;
  }
}
