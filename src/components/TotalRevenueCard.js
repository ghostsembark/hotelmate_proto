/**
 * Total Revenue Card Component
 * Figma Node: 174:4415
 * 
 * Props:
 * - title: string (default: "Total Revenue")
 * - value: string (e.g., "INR 2,90,000")
 * - chartData: array of { label: string, value: number }
 * - timePeriod: string (default: "This Week")
 * - onTimePeriodChange: function (callback when dropdown changes)
 * 
 * Variants:
 * - Default: Shows bar chart with pink gradient
 * - Loading: Shows skeleton loader
 * - Empty: Shows "No data available" message
 */

/**
 * Renders the Total Revenue Card component
 * @param {Object} props - Component props
 * @returns {string} HTML string
 */
export function renderTotalRevenueCard(props = {}) {
    const {
        title = 'Total Revenue',
        value = 'INR 2,90,000',
        chartData = [
            { label: '1 Jan', value: 45000 },
            { label: '2', value: 48000 },
            { label: '3', value: 35000 },
            { label: '4', value: 50000 },
            { label: '5', value: 28000 },
            { label: '6', value: 30000 },
            { label: '7 Jan', value: 32000 },
        ],
        timePeriod = 'This Week',
        timePeriodOptions = ['This Week', 'This Month', 'This Year'],
        variant = 'default', // 'default', 'loading', 'empty'
        id = 'total-revenue-card',
    } = props;

    // Generate unique IDs for this instance
    const chartId = `${id}-chart`;
    const dropdownId = `${id}-dropdown`;
    const dropdownMenuId = `${id}-dropdown-menu`;

    // Loading skeleton variant
    if (variant === 'loading') {
        return `
        <div id="${id}" class="bg-white rounded p-4 pt-5 animate-pulse" data-node-id="174:4415">
            <div class="flex items-center justify-between mb-2">
                <div class="h-6 bg-gray-200 rounded w-32"></div>
                <div class="h-8 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="h-8 bg-gray-200 rounded w-40 mb-4"></div>
            <div class="h-40 bg-gray-100 rounded"></div>
        </div>
        `;
    }

    // Empty state variant
    if (variant === 'empty') {
        return `
        <div id="${id}" class="bg-white rounded p-4 pt-5" data-node-id="174:4415">
            <div class="flex items-center justify-between mb-2">
                <span class="text-base font-medium text-gray-500">${title}</span>
                <button class="flex items-center gap-1.5 text-sm font-medium text-cyan-600 border border-gray-200 rounded px-2 py-1.5">
                    ${timePeriod}
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
            </div>
            <div class="text-xl font-bold text-gray-900 mb-4">--</div>
            <div class="h-40 flex items-center justify-center bg-gray-50 rounded">
                <p class="text-gray-400 text-sm">No data available</p>
            </div>
        </div>
        `;
    }

    // Generate dropdown options HTML
    const dropdownOptionsHtml = timePeriodOptions.map(option => `
        <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${option === timePeriod ? 'bg-gray-50 font-medium' : ''}" data-value="${option}">
                ${option}
            </a>
        </li>
    `).join('');

    // Default variant with interactive chart
    return `
    <div id="${id}" class="bg-white rounded p-4 pt-5" data-node-id="174:4415" data-component="total-revenue-card">
        <!-- Header Row -->
        <div class="flex items-center justify-between mb-2" data-node-id="174:4417">
            <span class="text-base font-medium text-gray-500" data-node-id="174:4418">${title}</span>
            
            <!-- Flowbite Dropdown -->
            <div class="relative">
                <button 
                    id="${dropdownId}" 
                    data-dropdown-toggle="${dropdownMenuId}"
                    class="flex items-center gap-1.5 text-sm font-medium text-cyan-600 bg-white border border-gray-200 rounded px-2 py-1.5 hover:bg-gray-50 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-colors"
                    type="button"
                    data-node-id="174:4419"
                >
                    <span class="dropdown-label">${timePeriod}</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                
                <!-- Dropdown Menu -->
                <div id="${dropdownMenuId}" class="hidden z-10 absolute right-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-36 border border-gray-100">
                    <ul class="py-1 text-sm text-gray-700">
                        ${dropdownOptionsHtml}
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Value Display -->
        <div class="text-xl font-bold text-gray-900 mb-4" data-node-id="174:4422">${value}</div>
        
        <!-- Chart Container -->
        <div class="h-44 relative" data-node-id="174:4423">
            <canvas id="${chartId}"></canvas>
        </div>
    </div>
    `;
}

