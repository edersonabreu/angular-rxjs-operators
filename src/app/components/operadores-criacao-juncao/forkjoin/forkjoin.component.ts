import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit{
  constructor(private apiService: ApiService){

  }
  // o forkjoin vai retornar objetos individualmente
  //o forkjoin tem como caracteristica pegar o ultimo valor emitido de um observable
  ngOnInit() {
    this.operatorForkjoin();
    this.getUsers();
  }
  operatorForkjoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    //forkjoin vai esperar a conclusão do ultimo valor do primeiro observable e do segundo observable para gerar um resultado.
    const httpMult$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(1000),
      //se um dos observables retornar erro o forkjoin não traz o resultado
      // error: throwError('ocorreu um erro'),
      pro: Promise.resolve(10)
    })

    http$.subscribe(res => console.log(res))

    httpMult$.subscribe(res => console.log(res))

  }

  getUsers(){
    this.apiService.getUsersForkjoin().subscribe(res => console.log(res))
  }
}
