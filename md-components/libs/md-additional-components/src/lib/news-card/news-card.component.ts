import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'exx-news-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input()
  mediaURL!: string;

  @Input({ required: true })
  date!: Date;

  @Input({ required: true })
  headline!: string;

  @Input()
  text!: string;

  @Input()
  meta!: string;

  @Output() 
  onNav: EventEmitter<any> = new EventEmitter();

  arrowClicked(): void {
    this.onNav.emit();
  }
}
