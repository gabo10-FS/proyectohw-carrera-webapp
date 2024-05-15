import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-screen',
  templateUrl: './perfil-usuario-screen.component.html',
  styleUrls: ['./perfil-usuario-screen.component.scss']
})
export class PerfilUsuarioScreenComponent implements OnInit{

  public ngOnInit(): void {
      
  }

  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "body-mobile";
        }else{
          return "body-desktop";
        }
        break;
      case 2:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "line-mobile";
        }else{
          return "line-desktop";
        }
        break;
    }
  }
}
