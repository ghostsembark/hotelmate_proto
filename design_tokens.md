# Design Tokens Documentation

This document contains all design tokens exported from Figma for the HotelMate design system. These tokens are organized by category and include values from both themes.

---

## Theme Information

| Theme | Description |
|-------|-------------|
| **Mono (Light)** | Neutral/monochrome light theme with indigo brand colors |
| **Enterprise (Light)** | Enterprise light theme with cyan brand colors |

### Theme Usage by User Type

Each user type in HotelMate is assigned a specific theme to provide a tailored visual experience:

| User Type | Theme | Rationale |
|-----------|-------|-----------|
| **Hotels** | Enterprise (Light) | Cyan brand colors convey professionalism and trust for property management |
| **Tour Operators** | Mono (Light) | Clean, neutral indigo interface for managing multiple hotel relationships |
| **DMCs** | Mono (Light) | Consistent experience with Tour Operators for destination coordination |
| **Agents** | Mono (Light) | Streamlined interface for booking and customer management |

> [!IMPORTANT]
> When implementing components, ensure the correct theme tokens are applied based on the authenticated user's type. Theme switching should be handled at the application level.

---

## Typography

### Font Family

| Token | Value |
|-------|-------|
| `font-base` | Manrope |

### Font Size

| Token | Value (px) |
|-------|------------|
| `text-xxs` | 8 |
| `text-xs` | 12 |
| `text-sm` | 14 |
| `text-base` | 16 |
| `text-lg` | 18 |
| `text-xl` | 20 |
| `text-2xl` | 24 |
| `text-3xl` | 30 |
| `text-4xl` | 36 |
| `text-5xl` | 48 |
| `text-6xl` | 60 |

### Line Height

| Token | Value |
|-------|-------|
| `leading-none` | 1 |
| `leading-heading(none)` | 60 |
| `leading-4` | 16 |
| `leading-5` | 20 |
| `leading-6` | 24 |
| `leading-7` | 28 |
| `leading-8` | 32 |
| `leading-9` | 36 |

### Letter Spacing

| Token | Value |
|-------|-------|
| `tracking-tighter` | -0.8 |
| `tracking-tight` | -0.4 |

### Font Weight

| Token | Value |
|-------|-------|
| `font-normal` | Regular |
| `font-medium` | Medium |
| `font-semibold` | Semibold |
| `font-bold` | Bold |
| `font-extrabold` | Extrabold |

---

## Text Styles

Pre-composed text styles combining font family, size, weight, and line height for consistent typography across the design system.

### Heading Styles

| Style Name | Font | Size | Weight | Line Height | Color |
|------------|------|------|--------|-------------|-------|
| **Heading 3XL** | Manrope | 30px | Semibold | 36px | text-heading |
| **Heading 2XL** | Manrope | 24px | Semibold | 32px | text-heading |
| **Heading XL** | Manrope | 20px | Semibold | 28px | text-heading |
| **Heading LG** | Manrope | 18px | Semibold | 28px | text-heading |
| **Heading Base** | Manrope | 16px | Semibold | 24px | text-heading |
| **Heading SM** | Manrope | 14px | Semibold | 20px | text-heading |
| **Heading XS** | Manrope | 12px | Semibold | 16px | text-heading |

### Body Styles

| Style Name | Font | Size | Weight | Line Height | Color |
|------------|------|------|--------|-------------|-------|
| **Body Base** | Manrope | 16px | Normal | 24px | text-body |
| **Body SM** | Manrope | 14px | Normal | 20px | text-body |
| **Body XS** | Manrope | 12px | Normal | 16px | text-body |
| **Body Base Medium** | Manrope | 16px | Medium | 24px | text-body |
| **Body SM Medium** | Manrope | 14px | Medium | 20px | text-body |
| **Body XS Medium** | Manrope | 12px | Medium | 16px | text-body |

### Label Styles

| Style Name | Font | Size | Weight | Line Height | Color |
|------------|------|------|--------|-------------|-------|
| **Label Base** | Manrope | 14px | Medium | 20px | text-heading |
| **Label SM** | Manrope | 12px | Medium | 16px | text-heading |
| **Label XS** | Manrope | 10px | Medium | 14px | text-heading |

