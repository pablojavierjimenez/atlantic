import {moduleMetadata} from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

// Imports Component dependencies
import { HeaderComponent } from './../../shared/component/header/header.component';
import { ButtonComponent } from './../../shared/component/button/button.component';
import { HomeComponent } from './home.component';

import * as HeaderStories from '../../shared/component/header/Header.stories';
import { RouterModule } from '@angular/router';


export default {
  title: '1 Pages/Home',
  Component: HomeComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, HeaderComponent],
      imports: [CommonModule, RouterModule.forRoot([
        { path: 'home', loadChildren: () => import('./home.module').then(m => m.HomeModule) },
        { path: 'notFound', loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule) },
    ],
    {
      useHash: true
    })],
    providers: [
      { provide: APP_BASE_HREF, userValue: '/' }
    ]
    })
  ]
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  component: HomeComponent,
  props: args
});


export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};






