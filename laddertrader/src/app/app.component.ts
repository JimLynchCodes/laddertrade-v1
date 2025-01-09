import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchwabTokensService } from './schwab-tokens.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'laddertrader';

  constructor(private schwabTokensSvc: SchwabTokensService) {

    schwabTokensSvc.stuff()

  }

}


