import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  public tagList: Tag[] = [];
  public tag: Tag = {
    id: 0,
    name: '',
    createdBy: 0,
    createdDate: new Date
  };
  public editIndex = 0;

  constructor(
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.tagList = this.tagService.getTag();
  }

  createTag(): void {
    this.tag.id = this.tagList.length;
    this.tag.createdBy = this.tagList.length;
    this.tag.createdDate = new Date;
    (!this.editIndex) ? this.tagService.createTag(this.tag) : this.updateTag();
    this.refreshTagScope();
  }

  updateTag(): void {
    this.tagService.updateTag(this.tag, this.editIndex);
    this.refreshTagScope();
  }

  removeTag(index: number): void {
    this.tagService.removeTag(index);
  }

  editTag(index: number): void {
    this.tag = this.tagList[index];
    this.editIndex = index;
  }

  refreshTagScope(): void {
    this.tag = {
      id: 0,
      name: '',
      createdBy: 0,
      createdDate: new Date
    };
    this.editIndex = 0;
  }

}
