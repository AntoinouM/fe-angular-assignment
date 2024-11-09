import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year',
  standalone: true
})
export class YearPipe implements PipeTransform {
  transform(value: Date | string | null | undefined): number | null {
    if (!value) {
      return null;
    }

    const date = typeof value === 'string' ? new Date(value) : value;
    if (date instanceof Date && !isNaN(date.getTime())) {
      return date.getFullYear();
    }
    return null;
  }
}