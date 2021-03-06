import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    
    if (!searchText) { 
      items.sort((a: any, b: any) => {
        if (a.Title < b.Title) {
          return -1;
        } else if (a.Title > b.Title) {
          return 1;
        } else {
          return 0;
        }
      });
      return items; }
    searchText = searchText.toLowerCase();

    var items =  items.filter( (x) => {
      // console.log(x);
      return x.Title.toLowerCase().includes(searchText);
    });
    items.sort((a: any, b: any) => {
      if (a.Title < b.Title) {
        return -1;
      } else if (a.Title > b.Title) {
        return 1;
      } else {
        return 0;
      }
    });
    return items;
  }
}
