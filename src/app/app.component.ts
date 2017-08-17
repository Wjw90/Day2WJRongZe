import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  citylist:string[]=[];
  city:string = "";


  appmethod(stringvalue)
  { 
    console.log(stringvalue);
    for(let i =0; i < this.citylist.length; i++){
        if(this.citylist[i]==stringvalue)
          {
            return;
          }
      }
    this.citylist.push(stringvalue);
  }

  getCity(value){
    console.log(value);
    this.city = value;
  }
}

