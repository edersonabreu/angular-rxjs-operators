import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit{

  users: any[] = [];
  ngOnInit(){
    this.operadorAjax()
  }

  //retorna uma resposta da requisição
  operadorAjax() {
    const http$ = ajax.getJSON('http://localhost:3000/users')
      .pipe(
        catchError(error => {
          console.error(error)
          return of(error)
        })
      )

    //mostra no console os dados 
    http$.subscribe(res => console.log(res))

    //coloco o resultado da requisição em uma variável 
    http$.subscribe(res => {
      this.users = res
    })
  }
}
