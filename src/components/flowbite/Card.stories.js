/**
 * Flowbite Card Component Stories
 * Based on Flowbite design system with Enterprise/Mono theme support
 */

export default {
  title: 'Flowbite/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Flowbite card components for content containers.',
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Card title' },
    description: { control: 'text', description: 'Card description' },
    withHeader: { control: 'boolean', description: 'Show header section' },
    withFooter: { control: 'boolean', description: 'Show footer section' },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card content. It can contain multiple lines of text.',
  },
  render: (args) => `
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">${args.title}</h5>
      <p class="mb-3 font-normal text-gray-500">${args.description}</p>
      <a href="#" class="inline-flex items-center text-cyan-600 hover:underline">
        Read more
        <svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  `,
};

export const WithHeader = {
  render: () => `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <h5 class="text-lg font-semibold text-gray-900">Card Header</h5>
        <button type="button" class="text-gray-400 hover:text-gray-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
          </svg>
        </button>
      </div>
      <div class="p-4">
        <p class="text-gray-600">Card content goes here. This card has a header section with a title and action button.</p>
      </div>
    </div>
  `,
};

export const WithFooter = {
  render: () => `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div class="p-4">
        <h5 class="mb-2 text-lg font-semibold text-gray-900">Card with Footer</h5>
        <p class="text-gray-600">Card content with a footer section containing actions.</p>
      </div>
      <div class="flex items-center justify-end gap-2 px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <button type="button" class="text-gray-600 hover:text-gray-800 font-medium text-sm px-4 py-2">Cancel</button>
        <button type="button" class="text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-4 py-2">Save</button>
      </div>
    </div>
  `,
};

export const MetricCard = {
  render: () => `
    <div class="max-w-xs p-4 bg-white border border-gray-200 rounded-lg">
      <h5 class="text-base font-medium text-gray-500 mb-2">New Request</h5>
      <div class="text-xl font-bold text-gray-900 mb-3">10</div>
      <a href="#" class="text-sm font-medium text-cyan-600 hover:underline">View</a>
    </div>
  `,
};

export const TealHeaderCard = {
  render: () => `
    <div class="max-w-sm bg-teal-600 rounded-lg p-3">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
          <svg class="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </div>
        <h2 class="text-base font-semibold text-white">Rate Card Requests</h2>
      </div>
      <div class="bg-white rounded p-3">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-gray-900">ABC DMC</span>
          <span class="text-xs text-gray-400">a min. ago</span>
        </div>
        <span class="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          New Request
        </span>
      </div>
    </div>
  `,
};