### Caption/Helper Styles

| Style Name | Font | Size | Weight | Line Height | Color |
|------------|------|------|--------|-------------|-------|
| **Caption** | Manrope | 12px | Normal | 16px | text-body-subtle |
| **Helper Text** | Manrope | 12px | Normal | 16px | text-body-subtle |
| **Error Text** | Manrope | 12px | Normal | 16px | text-fg-danger |

---

## Spacing

### Base Spacing Scale

| Token | Value (px) |
|-------|------------|
| `spacing/0` | 0 |
| `spacing/px` | 1 |
| `spacing/0.5` | 2 |
| `spacing/1` | 4 |
| `spacing/1.5` | 6 |
| `spacing/2` | 8 |
| `spacing/2.5` | 10 |
| `spacing/3` | 12 |
| `spacing/3.5` | 14 |
| `spacing/4` | 16 |
| `spacing/5` | 20 |
| `spacing/6` | 24 |
| `spacing/8` | 32 |
| `spacing/9` | 36 |
| `spacing/10` | 40 |
| `spacing/12` | 48 |
| `spacing/20` | 80 |
| `spacing/32` | 128 |
| `spacing/36` | 144 |
| `spacing/48` | 192 |
| `spacing/60` | 240 |
| `spacing/64` | 256 |

### Spacing Usage Guidelines

| Use Case | Recommended Tokens |
|----------|-------------------|
| **Tight padding** | `spacing/1` (4px), `spacing/1.5` (6px), `spacing/2` (8px) |
| **Default padding** | `spacing/3` (12px), `spacing/4` (16px) |
| **Loose padding** | `spacing/5` (20px), `spacing/6` (24px) |
| **Component gaps** | `spacing/2` (8px), `spacing/3` (12px), `spacing/4` (16px) |
| **Section spacing** | `spacing/8` (32px), `spacing/10` (40px), `spacing/12` (48px) |
| **Page sections** | `spacing/20` (80px), `spacing/32` (128px) |

---

## Effect Styles

### Shadow Tokens

| Token | Type | Properties | Use Case |
|-------|------|------------|----------|
| `shadow-xs` | Drop Shadow | color: #1D293D (5% opacity), offset: (0, 1), blur: 0.5px, spread: 0.05px | Subtle elevation for inputs, cards |
| `shadow-md` | Drop Shadow (2 layers) | Layer 1: #000000 (5% opacity), offset: (0, 2), blur: 4px, spread: -2px<br>Layer 2: #000000 (10% opacity), offset: (0, 4), blur: 6px, spread: -1px | Medium elevation for dropdowns, modals |

### Focus Styles

