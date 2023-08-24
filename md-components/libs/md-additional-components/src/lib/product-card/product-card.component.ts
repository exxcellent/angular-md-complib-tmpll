import { Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Directive({
  selector: 'product-card-image"',
  standalone: true,
})
export class ProductCardImageDirective {}

@Directive({
  selector: 'card-footer-actions',
  standalone: true,
})
export class FooterActionsDirective {}

@Component({
  selector: 'exx-product-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {}
