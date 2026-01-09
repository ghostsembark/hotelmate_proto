import { renderBadge } from './Badge.js';

export default {
  title: 'Flowbite/Badge',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Badge text' },
    theme: {
      control: 'select',
      options: ['gray', 'white', 'brand', 'danger', 'warning', 'success'],
      description: 'Color theme from Figma',
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Size (sm=20px, lg=24px)',
    },
    pill: { control: 'boolean', description: 'Fully rounded corners' },
    withDot: { control: 'boolean', description: 'Show status dot' },
    avatar: { control: 'text', description: 'Avatar image URL' },
    iconOnly: { control: 'boolean', description: 'Icon only badge' },
  },
};

const Template = (args) => renderBadge(args);

export const Gray = Template.bind({});
Gray.args = { label: 'Badge', theme: 'gray' };

export const White = Template.bind({});
White.args = { label: 'Badge', theme: 'white' };

export const Brand = Template.bind({});
Brand.args = { label: 'Badge', theme: 'brand' };

export const Danger = Template.bind({});
Danger.args = { label: 'Badge', theme: 'danger' };

export const Warning = Template.bind({});
Warning.args = { label: 'Badge', theme: 'warning' };

export const Success = Template.bind({});
Success.args = { label: 'Badge', theme: 'success' };

export const Large = Template.bind({});
Large.args = { label: 'Large Badge', theme: 'brand', size: 'lg' };

export const Pill = Template.bind({});
Pill.args = { label: 'Pill Badge', theme: 'brand', pill: true };

export const WithDot = Template.bind({});
WithDot.args = { label: 'Status', theme: 'success', withDot: true };

export const WithAvatar = Template.bind({});
WithAvatar.args = { 
  label: 'Bonnie Green', 
  theme: 'gray', 
  avatar: 'http://localhost:3845/assets/07f24b4313a3636719731254b20a53f142074129.png' 
};

export const WithIcon = Template.bind({});
WithIcon.args = { 
  label: 'Settings', 
  theme: 'brand', 
  iconLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` 
};

export const AllVariations = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        ${renderBadge({ theme: 'gray', label: 'Gray' })}
        ${renderBadge({ theme: 'white', label: 'White' })}
        ${renderBadge({ theme: 'brand', label: 'Brand' })}
        ${renderBadge({ theme: 'danger', label: 'Danger' })}
        ${renderBadge({ theme: 'warning', label: 'Warning' })}
        ${renderBadge({ theme: 'success', label: 'Success' })}
      </div>
      
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        ${renderBadge({ theme: 'brand', label: 'Square' })}
        ${renderBadge({ theme: 'brand', label: 'Pill', pill: true })}
        ${renderBadge({ theme: 'brand', label: 'Large', size: 'lg' })}
        ${renderBadge({ theme: 'brand', label: 'Large Pill', size: 'lg', pill: true })}
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        ${renderBadge({ theme: 'success', label: 'Online', withDot: true })}
        ${renderBadge({ theme: 'danger', label: 'Offline', withDot: true, pill: true })}
        ${renderBadge({ theme: 'gray', label: 'Bonnie Green', avatar: 'http://localhost:3845/assets/07f24b4313a3636719731254b20a53f142074129.png' })}
        ${renderBadge({ theme: 'brand', label: 'Settings', iconLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>' })}
      </div>
    </div>
  `,
};
