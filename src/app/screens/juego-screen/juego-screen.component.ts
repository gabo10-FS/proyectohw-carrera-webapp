import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-screen',
  templateUrl: './juego-screen.component.html',
  styleUrls: ['./juego-screen.component.scss']
})
export class JuegoScreenComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public goJuegoTerminado(){
    this.router.navigate(["juego-terminado"]);
  }

  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "fondo-desktop";
        }
        break;
    }
  }

  public isWMobile(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "wrapper-mobile";
        }else{
          return "wrapper";
        }
    }
}


