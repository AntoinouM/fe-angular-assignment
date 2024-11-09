import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImagePathToUrl implements PipeTransform {
  transform(path: string): string {
    if(!path) return '';
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}