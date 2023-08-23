import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-components-home',
  standalone: true,
  imports: [CommonModule, MenubarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
