import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'properties-options',
    loadChildren: () =>
      import('./pages/properties-options/properties-options.module').then(
        (m) => m.PropertiesOptionsModule
      ),
  },
  {
    path: 'expressions',
    loadChildren: () =>
      import('./pages/expressions/expressions.module').then(
        (m) => m.ExpressionsModule
      ),
  },
  {
    path: 'verify',
    loadChildren: () =>
      import('./pages/verify/verify.module').then((m) => m.VerifyModule),
  },
  {
    path: 'types',
    loadChildren: () =>
      import('./pages/types/types.module').then((m) => m.TypesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
