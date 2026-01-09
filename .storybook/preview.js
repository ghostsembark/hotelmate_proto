// Import global styles (Tailwind + custom tokens)
import '../src/style.css';

// Import Flowbite CSS
import 'flowbite/dist/flowbite.min.css';

// Import Flowbite JS for interactive components (dropdowns, modals, etc.)
import 'flowbite';

// Import Chart.js for chart components
import Chart from 'chart.js/auto';
window.Chart = Chart;

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'app-bg',
      values: [
        { name: 'app-bg', value: '#F7F9FA' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'brand-dark', value: '#1D6A7C' },
        { name: 'teal', value: '#009689' },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
  
  // Global args for theme switching
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: '',  // Empty = Enterprise (default in CSS)
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: '', title: 'Enterprise (Hotel)', icon: 'building' },
          { value: 'mono', title: 'Mono (DMC)', icon: 'globe' },
          { value: 'enterprise-dark', title: 'Enterprise Dark', icon: 'moon' },
          { value: 'mono-dark', title: 'Mono Dark', icon: 'circle' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  
  // Apply theme decorator to all stories
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || '';
      const themeAttr = theme ? `data-theme="${theme}"` : '';
      return `
        <div ${themeAttr} class="font-sans antialiased min-h-[200px]">
          ${Story()}
        </div>
      `;
    },
  ],
};

export default preview;