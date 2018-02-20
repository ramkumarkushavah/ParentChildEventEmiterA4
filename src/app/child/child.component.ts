import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childData = new EventEmitter();

  @Input() count: number = 0;
  @Input() count1: number = 0;

  counter = 0;
  receivedMSG;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(change) {
    console.log("Previous Value :", change.count.previousValue);
    console.log("Current Value :", change.count.currentValue);
    this.abcd(change.count.currentValue);
  }

abcd(data){
  console.log("Method Triggering From Parent Component : ",data);
}

  sendMsg() {

    this.counter = this.counter + 1;
    this.childData.emit(this.counter);

  }

  msgReceiving(x) {

    this.receivedMSG = x;
    console.log("Msg Receiving From Parent Component: ", x);
  }

}