/**
 * Initialize the Total Revenue Card component
 * Sets up Chart.js and event handlers
 * @param {Object} props - Component props
 */
export function setupTotalRevenueCardHandlers(props = {}) {
    const {
        id = 'total-revenue-card',
        chartData = [
            { label: '1 Jan', value: 45000 },
            { label: '2', value: 48000 },
            { label: '3', value: 35000 },
            { label: '4', value: 50000 },
            { label: '5', value: 28000 },
            { label: '6', value: 30000 },
            { label: '7 Jan', value: 32000 },
        ],
        onTimePeriodChange = null,
    } = props;

    const chartId = `${id}-chart`;
    const dropdownId = `${id}-dropdown`;
    const dropdownMenuId = `${id}-dropdown-menu`;

    // Wait for DOM to be ready
    setTimeout(() => {
        const canvas = document.getElementById(chartId);
        if (!canvas) {
            console.warn(`[TotalRevenueCard] Canvas element #${chartId} not found`);
            return;
        }

        const ctx = canvas.getContext('2d');

        // Create gradient for bars
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#EC4899'); // Pink-500
        gradient.addColorStop(1, '#FDF2F8'); // Pink-50

        // Background gradient (lighter)
        const bgGradient = ctx.createLinearGradient(0, 0, 0, 200);
        bgGradient.addColorStop(0, '#FCE7F3'); // Pink-100
        bgGradient.addColorStop(1, '#FDF2F8'); // Pink-50

        // Extract labels and values
        const labels = chartData.map(d => d.label);
        const values = chartData.map(d => d.value);
        const maxValue = Math.max(...values);
        const backgroundValues = values.map(() => maxValue * 1.1); // Background bars at max

        // Create Chart.js instance
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    // Background bars (full height)
                    {
                        label: 'Background',
                        data: backgroundValues,
                        backgroundColor: bgGradient,
                        borderRadius: 4,
                        borderSkipped: false,
                        barPercentage: 0.5,
                        categoryPercentage: 0.8,
                        order: 2,
                    },
                    // Foreground bars (actual values)
                    {
                        label: 'Revenue',
                        data: values,
                        backgroundColor: gradient,
                        borderRadius: 4,
                        borderSkipped: false,
                        barPercentage: 0.5,
                        categoryPercentage: 0.8,
                        order: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: 'white',
                        titleColor: '#111827',
                        bodyColor: '#6B7280',
                        borderColor: '#E5E7EB',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            title: (items) => items[0].label,
                            label: (item) => {
                                if (item.datasetIndex === 1) {
                                    return `INR ${item.raw.toLocaleString('en-IN')}`;
                                }
                                return null;
                            },
                        },
                        filter: (item) => item.datasetIndex === 1,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#8492A6',
                            font: {
                                size: 11,
                                weight: '600',
                            },
                        },
                        border: {
                            display: false,
                        },
                    },
                    y: {
                        position: 'left',
                        grid: {
                            color: '#EDF2F7',
                            drawBorder: false,
                        },
                        ticks: {
                            color: '#8492A6',
                            font: {
                                size: 11,
                                weight: '600',
                            },
                            callback: (value) => {
                                if (value >= 1000) {
                                    return `${Math.floor(value / 1000)}k`;
                                }
                                return Math.floor(value);
                            },
                            stepSize: 10000,
                        },
                        border: {
                            display: false,
                        },
                        min: 0,
                        max: 55000,
                    },
                },
            },
        });

        // Set up dropdown toggle (manual since we're not using full Flowbite JS)
        const dropdownBtn = document.getElementById(dropdownId);
        const dropdownMenu = document.getElementById(dropdownMenuId);

        if (dropdownBtn && dropdownMenu) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdownMenu.classList.toggle('hidden');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdownMenu.classList.add('hidden');
            });

            // Handle option selection
            dropdownMenu.querySelectorAll('a').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const value = option.dataset.value;
                    dropdownBtn.querySelector('.dropdown-label').textContent = value;
                    dropdownMenu.classList.add('hidden');

                    if (onTimePeriodChange && typeof onTimePeriodChange === 'function') {
                        onTimePeriodChange(value);
                    }
                });
            });
        }

        console.log('[TotalRevenueCard] Component initialized successfully');
    }, 100);
}
