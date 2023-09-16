import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit{

  ngOnInit(){
    this.operatorThrowError()
  }
  operatorThrowError() {
    //ele gera o observable de erro, e a gente consegue capturar o erro quando se inscrever neste observable
    const err = throwError("Sou o erro")

    err.subscribe(res => {
      console.log(res)
    },
    (error) => {
      console.error('erro: ', error)
    },
    () => console.log('Completou'))
  }
}
