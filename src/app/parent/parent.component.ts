import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Output() parentData = new EventEmitter();

  count = 0;
  displayMsg;
  constructor() { }

  ngOnInit() {
  }

  msgReceiving(x){

    this.displayMsg = x;
    console.log("Data Coming From Child:",x);
  }

  sendMSGParent(){

    console.log("Parent Sending MSG");
    this.count = this.count + 1;
  }
}
