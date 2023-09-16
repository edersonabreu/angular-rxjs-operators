import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  ngOnInit() {
    this.operatorOf();
  }

  operatorOf() {

    //vai dar next no valor por inteiro
    const arr = of([1, 2, 3, 4, 5])
    arr.subscribe(res => console.log(res))

    //também vai enviar a string por inteiro, sem separação como o operador from
    const string = of('Olá Mundo')
    string.subscribe(res => console.log(res))

    //se passar cada valor separado por virgula ele envia o dado separadamente
    const multValue = of({ name : 'Ederson'}, true, function showName() {return 'Ederson'})
    multValue.subscribe(res => console.log(res))
  }
}
