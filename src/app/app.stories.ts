import { storiesOf, moduleMetadata} from '@storybook/angular';
import { AppModule } from './app.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



/**
 * TODO: * NOTA: each new route created should be placed here
 */
storiesOf('2 Components/App Router Outlet', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AppModule,
        RouterModule.forRoot([
          { path: '', pathMatch: 'full', redirectTo: '/home' },
          { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) },
          { path: 'notFound', loadChildren: () => import('./page/not-found/not-found.module').then(m => m.NotFoundModule) },
          {path: '404', loadChildren: () => import('./page/not-found/not-found.module').then(m => m.NotFoundModule)},
          {path: '**', redirectTo: '/404'}
        ],
        {
          useHash: true
        })
      ],
      providers: [
        { provide: APP_BASE_HREF, userValue: '/' }
      ]
    })
  )
  .add('Default', () => ({
    template: `
      <router-outlet><router-outlet>
    `
  }));




