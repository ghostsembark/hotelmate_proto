---
description: Migration Plan to Full Tailwind CSS Environment
---

# Migration Plan: Legacy Prefixing Strategy

This plan outlines the steps to migrate the HotelMate codebase to a full Tailwind CSS environment using the "Legacy Prefixing" strategy. This ensures existing pages remain visually intact while allowing new development to leverage the full power of Tailwind CSS.

## 1. Backup Strategy (Completed)

- **Action**: Created a git commit `Backup before Tailwind migration`.
- **Status**: ✅ Done. Code is safe.
- **Rollback Plan**: If migration fails, run `git reset --hard HEAD~1` to revert to the pre-migration state.

## 2. Identify Colliding Classes

The following classes in `src/style.css` (lines 460-728) duplicate standard Tailwind utilities and must be renamed to `legacy-*` to avoid conflicts:

### Flexbox & Layout

- `flex` -> `legacy-flex`
- `flex-col` -> `legacy-flex-col`
- `items-center` -> `legacy-items-center`
- `justify-center` -> `legacy-justify-center`
- `justify-between` -> `legacy-justify-between`
- `grid` -> `legacy-grid`
- `grid-cols-1`, `2`, `3` -> `legacy-grid-cols-*`

### Spacing

- `gap-2`, `3`, `4`, `6` -> `legacy-gap-*`
- `p-4`, `6`, `8` -> `legacy-p-*`
- `px-4`, `py-2`, `py-4` -> `legacy-px-*`, `legacy-py-*`
- `mb-2`, `4`, `6`, `8` -> `legacy-mb-*`
- `mt-4`, `8` -> `legacy-mt-*`

### Sizing & Position

- `w-full` -> `legacy-w-full`
- `h-full` -> `legacy-h-full`
- `min-h-screen` -> `legacy-min-h-screen`
- `relative`, `absolute`, `fixed` -> `legacy-*`
- `inset-0`, `top-0`, `right-0`, `left-0` -> `legacy-*`
- `z-50` -> `legacy-z-50`
- `hidden`, `block`, `inline-flex` -> `legacy-*`
- `overflow-hidden`, `overflow-y-auto` -> `legacy-*`

### Typography & Backgrounds

- `text-center`, `left`, `right` -> `legacy-text-*`
- `bg-white` -> `legacy-bg-white`
- `rounded`, `rounded-lg`, `rounded-full` -> `legacy-rounded-*`
- `shadow-xs`, `shadow-md` -> `legacy-shadow-*`
- `border` -> `legacy-border`
- `transition` -> `legacy-transition`

## 3. Analysis & Verification Step (Crucial)

Before starting the rename process, we will:

1.  **Extract All Custom Classes**: List every class defined in `src/style.css`.
2.  **Fetch Tailwind/Flowbite Defaults**: Compare this list against the standard set of Tailwind and Flowbite utility classes.
3.  **Identify Overlaps**: Only rename classes that _actually_ exist in Tailwind/Flowbite (e.g., `p-4`, `flex`). Classes unique to your project (e.g., `login-form-panel`, `step-container`) will remain untouched.
    - _Goal_: Ensure we don't accidentally rename a custom class that _doesn't_ conflict, or miss a class that _does_ conflict.

## 4. Implementation Steps

### Step 4.1: Bulk Rename in `src/style.css`

Update the generic utility section of `src/style.css` to prefix all the above classes with `legacy-`.

- **Target**: Lines ~460 to ~728 in `src/style.css`.

### Step 4.2: Bulk Update in Source Code

Run a search-and-replace across `src/**/*.js` to update usages.

- **Pattern**: `class="... flex ..."` -> `class="... legacy-flex ..."`
- **Tool**: `sed` or automated script.
- **Safety**: Ensure we only target exact class name matches (e.g. don't rename `flex-grow` when replacing `flex`).

### Step 4.3: Install Tailwind CSS

1.  Run: `npm install -D tailwindcss postcss autoprefixer`
2.  Run: `npx tailwindcss init -p`

### Step 4.4: Configure `tailwind.config.js`

Update the config to:

1.  Scan files: `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`
2.  Map Theme:
    ```js
    theme: {
      extend: {
        colors: {
          brand: 'var(--bg-brand)',
          'brand-soft': 'var(--bg-brand-soft)',
          'neutral-primary': 'var(--bg-neutral-primary)',
          // ... map other key tokens
        }
      }
    }
    ```
3.  Enable Flowbite: `plugins: [require('flowbite/plugin')]`

### Step 4.5: Update `src/style.css` Imports

Add Tailwind directives at the top of `src/style.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

_Note: Since we are not using Preflight to protect legacy styles, we might exclude `@tailwind base` or disable preflight in config._

## 5. Verification

1.  **Build Check**: Run `npm run dev` to ensure no build errors.
2.  **Visual Check**:
    - **Login Screen**: Verify layout (uses `legacy-flex`, `legacy-w-full`).
    - **Onboarding Steps**: Verify stepper and forms.
    - **New Complete Screen**: Verify it still looks correct (might need minor tweaks if it used `mb-10` which was just added).

## 6. Contingency Plan

If visual regression is significant:

1.  **Immediate Revert**: `git reset --hard HEAD` (to the backup commit).
2.  **Alternative**: Switch to "Prefix Tailwind" strategy (`tw-`) if the legacy cleanup proves too risky.
