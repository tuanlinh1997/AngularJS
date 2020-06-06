import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';

// component là sử dụng cho route là component
const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangChuRoutingModule {}
