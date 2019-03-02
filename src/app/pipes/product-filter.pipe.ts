import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    if (filter === 'lowToHigh') {
      console.log(filter);
      return value.sort((a, b) => a.price - b.price);
    } else if (filter === 'highToLow') {
      console.log(filter);
      return value.sort((a, b) => b.price - a.price);
    } else if (filter === 'popularProduct') {
      console.log(filter);
      return value.sort((a, b) => a.populatiry - b.populatiry);
    } else {
      return value;
    }
  }

}
