import { renderDropdown, setupDropdownSheet } from './Dropdown.js';

export default {
  title: 'Flowbite/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Integrated Flowbite dropdown component combining an input trigger and a selection sheet.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xl'],
    },
    options: { control: 'object' },
    showLabel: { control: 'boolean' },
  },
};

const Template = (args) => {
  const id = `dropdown-${Math.floor(Math.random() * 1000000)}`;
  const dropdownId = `menu-${id}`;
  const html = renderDropdown({ ...args, id, dropdownId });
  
  // Use setTimeout to ensure the DOM is ready for event listeners
  setTimeout(() => {
    setupDropdownSheet(id, dropdownId, (val) => {
      console.log(`Selected value: ${val}`);
    });
  }, 100);
  
  return `<div style="max-width: 320px; min-height: 250px;">${html}</div>`;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Time',
  value: '09:00 AM',
  options: ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM'],
  size: 'sm',
};

export const BaseSize = Template.bind({});
BaseSize.args = {
  label: 'Policy Timing',
  value: 'On booking',
  options: ['Before check-in', 'After check-in', 'On booking'],
  size: 'base',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  label: 'Large Selection',
  value: 'Option 1',
  options: ['Option 1', 'Option 2', 'Option 3'],
  size: 'lg',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: 'Hidden Label',
  showLabel: false,
  value: 'No Label Dropdown',
  options: ['Item A', 'Item B', 'Item C'],
  size: 'base',
};
