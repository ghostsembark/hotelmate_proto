import { renderButton } from './Button.js';

export default {
  title: 'Flowbite/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { 
      control: 'text', 
      description: 'Button text',
      table: { defaultValue: { summary: 'Button text' } },
    },
    color: {
      control: 'select',
      options: ['brand', 'secondary', 'dark', 'outline', 'ghost', 'destructive', 'success', 'warning', 'dashed'],
      description: 'Button color variant',
      table: { defaultValue: { summary: 'brand' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      description: 'Button size (xs=32px, sm=36px, base=40px, lg=48px, xl=52px)',
      table: { defaultValue: { summary: 'base' } },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    outline: {
      control: 'boolean',
      description: 'Outline style',
    },
    leftIconSvg: { control: 'boolean', description: 'Show left icon' },
    rightIconSvg: { control: 'boolean', description: 'Show right icon' },
    iconOnly: { control: 'boolean', description: 'Icon only button' },
  },
};

const Template = (args) => renderButton(args);

export const SolidBrand = Template.bind({});
SolidBrand.args = {
  label: 'Brand Button',
  color: 'brand',
  size: 'base',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  color: 'secondary',
  size: 'base',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark Button',
  color: 'dark',
  size: 'base',
};

export const OutlineDefault = Template.bind({});
OutlineDefault.args = {
  label: 'Outline Button',
  outline: true,
  size: 'base',
};

export const OutlineBrand = Template.bind({});
OutlineBrand.args = {
  label: 'Outline Brand',
  outline: true,
  color: 'brand',
  size: 'base',
};

export const AllVariants = {
  render: (args) => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${renderButton({ ...args, label: 'Brand Solid', color: 'brand' })}
        ${renderButton({ ...args, label: 'Secondary', color: 'secondary' })}
        ${renderButton({ ...args, label: 'Dark', color: 'dark' })}
        ${renderButton({ ...args, label: 'Destructive', color: 'destructive' })}
        ${renderButton({ ...args, label: 'Success', color: 'success' })}
        ${renderButton({ ...args, label: 'Warning', color: 'warning' })}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${renderButton({ ...args, label: 'Brand Outline', color: 'brand', outline: true })}
        ${renderButton({ ...args, label: 'Secondary Outline', color: 'secondary', outline: true })}
        ${renderButton({ ...args, label: 'Dark Outline', color: 'dark', outline: true })}
        ${renderButton({ ...args, label: 'Default Outline', outline: true })}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${renderButton({ ...args, label: 'Ghost', color: 'ghost' })}
        ${renderButton({ ...args, label: 'Dashed', color: 'dashed' })}
      </div>
    </div>
  `,
};

/** Success button - For positive confirmations */
export const Success = Template.bind({});
Success.args = {
  label: 'Success Button',
  color: 'success',
  size: 'base'
};

/** Destructive button - For dangerous actions */
export const Destructive = Template.bind({});
Destructive.args = {
  label: 'Destructive Button',
  color: 'destructive',
  size: 'base'
};

/** Ghost button - For subtle actions */
export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost Button',
  color: 'ghost',
  size: 'base'
};

/** Warning button - For cautionary actions */
export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Button',
  color: 'warning',
  size: 'base'
};

/** Icon options */
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: 'Back',
  leftIconSvg: true,
  color: 'brand'
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Next Step',
  rightIconSvg: true,
  color: 'brand'
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  leftIconSvg: true,
  color: 'brand',
  label: 'Icon Only'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  color: 'brand',
  size: 'base',
  disabled: true
};

export const AllSizes = {
  render: () => `
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      ${renderButton({ label: 'Size XS', size: 'xs' })}
      ${renderButton({ label: 'Size SM', size: 'sm' })}
      ${renderButton({ label: 'Size Base', size: 'base' })}
      ${renderButton({ label: 'Size LG', size: 'lg' })}
      ${renderButton({ label: 'Size XL', size: 'xl' })}
    </div>
  `,
};
