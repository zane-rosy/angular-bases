import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  /*@Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete = new EventEmitter<number>(); //otra forma de hacer la sentencia previa
  */
  @Output()
  public onDelete = new EventEmitter<string>();

  /*onDeleteCharacter( index: number ):void {
    console.log({index});
    this.onDelete.emit(index);
  }*/

  onDeleteCharacter( id?: string ):void {

    if ( !id ) return;

    this.onDelete.emit(id);
  }
}
