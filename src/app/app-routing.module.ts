import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) },
  { path: 'notFound', loadChildren: () => import('./page/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '404', loadChildren: () => import('./page/not-found/not-found.module').then(m => m.NotFoundModule)},
  { path: 'about', loadChildren: () => import('./page/about/about.module').then(m => m.AboutModule) },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
