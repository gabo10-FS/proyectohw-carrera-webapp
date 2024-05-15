import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookScreenComponent } from './look-screen.component';

describe('LookScreenComponent', () => {
  let component: LookScreenComponent;
  let fixture: ComponentFixture<LookScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookScreenComponent]
    });
    fixture = TestBed.createComponent(LookScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
