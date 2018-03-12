import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForExercise'
})
export class FilterForExercisePipe implements PipeTransform {

  transform(items: any[],  searchText:any): any[] {
    if (!items) {
      return [];
    }
    
    if (!searchText) { 
      items.sort((a: any, b: any) => {
        if (a.Name < b.Name) {
          return -1;
        } else if (a.Name > b.Name) {
          return 1;
        } else {
          return 0;
        }
      });
      return items; }
    searchText = searchText.toLowerCase();

    var items =  items.filter( (x) => {
      // console.log(x);
      return x.Name.toLowerCase().includes(searchText);
    });
    items.sort((a: any, b: any) => {
      if (a.Name < b.Name) {
        return -1;
      } else if (a.Name > b.Name) {
        return 1;
      } else {
        return 0;
      }
    });
    return items;
  }
}
