---
description: Plan for creating Storybook stories for all existing components with Figma references
---

# Storybook Component Stories Implementation Plan

## Workflow

For each component:

1. **Create actual component file** (e.g., `Input.js` with `renderInput()` function)
2. **Create Storybook story** that imports and documents the component
3. **Update `style.css`** to match Figma design exactly
4. **Import and use component** in onboarding screens (replace inline HTML)
5. **Risk mitigation** - Ensure no visual or functional impact on existing flows
6. **User tests the component** in both Storybook and onboarding flow
7. Once confirmed, proceed to the next component

---

## Risk Mitigation Strategy

> [!WARNING] > **Critical**: Each component change affects the live onboarding flow. Follow these safeguards.

### Before Implementation

- [ ] Take screenshots of current onboarding step (before state)
- [ ] Document existing CSS class names being replaced
- [ ] Identify all screens using the component

### During Implementation

- [ ] Keep existing CSS classes as fallback (don't delete immediately)
- [ ] Add new component alongside existing code
- [ ] Test component in Storybook first before integration

### After Implementation

- [ ] Visual regression test: Compare before/after screenshots
- [ ] Functional test: Verify all interactions still work
- [ ] Cross-theme test: Verify Enterprise and Mono themes work
- [ ] Only after confirmation, remove deprecated CSS

---

## High Priority Components

| #   | Component           | Files to Create                      | Figma Reference                                                                                                                                                                                                    | Status      |
| --- | ------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 1   | **Input Field**     | `Input.js`, `Input.stories.js`       | [Figma: Input](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-46505&m=dev), [Variants](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-46826&m=dev) | ✅ Complete |
| 2   | **Input Stepper**   | `InputStepper.stories.js`            | [Figma](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=3134-12704&m=dev)                                                                                                                | ✅ Complete |
| 3   | **Checkbox**        | `Checkbox.js`, `Checkbox.stories.js` | [Figma](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54707&m=dev)                                                                                                                | [ ] Pending |
| 4   | **Radio Button**    | `Radio.js`, `Radio.stories.js`       | [Figma](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54726&m=dev)                                                                                                                | [ ] Pending |
| 5   | **Toggle Switch**   | `Toggle.js`, `Toggle.stories.js`     | [Figma](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54432&m=dev), [Variants](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54457&m=dev)        | [ ] Pending |
| 6   | **Stepper**         | `Stepper.stories.js`                 | Refer Flowbite Stepper                                                                                                                                                                                             | [ ] Pending |
| 7   | **SideSheet**       | `SideSheet.stories.js`               | Refer Flowbite Drawer                                                                                                                                                                                              | [ ] Pending |
| 8   | **Select/Dropdown** | `Select.js`, `Select.stories.js`     | Refer Flowbite Select                                                                                                                                                                                              | [ ] Pending |
| 9   | **Textarea**        | `Textarea.js`, `Textarea.stories.js` | Refer Flowbite Textarea                                                                                                                                                                                            | [ ] Pending |

---

## Medium Priority Components

| #   | Component       | Files to Create                          | Figma Reference           | Status      |
| --- | --------------- | ---------------------------------------- | ------------------------- | ----------- |
| 10  | **Header**      | `Header.stories.js`                      | Extracted from onboarding | [ ] Pending |
| 11  | **Footer**      | `Footer.stories.js`                      | Extracted from onboarding | [ ] Pending |
| 12  | **File Upload** | `FileUpload.js`, `FileUpload.stories.js` | Refer Flowbite            | [ ] Pending |
| 13  | **Alert/Toast** | `Alert.js`, `Alert.stories.js`           | Refer Flowbite            | [ ] Pending |
| 14  | **Modal**       | `Modal.js`, `Modal.stories.js`           | Refer Flowbite            | [ ] Pending |
| 15  | **Table**       | `Table.stories.js`                       | Refer Flowbite            | [ ] Pending |
| 16  | **Tabs**        | `Tabs.stories.js`                        | Refer Flowbite            | [ ] Pending |
| 17  | **Pagination**  | `Pagination.stories.js`                  | Refer Flowbite            | [ ] Pending |

---

## Component Implementation Checklist

For each component, complete all steps:

### Input Field (Example)

- [ ] Create `src/components/flowbite/Input.js` with `renderInput()` function
- [ ] Update `src/style.css` - add/update `.fb-input` classes matching Figma
- [ ] Create `src/components/flowbite/Input.stories.js` importing the component
- [ ] Replace inline `<input class="form-input">` in:
  - [ ] `step1-basic-info.js`
  - [ ] `step2-location.js`
  - [ ] `step3-room-details.js`
  - [ ] `step6-policies.js`
  - [ ] `step7-verification.js`
- [ ] Test in Storybook (all variants and themes)
- [ ] Test in onboarding flow (all affected steps)
- [ ] Get user confirmation

---

## Existing Stories (Already Complete)

| Component            | File Location                                 | Status                                                                                                                        |
| -------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Button               | `src/components/flowbite/Button.stories.js`   | ✅ Complete                                                                                                                   |
| Badge                | `src/components/flowbite/Badge.stories.js`    | ✅ Complete ([Update with Figma](https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1146-22250&m=dev)) |
| Card                 | `src/components/flowbite/Card.stories.js`     | ✅ Complete                                                                                                                   |
| Dropdown             | `src/components/flowbite/Dropdown.stories.js` | ✅ Complete                                                                                                                   |
| TotalRevenueCard     | `src/components/TotalRevenueCard.stories.js`  | ✅ Complete                                                                                                                   |
| Input (stories only) | `src/components/flowbite/Input.stories.js`    | ✅ Stories only                                                                                                               |

---

## Component File Structure

```
src/components/flowbite/
├── Input.js              # Component logic
├── Input.stories.js      # Storybook stories
├── Checkbox.js
├── Checkbox.stories.js
├── ...
```

### Component Template

```javascript
// src/components/flowbite/Input.js

/**
 * Input Field Component
 * Figma: https://www.figma.com/design/.../node-id=1149-46505
 */

export function renderInput({
  id,
  name,
  label,
  placeholder = "",
  value = "",
  type = "text",
  state = "default", // default | error | success | disabled
  helperText = "",
  required = false,
  leftIcon = null,
  rightIcon = null,
}) {
  // Returns HTML string matching Figma design
  return `
    <div class="fb-input-group" id="${id}-group">
      ${
        label
          ? `<label class="fb-input-label" for="${id}">${label}${
              required ? '<span class="fb-required">*</span>' : ""
            }</label>`
          : ""
      }
      <div class="fb-input-wrapper fb-input-${state}">
        ${leftIcon ? `<span class="fb-input-icon-left">${leftIcon}</span>` : ""}
        <input 
          type="${type}"
          id="${id}"
          name="${name || id}"
          class="fb-input"
          placeholder="${placeholder}"
          value="${value}"
          ${state === "disabled" ? "disabled" : ""}
        >
        ${
          rightIcon
            ? `<span class="fb-input-icon-right">${rightIcon}</span>`
            : ""
        }
      </div>
      ${
        helperText
          ? `<span class="fb-input-helper fb-input-helper-${state}">${helperText}</span>`
          : ""
      }
    </div>
  `;
}
```

---

## CSS Update Strategy

Update `style.css` with new Flowbite-aligned classes:

```css
/* Flowbite Input - Matches Figma exactly */
.fb-input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.fb-input-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-heading);
}
.fb-input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  background: white;
}
.fb-input {
  flex: 1;
  height: 44px;
  padding: 10px 14px;
  border: none;
  outline: none;
  font-size: 14px;
}
.fb-input-error .fb-input-wrapper {
  border-color: var(--border-danger);
  background: var(--bg-danger-soft);
}
.fb-input-success .fb-input-wrapper {
  border-color: var(--border-success);
  background: var(--bg-success-soft);
}
```

---

## Execution Log

| Date       | Component   | Action                          | User Confirmed          |
| ---------- | ----------- | ------------------------------- | ----------------------- |
| 2026-01-09 | Input Field | Stories created (inline styles) | [ ] Pending integration |
| -          | -           | -                               | -                       |

---

## Notes

- **Figma Design System**: All components reference DS---Hotemate Figma file
- **Theme Support**: All components must work with Enterprise and Mono themes
- **Flowbite Base**: Components without Figma designs use Flowbite as base
- **One at a Time**: Complete and test one component before moving to next
- **Prefix Convention**: New CSS classes use `fb-` prefix to avoid conflicts with existing `.form-input` classes
