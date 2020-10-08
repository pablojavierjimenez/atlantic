// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from './footer.component';


export default {
  title: '2 Components/App-Footer',
  component: FooterComponent
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  component: FooterComponent
});

export const Default = Template.bind({});
