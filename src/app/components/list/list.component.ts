import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../characters.service';
import {Character} from "../../models/character";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  activatedRoute: ActivatedRoute;
  charactersService: CharactersService;
  loadedSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, swService: CharactersService) {
    this.activatedRoute = activatedRoute;
    this.charactersService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.charactersService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.charactersService.charactersChanged.subscribe(
      () => {
        this.characters = this.charactersService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
