import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosCondicionesScreenComponent } from './terminos-condiciones-screen.component';

describe('TerminosCondicionesScreenComponent', () => {
  let component: TerminosCondicionesScreenComponent;
  let fixture: ComponentFixture<TerminosCondicionesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminosCondicionesScreenComponent]
    });
    fixture = TestBed.createComponent(TerminosCondicionesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
