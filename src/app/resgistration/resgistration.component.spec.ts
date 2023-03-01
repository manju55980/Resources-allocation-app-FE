import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrationComponent } from './resgistration.component';

describe('ResgistrationComponent', () => {
  let component: ResgistrationComponent;
  let fixture: ComponentFixture<ResgistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
