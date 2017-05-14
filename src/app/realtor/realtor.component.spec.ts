import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorComponent } from './realtor.component';

describe('RealtorComponent', () => {
  let component: RealtorComponent;
  let fixture: ComponentFixture<RealtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
