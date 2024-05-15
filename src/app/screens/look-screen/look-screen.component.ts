import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-look-screen',
  templateUrl: './look-screen.component.html',
  styleUrls: ['./look-screen.component.scss']
})
export class LookScreenComponent implements OnInit{

  constructor(
    private router: Router,
  ){
  }

  public ngOnInit(): void {
      
  }

  public goJuego(){
    this.router.navigate(["juego"]);
  }
}
