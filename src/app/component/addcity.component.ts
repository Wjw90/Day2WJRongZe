import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http} from '@angular/http';


@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit, OnChanges {

  @ViewChild("regForm") regForm: NgForm;
  private apikey: string = "01fe06421e8ee18e5fec00845ae07bed";
  private host: string = "http://api.openweathermap.org";
  private path: string = "/data/2.5/weather";
  visibility: string;
  weather: string[];

  @Output() generateoutput = new EventEmitter<string>();

  @Input() city:string;


  constructor(private http: Http) { }

  ngOnInit() {
    //this.city= "";
  }

  ngOnChanges(){
      if(this.city != "")
        {
          this.http.get(this.host + this.path, {params: {q: this.city, units: "metric", APPID: this.apikey} }).subscribe(
          (result) =>{ this.visibility = result.json().visibility;
                    this.weather = result.json().weather;}, (error) => {});
        }
  }

  addCity():void{
    //console.log(this.regForm.value.city);
    this.http.get(this.host + this.path, {params: {q: this.regForm.value.city, units: "metric", APPID: this.apikey} }).subscribe(
      (result) =>{ this.visibility = result.json().visibility;
                    this.weather = result.json().weather;}, (error) => {}
    );
    
    this.generateoutput.emit(this.regForm.value.city);
  }


}
