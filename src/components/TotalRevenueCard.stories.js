import { renderTotalRevenueCard, setupTotalRevenueCardHandlers } from './TotalRevenueCard';

/**
 * TotalRevenueCard Component Stories
 * Figma Node: 174:4415
 */
export default {
  title: 'Dashboard/TotalRevenueCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A card component displaying total revenue with an interactive bar chart. Used in the Hotel Dashboard.',
      },
    },
  },
  argTypes: {
    title: { 
      control: 'text', 
      description: 'Card title displayed in the header',
      table: { defaultValue: { summary: 'Total Revenue' } },
    },
    value: { 
      control: 'text', 
      description: 'Main metric value to display',
      table: { defaultValue: { summary: 'INR 2,90,000' } },
    },
    timePeriod: { 
      control: 'select',
      options: ['This Week', 'This Month', 'This Year'],
      description: 'Currently selected time period',
      table: { defaultValue: { summary: 'This Week' } },
    },
    variant: {
      control: 'radio',
      options: ['default', 'loading', 'empty'],
      description: 'Display variant of the card',
      table: { defaultValue: { summary: 'default' } },
    },
  },
};

// Template for stories
const Template = (args) => {
  const id = `card-${Date.now()}`;
  const html = renderTotalRevenueCard({ ...args, id });
  
  // Initialize chart and handlers after render
  setTimeout(() => {
    if (args.variant === 'default' || !args.variant) {
      setupTotalRevenueCardHandlers({ 
        id, 
        chartData: args.chartData,
        onTimePeriodChange: (value) => console.log(`Time period changed to: ${value}`),
      });
    }
  }, 100);
  
  return html;
};

/**
 * Default state with revenue data
 */
export const Default = Template.bind({});
Default.args = {
  title: 'Total Revenue',
  value: 'INR 2,90,000',
  timePeriod: 'This Week',
  variant: 'default',
};

/**
 * Loading skeleton state
 */
export const Loading = Template.bind({});
Loading.args = {
  variant: 'loading',
};
Loading.parameters = {
  docs: {
    description: {
      story: 'Shows a skeleton loader while data is being fetched.',
    },
  },
};

/**
 * Empty state when no data is available
 */
export const Empty = Template.bind({});
Empty.args = {
  title: 'Total Revenue',
  variant: 'empty',
};
Empty.parameters = {
  docs: {
    description: {
      story: 'Displayed when there is no revenue data for the selected period.',
    },
  },
};

/**
 * Custom data example with monthly visualization
 */
export const MonthlyView = Template.bind({});
MonthlyView.args = {
  title: 'Monthly Revenue',
  value: 'INR 12,45,000',
  timePeriod: 'This Month',
  variant: 'default',
  chartData: [
    { label: 'Week 1', value: 280000 },
    { label: 'Week 2', value: 320000 },
    { label: 'Week 3', value: 290000 },
    { label: 'Week 4', value: 355000 },
  ],
};
MonthlyView.parameters = {
  docs: {
    description: {
      story: 'Shows monthly revenue with weekly breakdown.',
    },
  },
};

/**
 * Yearly view with quarterly data
 */
export const YearlyView = Template.bind({});
YearlyView.args = {
  title: 'Yearly Revenue',
  value: 'INR 1,45,00,000',
  timePeriod: 'This Year',
  variant: 'default',
  chartData: [
    { label: 'Q1', value: 3200000 },
    { label: 'Q2', value: 3800000 },
    { label: 'Q3', value: 4100000 },
    { label: 'Q4', value: 3400000 },
  ],
};
