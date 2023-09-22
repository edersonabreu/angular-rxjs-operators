import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent {

  //o zip vai mesclar seu response em um único array 
  constructor(private apiService: ApiService){

  }

  ngOnInit() {
    this.getUsersZip();
  }

  getUsersZip() {
    this.apiService.getUsersZip().subscribe(res => console.log(res))
  }
}