| Token | Type | Properties | Use Case |
|-------|------|------------|----------|
| `focus-secondary` | Drop Shadow | color: bg-tertiary (#F3F4F6), offset: (0, 0), blur: 0, spread: 2px | Focus ring for secondary elements |

### Shadow CSS Implementation

```css
/* shadow-xs */
.shadow-xs {
  box-shadow: 0 1px 0.5px 0.05px rgba(29, 41, 61, 0.05);
}

/* shadow-md */
.shadow-md {
  box-shadow: 
    0 2px 4px -2px rgba(0, 0, 0, 0.05),
    0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* focus-secondary */
.focus-secondary {
  box-shadow: 0 0 0 2px var(--bg-tertiary, #F3F4F6);
}
```

### Focus Ring Pattern

For interactive elements, use the focus token to create accessible focus states:

```css
.interactive-element:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg-tertiary, #F3F4F6);
}

.interactive-element:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--border-brand);
}
```

---

## Container & Layout

### Container Widths

| Token | Value (px) |
|-------|------------|
| `xs` | 380 |
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |
| `2xl` | 1563 |

### Max Width

| Token | Value (px) |
|-------|------------|
| `max-w-xs` | 320 |
| `max-w-sm` | 384 |
| `max-w-md` | 448 |
| `max-w-lg` | 512 |
| `max-w-xl` | 576 |
| `max-w-2xl` | 672 |
| `max-w-3xl` | 768 |
| `max-w-4xl` | 896 |
| `max-w-5xl` | 1024 |
| `max-w-6xl` | 1152 |
| `max-w-7xl` | 1280 |

---

## Border

### Border Radius

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `rounded-0` | 0 | 0 |
| `rounded-xxs` | 1 | 1 |
| `rounded-xs` | 1 | 1 |
| `rounded-sm` | 1 | 1 |
| `rounded` | 1 | 4 |
| `rounded-base` | 1 | 4 |
| `rounded-lg` | 1 | 4 |
| `rounded-xl` | 1 | 4 |
| `rounded-full` | 9999 | 9999 |

### Border Width

| Token | Value (px) |
|-------|------------|
| `border-0` | 0 |
| `border` | 1 |
| `border-md` | 2 |
| `border-lg` | 4 |
| `border-xl` | 8 |

---

## Colors

### Background Variants

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `bg-variants-white` | #FFFFFF | #FFFFFF |
| `bg-variants-gray` | #F5F5F5 | #F4F4F5 |

### Background - Neutral

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `bg-white` | #FFFFFF | #FFFFFF |
| `bg-neutral-primary` | #FFFFFF | #FFFFFF |
| `bg-neutral-primary-soft` | #FFFFFF | #FFFFFF |
| `bg-neutral-primary-medium` | #FFFFFF | #FFFFFF |
| `bg-neutral-primary-strong` | #FFFFFF | #FFFFFF |
| `bg-neutral-secondary` | #FAFAFA | #FFFFFF |
| `bg-neutral-secondary-soft` | #FAFAFA | #FFFFFF |
| `bg-neutral-secondary-medium` | #FAFAFA | #FFFFFF |
| `bg-neutral-secondary-strong` | #FAFAFA | #FFFFFF |
| `bg-neutral-tertiary` | #F5F5F5 | #F4F4F5 |
| `bg-neutral-tertiary-soft` | #F5F5F5 | #F4F4F5 |
| `bg-neutral-tertiary-medium` | #F5F5F5 | #F4F4F5 |
| `bg-neutral-quaternary` | #E5E5E5 | #E4E4E7 |
| `bg-quaternary-medium` | #E5E5E5 | #E4E4E7 |
| `bg-gray` | #D4D4D4 | #D4D4D8 |
| `bg-dark` | #262626 | #27272A |
| `bg-dark-strong` | #171717 | #18181B |
| `bg-disabled` | #F5F5F5 | #1E2939 |

### Background - Brand

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `bg-brand` | #312C85 (indigo/900) | #104E64 (cyan/900) |
| `bg-brand-softer` | #EEF2FF (indigo/50) | #ECFEFF (cyan/050) |
| `bg-brand-soft` | #E0E7FF (indigo/100) | #CEFAFE (cyan/100) |
| `bg-brand-medium` | #C6D2FF (indigo/200) | #A2F4FD (cyan/200) |
| `bg-brand-strong` | #372AAC (indigo/800) | #005F78 (cyan/800) |

### Background - Semantic

| Token | Value |
|-------|-------|
| `bg-success` | #008236 |
| `bg-success-soft` | #F0FDF4 |
| `bg-success-medium` | #DCFCE7 |
| `bg-success-strong` | #016630 |
| `bg-danger` | #C10007 |
| `bg-danger-soft` | #FEF2F2 |
| `bg-danger-medium` | #FFE2E2 |
| `bg-danger-strong` | #9F0712 |
| `bg-warning` | #FF5A1F |
| `bg-warning-soft` | #FFF8F1 |
| `bg-warning-medium` | #FEECDC |
| `bg-warning-strong` | #B43403 |

### Background - Extended Colors

| Token | Value |
|-------|-------|
| `bg-purple` | #AD46FF |
| `bg-sky` | #00A6F4 |
| `bg-teal` | #009689 |
| `bg-pink` | #E60076 |
| `bg-cyan` | #00B8DB |
| `bg-fuchsia` | #C800DE |
| `bg-indigo` | #4F39F6 |
| `bg-orange` | #FF8A4C |

---

### Text Colors

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `text-white` | #FFFFFF | #FFFFFF |
| `text-black` | #171717 | #18181B |
| `text-heading` | #171717 | #18181B |
| `text-body` | #525252 | #52525C |
| `text-body-subtle` | #737373 | #71717B |
| `text-fg-disabled` | #A1A1A1 | #9F9FA9 |

### Text - Brand

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `text-fg-brand` | #432DD7 (indigo/700) | #007595 (cyan/700) |
| `text-fg-brand-subtle` | #C6D2FF (indigo/200) | #A2F4FD (cyan/200) |
| `text-fg-brand-strong` | #312C85 (indigo/900) | #104E64 (cyan/900) |
| `text-fg-info` | #C6005C (pink/700) | #104E64 (cyan/900) |

### Text - Semantic

| Token | Value |
|-------|-------|
| `text-fg-success` | #008236 |
| `text-fg-success-strong` | #0D542B |
| `text-fg-danger` | #C10007 |
| `text-fg-danger-strong` | #82181A |
| `text-fg-warning` | #771D1D |
| `text-fg-warning-subtle` | #D03801 |
| `text-fg-yellow` | #FDC700 |

### Text - Extended Colors

| Token | Value |
|-------|-------|
| `text-fg-purple` | #9810FA |
| `text-fg-cyan` | #0092B8 |
| `text-fg-indigo` | #4F39F6 |
| `text-fg-pink` | #E60076 |
| `text-fg-lime` | #5EA500 |

---

### Border Colors

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `border-dark` | #262626 | #27272A |
| `border-dark-subtle` | #404040 | #27272A |
| `border-buffer` | #FFFFFF | #FFFFFF |
| `border-buffer-medium` | #FFFFFF | #FFFFFF |
| `border-buffer-strong` | #FFFFFF | #FFFFFF |
| `border-muted` | #FAFAFA | #FAFAFA |
| `border-light` | #F5F5F5 | #F4F4F5 |
| `border-light-subtle` | #F5F5F5 | #F4F4F5 |
| `border-light-medium` | #F5F5F5 | #F4F4F5 |
| `border-default` | #E5E5E5 | #E4E4E7 |
| `border-default-subtle` | #E5E5E5 | #E4E4E7 |
| `border-default-medium` | #E5E5E5 | #E4E4E7 |
| `border-default-strong` | #E5E5E5 | #E4E4E7 |

### Border - Brand

| Token | Mono Value | Enterprise Value |
|-------|------------|------------------|
| `border-brand` | #312C85 (indigo/900) | #007595 (cyan/700) |
| `border-brand-subtle` | #C6D2FF (indigo/200) | #A2F4FD (cyan/200) |
| `border-brand-light` | #4F39F6 (indigo/600) | #0092B8 (cyan/600) |

### Border - Semantic

| Token | Value |
|-------|-------|
| `border-success` | #008236 (Mono) / #007A55 (Enterprise) |
| `border-success-subtle` | #B9F8CF |
| `border-danger` | #C10007 |
| `border-danger-subtle` | #FFC9C9 |
| `border-warning` | #FF5A1F (Mono) / #D03801 (Enterprise) |
| `border-warning-subtle` | #FCD9BD |

### Border - Extended Colors

| Token | Value |
|-------|-------|
| `border-purple` | #AD46FF |
| `border-orange` | #FF8A4C |
| `border-buffer-gradient-secondary` | #030712 (50% alpha) |

---

## Token Naming Convention

Tokens follow a consistent naming pattern:

- **Category prefix**: `bg-`, `text-`, `border-`, `text-fg-`
- **Semantic meaning**: `neutral`, `brand`, `success`, `danger`, `warning`
- **Intensity modifier**: `soft`, `medium`, `strong`, `subtle`
- **Additional modifiers**: `primary`, `secondary`, `tertiary`, `quaternary`

### Examples
- `bg-brand-soft` → Soft brand background
- `text-fg-danger-strong` → Strong danger foreground text
- `border-default-medium` → Medium intensity default border

---

## Usage Guidelines

1. **Theme Switching**: Components should reference semantic tokens rather than raw color values to support theme switching
2. **Brand Colors**: Use `brand` tokens for primary actions and branding elements
3. **Semantic Colors**: Use `success`, `danger`, `warning` for status indicators
4. **Neutral Colors**: Use `neutral` tokens for backgrounds and subtle UI elements
5. **Typography**: All text should use the `font-base` (Manrope) font family
