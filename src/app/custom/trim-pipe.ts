import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (args.length) {
      return value.substring(0,args[0])+"...";
    } else {
      return value.substring(0,10)+"...";
    };
  }

}
