/**
 * Checkbox Component Stories
 * Figma: https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54707
 * 
 * Variants:
 * - Types: Simple, With Helper, Card
 * - States: Initial, Focus, Disabled
 * - Checked: True/False
 */

import { renderCheckbox, renderCheckboxGroup, setupCheckbox } from './Checkbox.js';

export default {
  title: 'Flowbite/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Checkbox component from HotelMate design system. Supports simple, with helper text, and card type variants.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below label',
    },
    checked: {
      control: 'boolean',
      description: 'Whether checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether checkbox is disabled',
    },
    type: {
      control: 'select',
      options: ['simple', 'withHelper', 'card'],
      description: 'Type variant',
    },
  },
};

// Template function
const Template = (args) => {
  const id = `checkbox-${Date.now()}`;
  const html = renderCheckbox({ ...args, id });
  
  setTimeout(() => {
    setupCheckbox(id, (checked, value) => {
      console.log(`Checkbox ${checked ? 'checked' : 'unchecked'}: ${value}`);
    });
  }, 50);
  
  return html;
};

// =====================
// BASIC STORIES
// =====================

/** Default - Simple checkbox */
export const Default = Template.bind({});
Default.args = {
  label: 'I agree to the terms and conditions',
  checked: false,
};

/** Checked State */
export const Checked = Template.bind({});
Checked.args = {
  label: 'Remember me',
  checked: true,
};

/** Disabled - Unchecked */
export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  label: 'Disabled option',
  checked: false,
  disabled: true,
};

/** Disabled - Checked */
export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Disabled selected',
  checked: true,
  disabled: true,
};

// =====================
// WITH HELPER TEXT
// =====================

/** With Helper Text */
export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Free shipping',
  helperText: 'For orders over $100',
  type: 'withHelper',
};

/** With Helper - Checked */
export const WithHelperChecked = Template.bind({});
WithHelperChecked.args = {
  label: 'Premium support',
  helperText: '24/7 phone and email support',
  type: 'withHelper',
  checked: true,
};

// =====================
// CARD TYPE
// =====================

/** Card Style */
export const CardStyle = Template.bind({});
CardStyle.args = {
  label: 'Standard Shipping',
  helperText: '4-10 business days',
  type: 'card',
};

/** Card Style - Checked */
export const CardStyleChecked = Template.bind({});
CardStyleChecked.args = {
  label: 'Express Shipping',
  helperText: '2-5 business days',
  type: 'card',
  checked: true,
};

// =====================
// ALL STATES
// =====================

/** All States - Visual reference */
export const AllStates = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="font-size: 12px; color: #6b7280; margin: 0;">Unchecked</h4>
        ${renderCheckbox({ id: 'state-1', label: 'Initial', checked: false })}
        ${renderCheckbox({ id: 'state-2', label: 'Disabled', checked: false, disabled: true })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="font-size: 12px; color: #6b7280; margin: 0;">Checked</h4>
        ${renderCheckbox({ id: 'state-3', label: 'Initial', checked: true })}
        ${renderCheckbox({ id: 'state-4', label: 'Disabled', checked: true, disabled: true })}
      </div>
    </div>
  `,
  play: async () => {
    setTimeout(() => {
      setupCheckbox('state-1');
      setupCheckbox('state-3');
    }, 100);
  },
};

// =====================
// CHECKBOX GROUP
// =====================

/** Checkbox Group - Vertical */
export const CheckboxGroupVertical = {
  render: () => renderCheckboxGroup({
    name: 'amenities',
    options: [
      { label: 'Free WiFi', value: 'wifi', checked: true },
      { label: 'Swimming Pool', value: 'pool' },
      { label: 'Gym', value: 'gym' },
      { label: 'Spa', value: 'spa' },
      { label: 'Restaurant', value: 'restaurant', checked: true },
    ],
  }),
};

/** Checkbox Group - Horizontal */
export const CheckboxGroupHorizontal = {
  render: () => renderCheckboxGroup({
    name: 'days',
    layout: 'horizontal',
    options: [
      { label: 'Mon', value: 'mon' },
      { label: 'Tue', value: 'tue', checked: true },
      { label: 'Wed', value: 'wed', checked: true },
      { label: 'Thu', value: 'thu' },
      { label: 'Fri', value: 'fri' },
    ],
  }),
};

/** Checkbox Group - Cards */
export const CheckboxGroupCards = {
  render: () => renderCheckboxGroup({
    name: 'features',
    type: 'card',
    options: [
      { label: 'Sea View', helperText: 'Overlooking the ocean', value: 'sea', checked: true },
      { label: 'Mountain View', helperText: 'Scenic mountain backdrop', value: 'mountain' },
      { label: 'Garden View', helperText: 'Beautiful garden scenery', value: 'garden' },
    ],
  }),
};

// =====================
// USE CASES
// =====================

/** Terms & Conditions */
export const TermsAndConditions = Template.bind({});
TermsAndConditions.args = {
  label: 'I agree to the Terms of Service and Privacy Policy',
  type: 'simple',
};

/** Newsletter Signup */
export const Newsletter = Template.bind({});
Newsletter.args = {
  label: 'Subscribe to newsletter',
  helperText: 'Get updates on new features and promotions',
  type: 'withHelper',
};
