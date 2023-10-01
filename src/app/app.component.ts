import { Component, OnInit } from '@angular/core';

import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  swService: CharactersService;

  constructor (swService: CharactersService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
