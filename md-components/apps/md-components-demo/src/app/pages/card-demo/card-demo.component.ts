import { Component } from '@angular/core';
import { NewsCardComponent } from '@exxcellent/md-additional-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-components-old-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss'],
  imports: [
    NewsCardComponent,
    CommonModule,
  ],
  standalone: true,
})
export class CardDemoComponent {
  news = {
    mediaURL: 'https://picsum.photos/600/200?random=2',
    date: new Date(),
    headline:
      'Lorem Ipsum dolores mia dela Culpa dela Riga de la Rey garda di Sol',
    text: 'Lorem Ipsum dolores mia dela ulpa dela rey. Die raga di ruga lorem ipsum dolores ...',
    meta: 'Konzern <br> 3min. Lesezeit, 513 Wörter',
  };
}
