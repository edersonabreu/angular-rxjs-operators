import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{
  ngOnInit(){
    this.initObservable();
  }

  initObservable() {

    //conceito de subscribe
    const observable = new Observable((subscriber) => {
      //passagem de dados de forma sincrona
      subscriber.next(10)
      subscriber.next('Ederson')
      subscriber.next(true)
      subscriber.next({name: 'Ederson'})
      subscriber.complete();
    })

    observable.subscribe(res => {
      console.log(res)
    },
    (error) => {
      console.log(error);
    },
    ()  => {
      console.log('completou o observable')
    })


    //conceito de observer
    const observer = {
      next: (x: any) => console.log('Observer next value ' + x),
      error: (err: any) => console.error('Observer error ' + err), 
      complete: () => console.log('Observer complete')
    }

    observable.subscribe(observer)

    //conceito de subscription 
    //é a tecnica de armazenar a inscrição em uma variavel e depois desinscrever evitando vazamento de memória
    const it = interval(1000)

    const subscription = observable.subscribe (observer)
    const subscription2 = it.subscribe (console.log)

    setTimeout(() => {
      subscription2.unsubscribe()
    }, 3000)

    subscription.unsubscribe();

  }
}
