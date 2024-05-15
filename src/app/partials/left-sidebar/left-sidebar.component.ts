import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  @Output() cerrar = new EventEmitter();
  
  public isLogin: boolean = true;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public cerrar_drawer(){
    this.cerrar.emit();
  }

  public iniciarSesion(){

  }

  public goInicio(){
    this.router.navigate(["home"]);
  }

  public goBasesPromocion(){
    this.router.navigate(["bases-promocion"]);
  }

  public goTiendasParticipantes(){
    window.open("https://buscaminas-pro.com/", "_blank");
  }

  public goPerfil(){
    this.router.navigate(["perfil"]);
  }

  public logout(){
    this.router.navigate(["/"]);
  }
}

