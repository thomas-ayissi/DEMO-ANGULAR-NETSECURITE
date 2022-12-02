import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {

  maVariable : string = "World"

  maVariableClick : string = "Pas Click"

  isActive : boolean = false


  maMethodeOnClick() {
    this.maVariableClick = "Click"
  }

  reverseIsActive(){
    this.isActive = !this.isActive
  }

}
