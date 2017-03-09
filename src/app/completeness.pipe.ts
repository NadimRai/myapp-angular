import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeness'
})
export class CompletenessPipe implements PipeTransform {

  transform(input: Task[], args) {
    return input;
  }

}
