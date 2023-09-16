import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(){
    this.initSubject();
  }

  //subject é bastante utilizado para compartilhar informações entre componentes que não são irmãos
  initSubject() {

    //ambos Subject ou Behavior Subject são utilizados para compartilhar dados entre componente que não são irmãos
    const subject = new Subject<number>()

    const subject2 = new BehaviorSubject(0)

    subject.subscribe({
      next: (v) => console.log(v)
    })

    subject.subscribe({
      next: (v) => console.log(v)
    })
    
    subject.next(10)
    subject.next(12)

    //valores passados para o behavior subject
    subject2.next(10)
    subject2.next(12)
  }
}
