import { Component, ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Directive({
  selector: 'range-slider-thumbs',
  standalone: true,
})
export class RangeSliderThumbsDirective {}

@Directive({
  selector: 'range-slider-left-content',
  standalone: true,
})
export class RangeSliderLeftContentDirective {}

@Directive({
  selector: 'range-slider-right-content',
  standalone: true,
})
export class RangeSliderRightContentDirective {}

@Component({
  selector: 'exx-range-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule, CommonModule],
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent {
  value = 0;

  @Input()
  label?: string;

  @Input()
  min: number = 0;

  @Input()
  max: number = 100;

  @Input()
  step: number = 1;

  @Input()
  helperText?: string;
}
