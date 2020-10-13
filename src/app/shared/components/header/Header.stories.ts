import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

export default {
  title: '2 Components/App-Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, RouterModule.forRoot([
          { path: 'home', loadChildren: () => import('../../../page/home/home.module').then(m => m.HomeModule) },
          { path: 'notFound', loadChildren: () => import('../../../page/not-found/not-found.module').then(m => m.NotFoundModule) },
      ],
      {
        useHash: true
      })],
      providers: [
        { provide: APP_BASE_HREF, userValue: '/' }
      ]
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
