import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Character} from "./models/character";
import {Side} from "./models/side";

@Injectable()
export class CharactersService {
  private characters: Character[] = [
    new Character('Luke Skywalker', Side.LIGHT),
    new Character('Darth Wader', Side.DARK),
  ];
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  fetchCharacters() {
    this.http.get('https://swapi.dev/api/people/')
      .map((response: Response) => {
        return response.json().results.map((character) => {
          return new Character(character.name, null);
        });
      })
      .subscribe(
        (data) => {
          this.characters = data;
          this.charactersChanged.next();
        }
      );
  }

  getCharacters(chosenList): Character[] {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side && char.side.toString().toLowerCase() === chosenList.toLowerCase();
    })
  }

  onSelectingSide(charInfo) {
    const position = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[position].side = charInfo.side;
    this.charactersChanged.next();
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = new Character(name, side);
    this.characters.push(newChar);
  }
}
