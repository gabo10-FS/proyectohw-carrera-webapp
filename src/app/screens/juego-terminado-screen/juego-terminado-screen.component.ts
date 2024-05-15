import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-terminado-screen',
  templateUrl: './juego-terminado-screen.component.html',
  styleUrls: ['./juego-terminado-screen.component.scss']
})
export class JuegoTerminadoScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goInicio(){
    this.router.navigate(["home"]);
  }

}

