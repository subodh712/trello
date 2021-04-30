import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item, List } from 'src/app/models/list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  lists: Array<List> = [];

  constructor(private appService: AppService) {
    this.appService.lists.subscribe(lists => this.lists = lists);

    let data = this.appService.getDataFromStorage();
    if(data && data.length > 0) {
      this.appService.lists.next(data);
    } else {
      this.appService.addToStorage();
    }
   }

  ngOnInit(): void {
  }

  addList() {
    let title = prompt("Please enter list name");
    if (title != null) {
      this.appService.lists.next([...this.lists, new List(title, [])]);
    }
    this.appService.addToStorage();
  }

  deleteList(event: List) {
    this.lists = this.lists.filter(list => list.id !== event.id);
    this.appService.lists.next(this.lists);
    this.appService.addToStorage();
  }

}
