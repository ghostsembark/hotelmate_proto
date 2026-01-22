
import { renderTotalRevenueCard, initTotalRevenueCard } from './TotalRevenueCard';

export default {
  title: 'Components/TotalRevenueCard',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    date: { control: 'text' },
    variant: { 
      control: 'select', 
      options: ['graph', 'bar'] 
    },
    dropdownLabel: { control: 'text' }
  },
};

// 1. Graph Variant (Matches "Total Visits")
export const GraphVariant = {
  args: {
    title: 'Total Visits',
    value: '90',
    date: '7 Jan',
    variant: 'graph',
    dropdownLabel: 'This Week'
  },
  render: (args) => {
    const canvasId = 'chart-graph-variant';
    return renderTotalRevenueCard({ ...args, canvasId });
  },
  play: async () => {
    setTimeout(() => {
        initTotalRevenueCard('chart-graph-variant', {
            labels: ['1 Jan', '2', '3', '4', '5', '6', '7 Jan'],
            values: [10, 25, 18, 48, 9, 9, 35]
        });
    }, 0);
  },
};

// 2. Bar Variant (Matches "Total Revenue")
export const BarVariant = {
  args: {
    title: 'Total Revenue',
    value: 'INR 2,90,000',
    date: '7 Jan',
    variant: 'bar',
    dropdownLabel: 'This Week',
    barData: {
       values: [50, 50, 42, 48, 25, 28, 27],
       labels: ['1 Jan', '2', '3', '4', '5', '6', '7 Jan'],
       maxValue: 50
    }
  },
  render: (args) => {
    return renderTotalRevenueCard({ ...args });
  },
  // No play function needed for bar variant as it's CSS-based
};

// 3. High Growth Graph Example
export const HighGrowthGraph = {
  args: {
    title: 'Active Users',
    value: '1.2k',
    date: 'Mon - Sun',
    variant: 'graph',
    dropdownLabel: 'Last 7 Days'
  },
  render: (args) => {
    const canvasId = 'chart-high-growth';
    return renderTotalRevenueCard({ ...args, canvasId });
  },
  play: async () => {
    setTimeout(() => {
        initTotalRevenueCard('chart-high-growth', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            values: [10, 15, 20, 30, 40, 45, 50] // Upward trend
        });
    }, 0);
  },
};
