import { Component } from '@angular/core';
import { Coutput } from "./coutput/coutput";

@Component({
  selector: 'app-poutput',
  imports: [Coutput],
  templateUrl: './poutput.html',
  styleUrl: './poutput.css',
})
export class Poutput {

  // Old way

    public msgFromChildComponent:string = '';

    receiveMsgFromChild(msg:string) {
      this.msgFromChildComponent = msg;
    }

  // new way


}
