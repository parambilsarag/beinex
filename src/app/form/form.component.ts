import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: any;
  email: any;
  contact: any;
  msg: any;
  count: any = 1;
  regArray: any = [];



  constructor() { }

  ngOnInit(): void {

  }
  Register(value) {

    this.regArray.push(value);
    console.log(this.regArray);
    localStorage.setItem(this.count, JSON.stringify(value));
    alert("Registration completed")
    this.count += 1;
    console.log("count", this.count);

  }


}
