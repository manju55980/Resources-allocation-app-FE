import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToProjectsComponent } from './add-to-projects.component';

describe('AddToProjectsComponent', () => {
  let component: AddToProjectsComponent;
  let fixture: ComponentFixture<AddToProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
