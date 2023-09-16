import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit{

  //está fazendo referência ao botão da página
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit(){
    this.operatorFromEvent()
  }
  operatorFromEvent() {

    //ao no botão página, é criado um observable 
    const el = fromEvent(this.myButton.nativeElement, 'click')
    el.subscribe(res => console.log(res))
  }
}
