/**
 * Input Stepper Component Stories
 * Figma: https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=3134-12704
 * 
 * Variants from Figma:
 * - Sizes: sm (36px), base (40px), lg (48px), xl (52px)
 * - States: Initial, Focus/Typing, Filled, Disabled, Read-only, Success, Danger
 */

import { renderInputStepper, setupInputStepper } from './InputStepper.js';

export default {
  title: 'Components/InputStepper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Input stepper component with [ - ] [ Value ] [ + ] counter. Used for numeric inputs like room count, occupancy, etc.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Current value',
      table: { defaultValue: { summary: '0' } },
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum allowed value',
      table: { defaultValue: { summary: '0' } },
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum allowed value',
      table: { defaultValue: { summary: '100' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl'],
      description: 'Size variant (sm=36px, base=40px, lg=48px, xl=52px)',
      table: { defaultValue: { summary: 'base' } },
    },
    state: {
      control: 'select',
      options: ['default', 'focus', 'filled', 'disabled', 'readonly', 'success', 'danger'],
      description: 'Visual state',
      table: { defaultValue: { summary: 'default' } },
    },
  },
};

// Template function
const Template = (args) => {
  const { value = 0, min = 0, max = 100, size = 'base', state = 'default' } = args;
  const id = `stepper-${Date.now()}`;
  
  // Get size class
  const sizeClass = size !== 'base' ? `input-stepper-${size}` : '';
  const stateClass = state !== 'default' ? `input-stepper-${state}` : '';
  
  // Render the component
  const html = renderInputStepper({ id, value, min, max });
  
  // Setup after render
  setTimeout(() => {
    setupInputStepper(id, (newValue) => {
      console.log(`Value changed to: ${newValue}`);
    });
    
    // Add size/state classes
    const container = document.getElementById(id);
    if (container) {
      if (sizeClass) container.classList.add(sizeClass);
      if (stateClass) container.classList.add(stateClass);
    }
  }, 50);
  
  return `<div style="display: inline-block;">${html}</div>`;
};

// =====================
// BASIC STORIES
// =====================

/** Default - Initial state with value 0 */
export const Default = Template.bind({});
Default.args = {
  value: 0,
  min: 0,
  max: 10,
};

/** With Value - Pre-filled counter */
export const WithValue = Template.bind({});
WithValue.args = {
  value: 5,
  min: 0,
  max: 10,
};

/** At Minimum - Minus button disabled */
export const AtMinimum = Template.bind({});
AtMinimum.args = {
  value: 0,
  min: 0,
  max: 10,
};

/** At Maximum - Plus button disabled */
export const AtMaximum = Template.bind({});
AtMaximum.args = {
  value: 10,
  min: 0,
  max: 10,
};

/** Custom Range */
export const CustomRange = Template.bind({});
CustomRange.args = {
  value: 50,
  min: 1,
  max: 500,
};

// =====================
// INTERACTIVE DEMO
// =====================

/** Interactive - Try clicking the buttons */
export const Interactive = {
  render: () => {
    const id = 'interactive-stepper';
    return `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div style="display: inline-block;">
          ${renderInputStepper({ id, value: 3, min: 0, max: 10 })}
        </div>
        <p style="font-size: 14px; color: #6b7280;">Click the - and + buttons to change the value. Value range: 0-10</p>
      </div>
    `;
  },
  play: async ({ canvasElement }) => {
    // Setup the stepper after render
    setTimeout(() => {
      setupInputStepper('interactive-stepper', (value) => {
        console.log(`Stepper value: ${value}`);
      });
    }, 100);
  },
};

// =====================
// ALL SIZES (Figma Reference)
// =====================

