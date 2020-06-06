import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut',
})
export class ShortcutPipe implements PipeTransform {
  transform(value: string, limit = 20): string {
    return value.substr(0, limit) + '...';
  }
}
