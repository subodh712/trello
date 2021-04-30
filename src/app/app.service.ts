import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from './models/list';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  lists = new BehaviorSubject<Array<List>>([]);

  constructor() { }

  addToStorage() {
    this.lists.subscribe(lists => {
      if(lists && lists.length> 0) {
        sessionStorage.setItem('data', JSON.stringify(lists))
      } else {
        sessionStorage.setItem('data', JSON.stringify([]))
      }
    })
  }

  getDataFromStorage() {
    let data = sessionStorage.getItem('data');
    return data && data.length > 0 ? JSON.parse(data) : [];
  }

}
