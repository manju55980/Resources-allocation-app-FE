import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssgComponent } from './task-assg.component';

describe('TaskAssgComponent', () => {
  let component: TaskAssgComponent;
  let fixture: ComponentFixture<TaskAssgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAssgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAssgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
