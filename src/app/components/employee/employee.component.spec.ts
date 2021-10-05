import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { MockEmployeeService } from 'src/app/services/mock.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [
        { provide: EmployeeService, useClass: MockEmployeeService }
      ],
      imports: [
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call employeeService.getEmployee() and get latest employee list', () => {
      spyOn((component as any).employeeService, 'getEmployee');
      component.ngOnInit();
      expect((component as any).employeeService.getEmployee).toHaveBeenCalled();
    });
  });

  describe('createEmployee', () => {
    it('should call employeeService.createEmployee() and create new employee', () => {
      spyOn((component as any).employeeService, 'createEmployee');
      spyOn((component as any), 'refreshEmployeeScope');
      component.createEmployee();
      expect((component as any).employeeService.createEmployee).toHaveBeenCalled();
      expect((component as any).refreshEmployeeScope).toHaveBeenCalled();
    });
  });

  describe('createEmployee', () => {
    it('should call employeeService.updateEmployee() if editIndex is having value', () => {
      component.editIndex = 1;
      spyOn((component as any), 'updateEmployee');
      spyOn((component as any), 'refreshEmployeeScope');
      component.createEmployee();
      expect((component as any).updateEmployee).toHaveBeenCalled();
      expect((component as any).refreshEmployeeScope).toHaveBeenCalled();
    });
  });

  describe('removeEmployee', () => {
    it('should call employeeService.removeEmployee() and it should remove employee', () => {
      spyOn((component as any).employeeService, 'removeEmployee');
      component.removeEmployee(1);
      expect((component as any).employeeService.removeEmployee).toHaveBeenCalled();
    });
  });

});
