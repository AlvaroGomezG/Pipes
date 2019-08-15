import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, contrasenaActivar: boolean): any {

    let result = value.split('');
if( contrasenaActivar ) {
    for ( let i in result) {
    result[i] = '*';
    }
    return result.join('');
  }
  return value;
  }

}
