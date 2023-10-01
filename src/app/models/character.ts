import {Side} from "./side";

export class Character {
  private _name: String;
  private _side: Side;

  constructor(name: String, side: Side) {
    this._name = name;
    this._side = side;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get side(): Side {
    return this._side;
  }

  set side(value: Side) {
    this._side = value;
  }
}
