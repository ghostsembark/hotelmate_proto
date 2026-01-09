/**
 * Input Field Component Stories
 * Figma: 1149:46505, 1149:46826
 * 
 * Complete variants from Figma:
 * - Types: Default, With Icon, With Prefix, With Button
 * - Sizes: sm (36px), base (40px), lg (48px), xl (56px)
 * - States: Initial, Focus/Typing, Filled, Disabled, Read-only, Success, Danger
 */

import { renderInput, setupInput } from './Input.js';

export default {
  title: 'Flowbite/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Input field component from HotelMate design system (Figma node 1149:46826). Supports 4 sizes, 7 states, icons, prefixes, and inline buttons.',
      },
    },
  },
  argTypes: {
    label: { 
      control: 'text', 
      description: 'Label text above input',
    },
    placeholder: { 
      control: 'text', 
      description: 'Placeholder text',
    },
    value: { 
      control: 'text', 
      description: 'Input value',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'url'],
      description: 'Input type',
    },
    state: {
      control: 'select',
      options: ['default', 'focus', 'filled', 'error', 'success', 'disabled', 'readonly'],
      description: 'Visual state',
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl'],
      description: 'Size: sm=36px, base=40px, lg=48px, xl=56px',
    },
    required: { control: 'boolean' },
    showLabel: { 
      control: 'boolean',
      description: 'Toggle label visibility',
    },
    helperText: { control: 'text' },
    leftIcon: { 
      control: 'select',
      options: [null, 'user', 'email', 'search'],
    },
    rightIcon: { 
      control: 'select',
      options: [null, 'clear', 'chevron'],
    },
    prefix: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

// Template using the actual component
const Template = (args) => {
  const id = `input-${Date.now()}`;
  const html = renderInput({ ...args, id });
  setTimeout(() => setupInput(id, { onChange: (v) => console.log(v) }), 50);
  return `<div style="max-width: 384px;">${html}</div>`;
};

// =====================
// BASIC STORIES
// =====================

/** Default - Basic input with placeholder */
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder text',
  size: 'base',
};

/** With Value - Filled state */
export const Filled = Template.bind({});
Filled.args = {
  label: 'Email',
  placeholder: 'name@company.com',
  value: 'name@company.com',
  state: 'filled',
  size: 'base',
};

/** Focus/Typing State */
export const Focus = Template.bind({});
Focus.args = {
  label: 'Email',
  placeholder: 'name@company.com',
  value: 'Write some text he...',
  state: 'focus',
};

/** Error/Danger State */
export const Error = Template.bind({});
Error.args = {
  label: 'Email',
  value: 'Write some text he...',
  state: 'error',
  helperText: 'Write some text he...',
};

/** Success State */
export const Success = Template.bind({});
Success.args = {
  label: 'Email',
  value: 'name@company.com',
  state: 'success',
  helperText: 'name@company.com',
};

/** Disabled State */
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  value: 'Write some text he...',
  state: 'disabled',
};

/** Read-only State */
export const Readonly = Template.bind({});
Readonly.args = {
  label: 'Email',
  value: 'Write some text he...',
  state: 'readonly',
};

// =====================
// WITH ICONS
// =====================

/** With Left Icon */
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: 'Username',
  placeholder: 'Placeholder text',
  leftIcon: 'user',
};

/** With Clear Button */
export const WithClearButton = Template.bind({});
WithClearButton.args = {
  label: 'Search',
  value: 'Write some text he...',
  rightIcon: 'clear',
};

/** With Both Icons */
export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  label: 'Email',
  value: 'name@company.com',
  leftIcon: 'email',
  rightIcon: 'clear',
};

// =====================
// WITH PREFIX
// =====================

/** With URL Prefix */
export const WithPrefix = Template.bind({});
WithPrefix.args = {
  label: 'Website',
  placeholder: 'Placeholder text',
  prefix: 'https://',
};

/** With Currency Prefix */
export const WithCurrencyPrefix = Template.bind({});
WithCurrencyPrefix.args = {
  label: 'Price',
  placeholder: '0.00',
  prefix: '₹',
  type: 'number',
};

// =====================
// WITH BUTTON
// =====================

/** With Inline Button */
export const WithButton = Template.bind({});
WithButton.args = {
  label: 'Email Newsletter',
  placeholder: 'Enter your email',
  buttonText: 'Button text',
};

// =====================
// NEW FEATURES (DROPDOWN & NO LABEL)
// =====================

/** Dropdown Variant - Uses chevron and is readonly */
export const Dropdown = Template.bind({});
Dropdown.args = {
  label: 'Select Property Type',
  value: 'Luxury Hotel',
  rightIcon: 'chevron',
};

/** No Label - Hides the label element */
export const NoLabel = Template.bind({});
NoLabel.args = {
  label: 'Hidden Label',
  showLabel: false,
  placeholder: 'Input with no label',
};

// =====================
// ALL SIZES
// =====================

