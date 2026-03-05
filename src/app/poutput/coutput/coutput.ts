import { Component, EventEmitter, Output, output, signal } from '@angular/core';

@Component({
  selector: 'app-coutput',
  imports: [],
  templateUrl: './coutput.html',
  styleUrl: './coutput.css',
})
export class Coutput {
// old way
    @Output() notifyParent = new EventEmitter<string>();

    sendMsgFromChild() {
      this.notifyParent.emit('Msg from child!');
    }

// new way

    msg = signal('');

    sendMessageFromChild( ) {
      this.msg.set('Signal Msg from child!')
    }
}
