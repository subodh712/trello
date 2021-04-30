import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/list';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item('', '');
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.onDelete.emit();
  }

}