/** All Sizes Comparison */
export const AllSizes = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 384px;">
      ${renderInput({ id: 'size-sm', label: 'Small (36px)', placeholder: 'Placeholder text', size: 'sm' })}
      ${renderInput({ id: 'size-base', label: 'Base (40px) - Default', placeholder: 'Placeholder text', size: 'base' })}
      ${renderInput({ id: 'size-lg', label: 'Large (48px)', placeholder: 'Placeholder text', size: 'lg' })}
      ${renderInput({ id: 'size-xl', label: 'Extra Large (56px)', placeholder: 'Placeholder text', size: 'xl' })}
    </div>
  `,
};

// =====================
// ALL STATES
// =====================

/** All States Comparison */
export const AllStates = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
      ${renderInput({ id: 'default', label: 'Initial', placeholder: 'Placeholder text', state: 'default' })}
      ${renderInput({ id: 'focus', label: 'Focus/Typing', value: 'Write some text he...', state: 'focus' })}
      ${renderInput({ id: 'filled', label: 'Filled', value: 'name@company.com', state: 'filled' })}
      ${renderInput({ id: 'disabled', label: 'Disabled', value: 'Write some text he...', state: 'disabled' })}
      ${renderInput({ id: 'readonly', label: 'Read-only', value: 'Write some text he...', state: 'readonly' })}
      ${renderInput({ id: 'success', label: 'Success', value: 'name@company.com', state: 'success', helperText: 'name@company.com' })}
      ${renderInput({ id: 'error', label: 'Error/Danger', value: 'Write some text he...', state: 'error', helperText: 'Write some text he...' })}
    </div>
  `,
};

// =====================
// WITH ICONS - ALL STATES
// =====================

/** With Icons - All States */
export const WithIconsAllStates = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
      ${renderInput({ id: 'icon-default', label: 'Initial', placeholder: 'Placeholder text', leftIcon: 'user' })}
      ${renderInput({ id: 'icon-focus', label: 'Focus/Typing', value: 'Write some text he...', leftIcon: 'user', state: 'focus' })}
      ${renderInput({ id: 'icon-filled', label: 'Filled', value: 'name@company.com', leftIcon: 'email' })}
      ${renderInput({ id: 'icon-disabled', label: 'Disabled', value: 'Write some text he...', leftIcon: 'user', state: 'disabled' })}
      ${renderInput({ id: 'icon-error', label: 'Error', value: 'Write some text he...', leftIcon: 'email', state: 'error', helperText: 'Error message' })}
      ${renderInput({ id: 'icon-success', label: 'Success', value: 'name@company.com', leftIcon: 'email', state: 'success' })}
    </div>
  `,
};

// =====================
// WITH PREFIX - ALL STATES
// =====================

/** With Prefix - All States */
export const WithPrefixAllStates = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
      ${renderInput({ id: 'prefix-default', label: 'Initial', placeholder: 'Placeholder text', prefix: 'https://' })}
      ${renderInput({ id: 'prefix-focus', label: 'Focus/Typing', value: 'Write some text he...', prefix: 'https://', state: 'focus' })}
      ${renderInput({ id: 'prefix-filled', label: 'Filled', value: 'name@company.com', prefix: 'https://' })}
      ${renderInput({ id: 'prefix-disabled', label: 'Disabled', value: 'Write some text he...', prefix: 'https://', state: 'disabled' })}
      ${renderInput({ id: 'prefix-error', label: 'Error', value: 'Write some text he...', prefix: 'https://', state: 'error', helperText: 'Write some text he...' })}
      ${renderInput({ id: 'prefix-success', label: 'Success', value: 'name@company.com', prefix: 'https://', state: 'success' })}
    </div>
  `,
};

// =====================
// WITH BUTTON - ALL STATES
// =====================

/** With Button - All States */
export const WithButtonAllStates = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
      ${renderInput({ id: 'btn-default', label: 'Initial', placeholder: 'Placeholder text', buttonText: 'Button text' })}
      ${renderInput({ id: 'btn-focus', label: 'Focus/Typing', value: 'Write some text he...', buttonText: 'Button text', state: 'focus' })}
      ${renderInput({ id: 'btn-filled', label: 'Filled', value: 'name@company.com', buttonText: 'Button text' })}
      ${renderInput({ id: 'btn-disabled', label: 'Disabled', value: 'Write some text he...', buttonText: 'Button text', state: 'disabled' })}
    </div>
  `,
};

// =====================
// STACKED PLACEHOLDER
// =====================

/** Stacked - XS Counter Style */
export const StackedCounter = {
  render: () => `
    <div style="display: flex; gap: 20px;">
      <div style="display: flex; flex-direction: column; gap: 4px; width: 100px;">
        <span style="font-size: 12px; color: #52525c;">99</span>
        ${renderInput({ id: 'stacked-1', placeholder: 'Placeholder text', size: 'sm' })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 4px; width: 200px;">
        ${renderInput({ id: 'stacked-2', value: 'Write some text he...', size: 'sm', state: 'focus' })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 4px; width: 200px;">
        ${renderInput({ id: 'stacked-3', value: 'name@company.com', size: 'sm', leftIcon: 'email' })}
      </div>
    </div>
  `,
};
