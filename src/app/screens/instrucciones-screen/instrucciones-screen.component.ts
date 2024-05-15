import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit {

  public name_user: string = "Angel Gabriel Aguilar Saldivar";
  public isLoading: boolean = false;
  //Form dinámico de campos de texto
  public inputsCodigo : FormGroup;
  public tiendas: any[] = [{value: "liverpool", nombre: "Liverpool"}, {value:"devlyn", nombre: "Ópticas Devlyn"}];
  public selectedValue: string = "";
  public participacion: any = {};
  //Lista de codigos
  public lista_codigos: any[] = [];
  public tiene_juegos_pendientes: boolean = false;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initInputsCodigo();
    this.obtenerCodigos();
  }

  initInputsCodigo(){
    this.inputsCodigo = this.fb.group({
      listaInputs: this.fb.array([this.fb.group({valor:'', extra: false})])
    });

    for (let i = 0; i < 7; i++) {
      const control_1 = <FormArray>this.inputsCodigo.controls['listaInputs'];
      control_1.push(this.fb.group({valor:'', extra: false}));
    }
  }
  
  get getCamposInputs(){
    return this.inputsCodigo.get('listaInputs') as FormArray;
  }

  public obtenerCodigos(){
    this.lista_codigos = [
      {
        "accion": "Código redimido",
        "puntos": 1000,
      },
      {
        "accion": "Jugar sin chocar de 0 a 30 segundos",
        "puntos": 100,
      },
      {
        "accion": "Jugar sin chocar de 31 a 60 segundos",
        "puntos": 200,
      },
      {
        "accion": "Jugar sin chocar de 61 a 90 segundos",
        "puntos": 300,
      },
      {
        "accion": "Jugar sin chocar de 91 a 120 segundos",
        "puntos": 400,
      }
    ];
  }

  public jugarParticipacion(codigo: any){
    //Guardamos el código en las cookies porque se usará para validar las participaciones del juego
    this.router.navigate(["instrucciones-juego"]);
  }

  public goLook(){
    this.router.navigate(["look"]);
  }

  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "codigos-registrados";
        }
        break;
      case 2:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos-registrados";
        }
        break;
    }
  }
}

