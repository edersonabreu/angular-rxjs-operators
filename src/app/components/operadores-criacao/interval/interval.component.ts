import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit{
  
  ngOnInit(){
    this.opertatorInterval();
  }
  opertatorInterval() {

    //gera dados infinitamente até que você se desinscreva 
    const num = interval(1000)
    //qando eu coloco o valor do subscribe em uma variável, consigo dar unsunscribe
    const subscription = num.subscribe(res => console.log(res))

    //definindo um tempo para desinscrever da fonte de dados
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000)

  }
}
