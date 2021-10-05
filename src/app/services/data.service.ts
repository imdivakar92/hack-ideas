import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: Data = {
    employee: [
      {
        id: 0,
        name: 'Admin',
        empId: 12345,
        createdDate: new Date()
      }
    ],
    tag: [],
    challenge: [],
    vote: []
  };

  constructor() { 
    this.getDataFromStorage();
  }

  public getDataFromStorage(): Data {
    const dataFromStorage = localStorage.getItem('HackIdeasData');
    if(dataFromStorage === null){
      this.setDataFromStorage();
    }
    this.data = JSON.parse(dataFromStorage || '{}');
    return this.data;
  }

  private setDataFromStorage(): void {
    const stringifiedData = JSON.stringify(this.data);
    localStorage.setItem('HackIdeasData', stringifiedData);
  }

  public constructData(data: Data, action: string): void {
    this.data[action] = data;
    this.setDataFromStorage();
  }

}
