import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToList',
  standalone: true
})
export class ArrayToListPipe implements PipeTransform {
  transform(array: { name: string }[]): string {
    if(!array) return '';
    return array.map(item => item.name).join(', ');
  }
}