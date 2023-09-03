import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ):void {

    //Otra opción
    //character.id = uuid();

    /*const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }*/
    //Extiende todas las propiedades que recibo
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacterByIndex( index: number ):void {
    this.characters.splice(index, 1);
  }*/

  deleteCharacterById( id:string ):void {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