/** All Sizes - Side by side comparison */
export const AllSizes = {
  render: () => `
    <style>
      .input-stepper-sm { height: 36px !important; width: 110px !important; }
      .input-stepper-sm .stepper-btn { width: 32px; }
      .input-stepper-lg { height: 48px !important; width: 130px !important; }
      .input-stepper-lg .stepper-btn { width: 40px; }
      .input-stepper-xl { height: 52px !important; width: 140px !important; }
      .input-stepper-xl .stepper-btn { width: 44px; }
    </style>
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <span style="width: 100px; font-size: 14px; color: #6b7280;">Small (36px)</span>
        ${renderInputStepper({ id: 'size-sm', value: 1, min: 0, max: 10 }).replace('class="input-stepper"', 'class="input-stepper input-stepper-sm"')}
      </div>
      <div style="display: flex; align-items: center; gap: 16px;">
        <span style="width: 100px; font-size: 14px; color: #6b7280;">Base (40px)</span>
        ${renderInputStepper({ id: 'size-base', value: 2, min: 0, max: 10 })}
      </div>
      <div style="display: flex; align-items: center; gap: 16px;">
        <span style="width: 100px; font-size: 14px; color: #6b7280;">Large (48px)</span>
        ${renderInputStepper({ id: 'size-lg', value: 3, min: 0, max: 10 }).replace('class="input-stepper"', 'class="input-stepper input-stepper-lg"')}
      </div>
      <div style="display: flex; align-items: center; gap: 16px;">
        <span style="width: 100px; font-size: 14px; color: #6b7280;">XL (52px)</span>
        ${renderInputStepper({ id: 'size-xl', value: 4, min: 0, max: 10 }).replace('class="input-stepper"', 'class="input-stepper input-stepper-xl"')}
      </div>
    </div>
  `,
  play: async () => {
    setTimeout(() => {
      setupInputStepper('size-sm');
      setupInputStepper('size-base');
      setupInputStepper('size-lg');
      setupInputStepper('size-xl');
    }, 100);
  },
};

// =====================
// USE CASES
// =====================

/** Room Count - Used in step 3 */
export const RoomCount = {
  render: () => `
    <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
      <span style="font-size: 14px; font-weight: 500; color: #18181b;">Total number of rooms</span>
      ${renderInputStepper({ id: 'room-count', value: 5, min: 1, max: 500 })}
    </div>
  `,
  play: async () => {
    setTimeout(() => {
      setupInputStepper('room-count', (value) => {
        console.log(`Room count: ${value}`);
      });
    }, 100);
  },
};

/** Occupancy - Guest count */
export const Occupancy = {
  render: () => `
    <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
      <span style="font-size: 14px; font-weight: 500; color: #18181b;">Max Occupancy</span>
      ${renderInputStepper({ id: 'occupancy', value: 2, min: 1, max: 10 })}
    </div>
  `,
  play: async () => {
    setTimeout(() => {
      setupInputStepper('occupancy');
    }, 100);
  },
};

/** Children Count */
export const ChildrenCount = {
  render: () => `
    <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
      <span style="font-size: 14px; font-weight: 500; color: #18181b;">Number of children allowed</span>
      ${renderInputStepper({ id: 'children', value: 0, min: 0, max: 5 })}
    </div>
  `,
  play: async () => {
    setTimeout(() => {
      setupInputStepper('children');
    }, 100);
  },
};

// =====================
// STATES (Figma Reference)
// =====================

/** All States - Visual reference */
export const AllStates = {
  render: () => `
    <style>
      .input-stepper-success { border-color: #059669 !important; background-color: #f0fdf4 !important; }
      .input-stepper-danger { border-color: #c10007 !important; background-color: #fef2f2 !important; }
      .input-stepper-disabled { opacity: 0.5; pointer-events: none; background-color: #f9fafb !important; }
    </style>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="font-size: 12px; color: #6b7280;">Initial</span>
        ${renderInputStepper({ id: 'state-initial', value: 0, min: 0, max: 10 })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="font-size: 12px; color: #6b7280;">Filled</span>
        ${renderInputStepper({ id: 'state-filled', value: 5, min: 0, max: 10 })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="font-size: 12px; color: #6b7280;">Success</span>
        ${renderInputStepper({ id: 'state-success', value: 3, min: 0, max: 10 }).replace('class="input-stepper"', 'class="input-stepper input-stepper-success"')}
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="font-size: 12px; color: #6b7280;">Danger</span>
        ${renderInputStepper({ id: 'state-danger', value: 0, min: 0, max: 10 }).replace('class="input-stepper"', 'class="input-stepper input-stepper-danger"')}
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="font-size: 12px; color: #6b7280;">Disabled</span>
        ${renderInputStepper({ id: 'state-disabled', value: 2, min: 0, max: 10 }).replace('class="input-stepper"', 'class="input-stepper input-stepper-disabled"')}
      </div>
    </div>
  `,
  play: async () => {
    setTimeout(() => {
      setupInputStepper('state-initial');
      setupInputStepper('state-filled');
      setupInputStepper('state-success');
      setupInputStepper('state-danger');
    }, 100);
  },
};
