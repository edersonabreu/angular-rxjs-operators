import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit{
  //pode ser utilizado para converter uma promessa para observable

  ngOnInit(){
    this.operatorFrom();
  }
  operatorFrom() {

    //caracteristica do operador from (se passar um array ele vai dar o resultado individualmente)
    const arr = from([1, 2, 3, 4, 5])

    arr.subscribe(res => console.log(res))


    //convertendo uma promise em observable 
    const promise = from(new Promise(resolve => resolve('olá mundo')))

    arr.subscribe(res => console.log(res))
    promise.subscribe(res => console.log(res))

    //vai passar cada caracter individualmente
    const string = from('Olá mundo')

    string.subscribe(res => console.log(res))

  }
}
