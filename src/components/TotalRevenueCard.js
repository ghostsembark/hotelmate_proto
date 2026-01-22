
import Chart from 'chart.js/auto';
import { renderButton } from './flowbite/Button.js';

const DOWN_ARROW_SVG = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/**
 * Renders the HTML structure for the Total Revenue Card
 * @param {Object} props
 * @param {string} props.title - Card title (default "Total Visits")
 * @param {string} props.value - Main value (default "90")
 * @param {string} props.date - Footer date/label (default "7 Jan")
 * @param {string} props.canvasId - Unique ID for the canvas element (for graph variant)
 * @param {string} props.variant - 'graph' | 'bar' (default 'graph')
 * @param {string} props.dropdownLabel - Label for the dropdown button (default "This Week")
 * @param {Object} props.barData - Data for bar variant { labels: [], values: [] }
 * @returns {string} HTML string
 */
export const renderTotalRevenueCard = ({
  title = "Total Visits",
  value = "90",
  date = "7 Jan",
  canvasId = "revenue-chart",
  variant = "graph",
  dropdownLabel = "This Week",
  barData = {
    values: [50, 50, 42, 48, 25, 28, 27],
    labels: ['1 Jan', '2', '3', '4', '5', '6', '7 Jan'],
    maxValue: 50 // To calculate bar heights relative to max
  }
} = {}) => {

  // Use existing Button atom
  const dropdownButton = renderButton({
    label: dropdownLabel,
    color: 'white', // Using white variant as base, might need custom styling if 'white' isn't explicitly defined in Button.js logic but falls back. 
    // Button.js doesn't seem to have 'white' in comments, but usually 'light' or similar. 
    // Based on Figma, it looks like a white button with border. 
    // Let's use 'outline' with 'secondary' or manual styling props if needed.
    // Looking at previous specific implementation: bg-white border border-default text-body. 
    // Let's use extraClass for specific overrides if standard variants don't match 100%.
    size: 'xs', // px-3 py-1.5 matches small/xs
    rightIconSvg: DOWN_ARROW_SVG,
    extraClass: 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50' // Tailwind utility fallback ensuring exact look
  });

  return `
    <div class=" flex flex-col gap-4 bg-white border border-gray-200 rounded-lg p-5 w-full max-w-[500px]" style="background: var(--bg-neutral-primary, #ffffff); border: 1px solid var(--border-default, #e5e7eb); border-radius: var(--rounded-lg, 8px); padding: var(--spacing-5, 20px);">
      
      <!-- Header -->
      <div>
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-base font-medium text-gray-500" style="font-size: var(--text-base, 16px); font-weight: var(--font-medium, 500); color: var(--text-body, #6b7280); margin: 0;">${title}</h3>
          ${dropdownButton}
        </div>

        <!-- Value -->
        <div>
          <span class="text-3xl font-bold text-gray-900" style="font-size: var(--text-3xl, 30px); font-weight: var(--font-bold, 700); color: var(--text-heading, #111827);">${value}</span>
        </div>
      </div>

      <!-- Visualization Content -->
      <div class="mt-4 relative w-full h-[160px]" style="position: relative; height: 160px; width: 100%;">
        ${variant === 'graph' ? renderGraphContent(canvasId) : renderBarContent(barData)}
      </div>

    </div>
  `;
};

function renderGraphContent(canvasId) {
  return `<canvas id="${canvasId}"></canvas>`;
}

function renderBarContent(data) {
  // Simple HTML/CSS Bar implementation based on Figma Node 500:8008
  // Figma shows simple bars with rounded tops.

  const barsHtml = data.values.map((val, index) => {
    const heightPercentage = (val / data.maxValue) * 100;
    const label = data.labels[index] || '';

    return `
      <div class="flex flex-col items-center justify-end h-full flex-1 gap-2">
         <!-- Bar Track (Light Background) - Optional based on design, simplified here to just bar -->
         <div class="w-2 bg-pink-100 rounded-full h-full relative overflow-hidden" style="width: 8px; background-color: #FCE7F3; border-radius: 9999px;">
             <!-- Active Bar -->
             <div class="absolute bottom-0 left-0 w-full bg-pink-500 rounded-full" style="height: ${heightPercentage}%; background-color: #EC4899; border-radius: 9999px;"></div>
         </div>
         <!-- Label -->
         <span class="text-[10px] text-gray-400" style="font-size: 10px; color: #9CA3AF;">${label}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="flex items-end justify-between h-full w-full gap-2 pt-4">
        <!-- Y-Axis (Simplified/Hidden as per clean design or added if needed) --> 
        <!-- Design shows Y-axis labels 50k..10k on left -->
        <div class="flex flex-col justify-between h-[85%] text-[10px] text-gray-400 pb-6" style="font-size: 10px; color: #9CA3AF;">
            <span>${data.maxValue}k</span>
            <span>${Math.round(data.maxValue * 0.8)}k</span>
            <span>${Math.round(data.maxValue * 0.6)}k</span>
            <span>${Math.round(data.maxValue * 0.4)}k</span>
            <span>${Math.round(data.maxValue * 0.2)}k</span>
        </div>

        <div class="flex items-end justify-between flex-1 h-full gap-1 pl-2">
            ${barsHtml}
        </div>
    </div>
  `;
}

/**
 * Initializes the Chart.js instance for the card (Only for 'graph' variant)
 * @param {string} canvasId - The ID of the canvas element
 * @param {Object} data - Chart data configuration
 */
export const initTotalRevenueCard = (canvasId, data = {}) => {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null; // Canvas might not exist if variant is 'bar'

  // Default data matching Figma
  const defaultLabels = ['1 Jan', '2', '3', '4', '5', '6', '7 Jan'];
  const defaultData = [10, 25, 18, 48, 9, 9, 35];

  const existingChart = Chart.getChart(ctx);
  if (existingChart) existingChart.destroy();

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels || defaultLabels,
      datasets: [{
        label: 'Visits',
        data: data.values || defaultData,
        borderColor: '#2DD4BF', // Teal-400 matches Figma
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        x: {
          display: true,
          grid: { display: false },
          ticks: {
            color: '#9CA3AF',
            font: { size: 10, family: 'Inter, sans-serif' },
            maxRotation: 0,
            autoSkip: false
          },
          border: { display: false }
        },
        y: {
          display: true,
          min: 0,
          max: 50,
          grid: { display: false },
          ticks: {
            color: '#9CA3AF',
            font: { size: 10, family: 'Inter, sans-serif' },
            stepSize: 10
          },
          border: { display: false }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });
};
