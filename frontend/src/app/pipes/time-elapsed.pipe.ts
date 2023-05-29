import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 0) {
      return 'Instantâneo';
    }
    const date = new Date(value * 1000);
    const epoch = new Date(0);

    const years = date.getFullYear() - epoch.getFullYear();
    const months = date.getMonth() - epoch.getMonth();
    const days = date.getDay() - epoch.getDay();
    const hours = date.getHours() - epoch.getHours();
    const minutes = date.getMinutes() - epoch.getMinutes();
    const seconds = date.getSeconds() - epoch.getSeconds();

    let string = '';

    if (years > 0) {
      if (string != '') {
        string+= ', ';
      }

      string += this.processPlural(years, 'ano');
    }

    if (months > 0) {
      if (string != '') {
        string+= ', ';
      }

      string += this.processPlural(months, 'mes');
    }

    if (days > 0) {
      if (string != '') {
        string+= ', ';
      }

      string += this.processPlural(days, 'dia');
    }

    if (hours > 0) {
      if (string != '') {
        string+= ', ';
      }

      string += this.processPlural(hours, 'hora');
    }

    if (string == '') {
      if (minutes > 0) {
        string += this.processPlural(minutes, 'minuto');
      }
      
      if (seconds > 0) {
        if (string != '') {
          string+= ', ';
        }
        string += this.processPlural(seconds, 'segundo');
      }
    }
    
    return string;
  }

  processPlural(value: number, text: string): string {
    return `${value} ${(value > 1 ? text + (text == 'mes' ? 'es' : 's') : text)}`;
  }

}
