import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'md-components-menubar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
