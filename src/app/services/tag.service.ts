import { Injectable } from '@angular/core';
import { Tag } from '../models/Tag';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tagData: Tag[] = [];

  constructor(
    private dataService: DataService
  ) {
    this.tagData = this.dataService.getDataFromStorage().tag;
  }

  public createTag(Tag: Tag): void {
    this.tagData.push(Tag);
    this.dataService.constructData(this.tagData, 'tag');
  }

  public removeTag(index: number): void {
    this.tagData.splice(index,1);
    this.dataService.constructData(this.tagData, 'tag');
  }

  public updateTag(Tag: Tag, index: number): void {
    this.tagData[index] = Tag;
    this.dataService.constructData(this.tagData, 'tag');
  }

  public getTag(): Tag[] {
    return this.tagData;
  }

}
