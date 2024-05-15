import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioScreenComponent } from './perfil-usuario-screen.component';

describe('PerfilUsuarioScreenComponent', () => {
  let component: PerfilUsuarioScreenComponent;
  let fixture: ComponentFixture<PerfilUsuarioScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioScreenComponent]
    });
    fixture = TestBed.createComponent(PerfilUsuarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
