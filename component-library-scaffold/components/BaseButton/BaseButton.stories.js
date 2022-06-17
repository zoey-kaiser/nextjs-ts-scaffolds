import React from 'react';
import { BaseButton } from './BaseButton';

export default {
    title: 'BaseButton',
    component: BaseButton,
    argTypes: {
        disabled: false,
        type: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'error'] } },
        onClick: { actions: 'clicked' },
    },
};

const Template = args => <BaseButton {...args}>Button</BaseButton>;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    disabled: false,
    type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
    disabled: false,
    type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
    disabled: false,
    type: 'danger',
};
