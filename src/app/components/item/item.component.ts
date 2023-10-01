import { Component, OnInit, Input } from '@angular/core';

import { CharactersService } from '../../characters.service';
import {Character} from "../../models/character";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  charactersService: CharactersService;
  @Input() character: Character;

  constructor(swService: CharactersService) {
    this.charactersService = swService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    this.charactersService.onSelectingSide({ name: this.character.name, side: side });
  }
}
