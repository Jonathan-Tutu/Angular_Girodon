import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnHeader'
})
export class ColumnHeaderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'id':
        return 'Id';
      case 'ref':
        return 'Référence';
      case 'date':
        return 'Date';
      case 'price':
        return 'Prix';
      case 'firstname':
        return 'Prénom';
      case 'lastname':
        return 'Nom';
      case 'city':
        return 'Ville';
      default:
        return '';
    }
  }

}
