import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-control-flows',
  imports: [],
  templateUrl: './control-flows.html',
  styleUrl: './control-flows.css',
})
export class ControlFlows {

  public isLogin = signal(false);
  loginbtn(status:boolean) {
    this.isLogin.set(status)
  }

  public toggle:WritableSignal<boolean> = signal(true)

  public status = signal('')
  handledStatus(event:Event) {
    let target = event.target as HTMLSelectElement
    this.status.set(target.value)
  }

  public country = signal('');

  public users = signal(['one','two','three','four','five']);
  
}
