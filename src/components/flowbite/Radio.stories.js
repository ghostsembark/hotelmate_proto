/**
 * Radio Component Stories
 * Figma: https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54726
 * 
 * Variants:
 * - Types: Simple, With Helper, Card
 * - States: Initial, Focus, Disabled
 * - Checked: True/False
 */

import { renderRadio, renderRadioGroup, setupRadioGroup } from './Radio.js';

export default {
  title: 'Flowbite/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Radio button component from HotelMate design system. Supports simple, with helper text, and card type variants.',
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
      description: 'Whether radio is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether radio is disabled',
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
  const id = `radio-${Date.now()}`;
  const name = args.name || 'radio-single';
  const html = renderRadio({ ...args, id, name });
  
  setTimeout(() => {
    setupRadioGroup(name, (value) => {
      console.log(`Radio selected: ${value}`);
    });
  }, 50);
  
  return html;
};

// =====================
// BASIC STORIES
// =====================

/** Default - Simple unchecked radio */
export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'demo-1',
};

/** Checked State */
export const Checked = Template.bind({});
Checked.args = {
  label: 'Selected option',
  name: 'demo-2',
  checked: true,
};

/** Disabled - Unchecked */
export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  label: 'Disabled option',
  name: 'demo-3',
  disabled: true,
};

/** Disabled - Checked */
export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Disabled selected',
  name: 'demo-4',
  checked: true,
  disabled: true,
};

// =====================
// WITH HELPER TEXT
// =====================

/** With Helper Text */
export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Standard delivery',
  helperText: 'Free, arrives in 7-10 days',
  type: 'withHelper',
  name: 'demo-5',
};

// =====================
// CARD TYPE
// =====================

/** Card Style */
export const CardStyle = Template.bind({});
CardStyle.args = {
  label: 'Pay with card',
  helperText: 'Visa, Mastercard, Amex',
  type: 'card',
  name: 'demo-6',
};

/** Card Style - Checked */
export const CardStyleChecked = Template.bind({});
CardStyleChecked.args = {
  label: 'Pay with UPI',
  helperText: 'Google Pay, PhonePe, Paytm',
  type: 'card',
  name: 'demo-7',
  checked: true,
};

// =====================
// RADIO GROUP
// =====================

/** Radio Group - Vertical (Default) */
export const RadioGroupVertical = {
  render: () => {
    const html = renderRadioGroup({
      name: 'room-type',
      options: [
        { label: 'Standard Room', value: 'standard', checked: true },
        { label: 'Deluxe Room', value: 'deluxe' },
        { label: 'Suite', value: 'suite' },
        { label: 'Family Room', value: 'family' },
      ],
    });
    
    setTimeout(() => {
      setupRadioGroup('room-type', (value) => {
        console.log(`Selected room: ${value}`);
      });
    }, 100);
    
    return html;
  },
};

/** Radio Group - Horizontal */
export const RadioGroupHorizontal = {
  render: () => {
    const html = renderRadioGroup({
      name: 'rating',
      layout: 'horizontal',
      options: [
        { label: '3 Star', value: '3' },
        { label: '4 Star', value: '4', checked: true },
        { label: '5 Star', value: '5' },
      ],
    });
    
    setTimeout(() => {
      setupRadioGroup('rating', (value) => {
        console.log(`Selected rating: ${value}`);
      });
    }, 100);
    
    return html;
  },
};

/** Radio Group - With Helper Text */
export const RadioGroupWithHelper = {
  render: () => {
    const html = renderRadioGroup({
      name: 'shipping',
      type: 'withHelper',
      options: [
        { label: 'Standard Shipping', helperText: 'Free, 7-10 business days', value: 'standard' },
        { label: 'Express Shipping', helperText: '$9.99, 2-3 business days', value: 'express', checked: true },
        { label: 'Next Day Delivery', helperText: '$24.99, next business day', value: 'nextday' },
      ],
    });
    
    setTimeout(() => {
      setupRadioGroup('shipping', (value) => {
        console.log(`Selected shipping: ${value}`);
      });
    }, 100);
    
    return html;
  },
};

/** Radio Group - Cards */
export const RadioGroupCards = {
  render: () => {
    const html = renderRadioGroup({
      name: 'payment',
      type: 'card',
      options: [
        { label: 'Credit Card', helperText: 'Visa, Mastercard, Amex', value: 'card' },
        { label: 'UPI', helperText: 'Google Pay, PhonePe', value: 'upi', checked: true },
        { label: 'Net Banking', helperText: 'All major banks', value: 'netbanking' },
      ],
    });
    
    setTimeout(() => {
      setupRadioGroup('payment', (value) => {
        console.log(`Selected payment: ${value}`);
      });
    }, 100);
    
    return html;
  },
};

// =====================
// ALL STATES COMPARISON
// =====================

/** All States - Visual reference */
export const AllStates = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="font-size: 12px; color: #6b7280; margin: 0;">Unchecked</h4>
        ${renderRadio({ id: 'state-1', name: 'state-group-1', label: 'Initial' })}
        ${renderRadio({ id: 'state-2', name: 'state-group-2', label: 'Disabled', disabled: true })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h4 style="font-size: 12px; color: #6b7280; margin: 0;">Checked</h4>
        ${renderRadio({ id: 'state-3', name: 'state-group-3', label: 'Initial', checked: true })}
        ${renderRadio({ id: 'state-4', name: 'state-group-4', label: 'Disabled', checked: true, disabled: true })}
      </div>
    </div>
  `,
};

// =====================
// USE CASES
// =====================

/** Extra Bed Options - From step3 side sheet */
export const ExtraBedOptions = {
  render: () => {
    const html = renderRadioGroup({
      name: 'extra-bed',
      layout: 'horizontal',
      options: [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no', checked: true },
      ],
    });
    
    setTimeout(() => {
      setupRadioGroup('extra-bed', (value) => {
        console.log(`Extra bed allowed: ${value}`);
      });
    }, 100);
    
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
        <span style="font-size: 14px; font-weight: 500;">Can this room accommodate extra beds?</span>
        ${html}
      </div>
    `;
  },
};

/** Meal Type Selection */
export const MealTypeSelection = {
  render: () => {
    const html = renderRadioGroup({
      name: 'meal-type',
      options: [
        { label: 'Room Only', value: 'room_only', checked: true },
        { label: 'Breakfast Included', value: 'breakfast' },
        { label: 'Half Board', value: 'half_board' },
        { label: 'Full Board', value: 'full_board' },
        { label: 'All Inclusive', value: 'all_inclusive' },
      ],
    });
    
    setTimeout(() => {
      setupRadioGroup('meal-type');
    }, 100);
    
    return html;
  },
};
