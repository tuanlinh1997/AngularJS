import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any[],
    compareValue: any,
    compare: (value: any, compareValue: any) => boolean
  ): unknown {
    return value.filter((item) => compare(item, compareValue));
  }
}

// arr.filter(item => item === ValueCompare)
