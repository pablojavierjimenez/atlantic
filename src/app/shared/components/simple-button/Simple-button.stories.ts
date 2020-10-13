// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';

import { SimpleButtonComponent } from '../../components/simple-button/simple-button.component';

export default {
  title: '2 Components/App-Simple-Button',
  component: SimpleButtonComponent,
  argTypes: {
    isOn: {
      description: 'este es un boton como vos :P',
      control: {
        type: 'boolean'
      }
    },
  },
} as Meta;

const Template: Story<SimpleButtonComponent> = (args: SimpleButtonComponent) => ({
  component: SimpleButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isOn: false,
  buttonText: 'Simple Button',
  clicked: action('clicked() was triggered, isOn change the default estate to True'),
  message: action('print mesagge')
};

export const IsOnTrue = Template.bind({});
IsOnTrue.args = {
  isOn: true,
  buttonText: 'Simple Button',
  clicked: action('clicked() was triggered, isOn returnd to default state')
};
