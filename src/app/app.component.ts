import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-game';
  card = 'assets/PNG/blue_back.png';

  ownCards = [];
  opponentCards = [];

  ngOnInit() {
    this.ownCards = [];
    for (let i = 2; i < 11; i++) {
      this.ownCards.push({ rank: i, show: false, suit: 'C' });
    }
    this.opponentCards = [];
    for (let i = 2; i < 11; i++) {
      this.opponentCards.push({ rank: i, show: false, suit: 'D'  });
    }
  }

  flip(card) {
    card.show = true;
  }

  getCardUrl(card) {
    return `assets/PNG/${card.rank}${card.suit}.png`;
  }
}
