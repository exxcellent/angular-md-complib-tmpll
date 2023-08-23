import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
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
    CommonModule,
  ],
  standalone: true,
})
export class SlidersDemoComponent {
  contSlider = {
    iconLeft: 'volume_mute',
    iconRight: 'volume_up',
    topLabel: 'Continuous Slider',
    helperText: 'Helper Text',
  };
  rangeSlider = {
    label: 'Range Slider',
    min: 0,
    max: 100,
    step: 1,
    helperText: 'Helper Text',
  };
}
