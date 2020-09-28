import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (!term) {
      return items;
    }

    return items.filter((item: any) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
