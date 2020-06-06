import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './pipes/shortcut.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [ShortcutPipe, FilterPipe],
  exports: [ShortcutPipe, FilterPipe],
  imports: [CommonModule],
})
export class SharedModule {}
