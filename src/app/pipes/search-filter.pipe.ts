import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchString: any): any {
    if (!value) {
      return null;
    }

    if (!searchString) {
      return value;
    }

    return value.filter(data => {
      return JSON.stringify(data).toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
    });
  }

}
