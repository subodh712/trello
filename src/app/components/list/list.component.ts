import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, List } from 'src/app/models/list';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: List = new List('',[]);
  @Output() onDelete = new EventEmitter();

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  deleteList() {
    this.onDelete.emit(this.list);
  }

  addItem() {
    let title = prompt("Please enter item title");
    let desc = prompt("Please enter item description");
    if (title !== null && desc !== null) {
      this.list.items.push(new Item(title, desc));
      this.appService.addToStorage();
    }

  }

  drop(event: CdkDragDrop<List>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.items, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data.items,
                        event.container.data.items,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.appService.addToStorage();
  }

  deleteItem(event: Item) {
    this.list.items = this.list.items.filter(item => item.id !== event.id);
    this.appService.addToStorage();
  }

}
