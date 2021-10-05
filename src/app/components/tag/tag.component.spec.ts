import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { MockTagService } from 'src/app/services/mock.service';

import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponent ],
      providers: [
        { provide: TagService, useClass: MockTagService }
      ],
      imports: [
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call tagService.getTag() and get latest Tag list', () => {
      spyOn((component as any).tagService, 'getTag');
      component.ngOnInit();
      expect((component as any).tagService.getTag).toHaveBeenCalled();
    });
  });

  describe('createTag', () => {
    it('should call tagService.createTag() and create new Tag', () => {
      spyOn((component as any).tagService, 'createTag');
      spyOn((component as any), 'refreshTagScope');
      component.createTag();
      expect((component as any).tagService.createTag).toHaveBeenCalled();
      expect((component as any).refreshTagScope).toHaveBeenCalled();
    });
  });

  describe('createTag', () => {
    it('should call tagService.updateTag() if editIndex is having value', () => {
      component.editIndex = 1;
      spyOn((component as any), 'updateTag');
      spyOn((component as any), 'refreshTagScope');
      component.createTag();
      expect((component as any).updateTag).toHaveBeenCalled();
      expect((component as any).refreshTagScope).toHaveBeenCalled();
    });
  });

  describe('removeTag', () => {
    it('should call tagService.removeTag() and it should remove Tag', () => {
      spyOn((component as any).tagService, 'removeTag');
      component.removeTag(1);
      expect((component as any).tagService.removeTag).toHaveBeenCalled();
    });
  });

});
