---
description: How to integrate and use Storybook.js for component development and documentation
---

# Storybook.js Integration Workflow

## Prerequisites

- Node.js installed
- Project uses Vite, Tailwind CSS, and Flowbite

---

## Step 1: Install Storybook

```bash
npx storybook@latest init --type html
```

When prompted, select:

- Builder: **Vite**
- Framework: **HTML**

This adds:

- `@storybook/html-vite`
- `@storybook/addon-essentials`
- `@storybook/addon-links`

---

## Step 2: Install Chart.js (for chart components)

```bash
npm install chart.js
```

---

## Step 3: Configure Storybook

### `.storybook/main.js`

```javascript
export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
```

### `.storybook/preview.js`

```javascript
// Import global styles (Tailwind + custom)
import "../src/style.css";

// Import Flowbite CSS
import "flowbite/dist/flowbite.min.css";

// Import Flowbite JS for interactive components
import "flowbite";

// Import Chart.js for chart components
import Chart from "chart.js/auto";
window.Chart = Chart;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "app-bg",
    values: [
      { name: "app-bg", value: "#F7F9FA" },
      { name: "white", value: "#FFFFFF" },
      { name: "brand-dark", value: "#1D6A7C" },
      { name: "teal", value: "#009689" },
    ],
  },
};

// Set default theme
export const decorators = [
  (Story) => `
    <div data-theme="enterprise" class="font-sans">
      ${Story()}
    </div>
  `,
];
```

---

## Step 4: Add NPM Scripts

Update `package.json`:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build -o storybook-static"
  }
}
```

---

## Step 5: Create Component Stories

### Story File Structure

For each component in `src/components/`, create a `.stories.js` file:

```
src/components/
├── TotalRevenueCard.js
├── TotalRevenueCard.stories.js
├── Button.js
├── Button.stories.js
└── ...
```

### Example Story: TotalRevenueCard

```javascript
// src/components/TotalRevenueCard.stories.js
import {
  renderTotalRevenueCard,
  setupTotalRevenueCardHandlers,
} from "./TotalRevenueCard";

export default {
  title: "Dashboard/TotalRevenueCard",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Card title" },
    value: { control: "text", description: "Main metric value" },
    timePeriod: {
      control: "select",
      options: ["This Week", "This Month", "This Year"],
      description: "Selected time period",
    },
    variant: {
      control: "radio",
      options: ["default", "loading", "empty"],
      description: "Display variant",
    },
  },
};

const Template = (args) => {
  const id = `card-${Date.now()}`;
  const html = renderTotalRevenueCard({ ...args, id });
  setTimeout(() => {
    if (args.variant === "default") {
      setupTotalRevenueCardHandlers({ id, ...args });
    }
  }, 100);
  return html;
};

export const Default = Template.bind({});
Default.args = {
  title: "Total Revenue",
  value: "INR 2,90,000",
  timePeriod: "This Week",
  variant: "default",
};

export const Loading = Template.bind({});
Loading.args = { variant: "loading" };

export const Empty = Template.bind({});
Empty.args = { variant: "empty", title: "Total Revenue" };

export const CustomData = Template.bind({});
CustomData.args = {
  title: "Monthly Revenue",
  value: "INR 12,45,000",
  timePeriod: "This Month",
  variant: "default",
};
```

---

## Step 6: Document Design Tokens

Create a tokens documentation file:

### `src/tokens/tokens.stories.mdx`

```mdx
import { Meta, ColorPalette, ColorItem } from "@storybook/blocks";

<Meta title="Design System/Tokens" />

# Design Tokens

## Colors

<ColorPalette>
  <ColorItem
    title="Brand"
    subtitle="Primary brand colors"
    colors={{
      "brand-dark": "#1D6A7C",
      "brand-light": "#2A7A8C",
      "brand-accent": "#A2F4FD",
    }}
  />
  <ColorItem
    title="Teal"
    subtitle="Teal palette"
    colors={{
      "teal-500": "#009689",
      "teal-600": "#0694A2",
    }}
  />
  <ColorItem
    title="Gray"
    subtitle="Neutral grays"
    colors={{
      "gray-50": "#F9FAFB",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-500": "#6B7280",
      "gray-900": "#111827",
    }}
  />
</ColorPalette>

## Typography

| Name       | Size | Weight    | Usage            |
| ---------- | ---- | --------- | ---------------- |
| Heading XL | 24px | Bold      | Page titles      |
| Heading L  | 20px | Semi-bold | Section titles   |
| Body       | 16px | Medium    | Body text        |
| Small      | 14px | Regular   | Secondary text   |
| XS         | 12px | Regular   | Labels, captions |

## Spacing

| Token     | Value | Usage           |
| --------- | ----- | --------------- |
| spacing-1 | 4px   | Tight gaps      |
| spacing-2 | 8px   | Default gaps    |
| spacing-3 | 12px  | Card padding    |
| spacing-4 | 16px  | Section padding |
| spacing-6 | 24px  | Large gaps      |
| spacing-9 | 36px  | Section margins |
```

---

## Step 7: Run Storybook

```bash
npm run storybook
```

Opens at: **http://localhost:6006**

---

## Existing Components to Document

| Component        | File                                 | Priority |
| ---------------- | ------------------------------------ | -------- |
| TotalRevenueCard | `src/components/TotalRevenueCard.js` | ✅ Done  |
| Dashboard        | `src/screens/hotel/dashboard.js`     | High     |
| Login Screen     | `src/screens/login.js`               | Medium   |
| Complete Screen  | `src/screens/hotel/complete.js`      | Medium   |

---

## Flowbite Components Used

These Flowbite components should be documented in Storybook:

- Buttons (primary, secondary, ghost)
- Dropdowns
- Cards
- Badges
- Form inputs
- Navigation tabs

---

## Tailwind Integration Notes

1. **Tailwind is compiled via PostCSS** - Storybook uses the same Vite config
2. **Custom utilities** in `src/style.css` are available globally
3. **Theme tokens** defined in `:root` are accessible
4. **Enterprise theme** (`data-theme="enterprise"`) is applied via decorator

---

## Troubleshooting

### Styles not loading?

Ensure `.storybook/preview.js` imports:

```javascript
import "../src/style.css";
import "flowbite/dist/flowbite.min.css";
```

### Chart.js not rendering?

Add to `.storybook/preview.js`:

```javascript
import Chart from "chart.js/auto";
window.Chart = Chart;
```

### Flowbite dropdowns not working?

Import Flowbite JS:

```javascript
import "flowbite";
```
