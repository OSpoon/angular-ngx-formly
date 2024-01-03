import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressionsComponent } from './expressions.component';

// 配置路由
const routes: Routes = [{ path: '', component: ExpressionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressionsRoutingModule {}
