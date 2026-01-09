/**
 * Input Field Component
 * Figma: https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-46505
 * 
 * A reusable input component matching the HotelMate design system.
 * Supports labels, helper text, icons, states, and multiple sizes.
 */

// Icons used in input fields
const INPUT_ICONS = {
  user: `<svg class="fb-input-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  email: `<svg class="fb-input-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  search: `<svg class="fb-input-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  clear: `<svg class="fb-input-icon fb-input-icon-clear" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
  check: `<svg class="fb-input-icon fb-input-icon-success" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
  error: `<svg class="fb-input-icon fb-input-icon-error" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
  chevron: `<svg class="fb-input-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`,
};

/**
 * Renders an input field component
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique ID for the input
 * @param {string} [props.name] - Input name attribute (defaults to id)
 * @param {string} [props.label] - Label text
 * @param {boolean} [props.showLabel] - Whether to show the label (defaults to true)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value
 * @param {string} [props.type] - Input type (text, email, password, number, url)
 * @param {string} [props.state] - Visual state (default, focus, filled, error, success, disabled, readonly)
 * @param {string} [props.size] - Size variant (sm, base, lg, xl)
 * @param {string} [props.helperText] - Helper or error text below input
 * @param {boolean} [props.required] - Show required asterisk
 * @param {string} [props.leftIcon] - Left icon key (user, email, search)
 * @param {string} [props.rightIcon] - Right icon key (clear, check, error, chevron)
 * @param {string} [props.buttonText] - Text for inline button (e.g., 'Button text')
 * @param {string} [props.prefix] - Prefix text (e.g., 'https://', '₹')
 * @param {string} [props.className] - Additional CSS classes
 * @returns {string} HTML string
 */
export function renderInput({
  id,
  name,
  label = '',
  showLabel = true,
  placeholder = '',
  value = '',
  type = 'text',
  state = 'default',
  size = 'base',
  helperText = '',
  required = false,
  leftIcon = null,
  rightIcon = null,
  buttonText = null,
  prefix = '',
  className = '',
  attributes = '',
} = {}) {
  const inputId = id || `input-${Date.now()}`;
  const inputName = name || inputId;
  const isDisabled = state === 'disabled';
  const isReadonly = state === 'readonly' || rightIcon === 'chevron';
  
  // Size classes
  const sizeClass = `fb-input-${size}`;
  
  // State class
  const stateClass = state !== 'default' ? `fb-input-${state}` : '';
  
  // Determine right icon based on state
  let rightIconHtml = '';
  if (state === 'error') {
    rightIconHtml = INPUT_ICONS.error;
  } else if (state === 'success') {
    rightIconHtml = INPUT_ICONS.check;
  } else if (rightIcon && INPUT_ICONS[rightIcon]) {
    rightIconHtml = INPUT_ICONS[rightIcon];
  }
  
  // Left icon
  const leftIconHtml = leftIcon && INPUT_ICONS[leftIcon] ? INPUT_ICONS[leftIcon] : '';
  
  // Inline button
  const buttonHtml = buttonText ? `
    <button type="button" class="fb-input-button">${buttonText}</button>
  ` : '';
  
  return `
    <div class="fb-input-group ${stateClass} ${sizeClass} ${className} ${rightIcon === 'chevron' ? 'fb-input-dropdown' : ''}" data-input-id="${inputId}">
      ${(label && showLabel) ? `
        <label class="fb-input-label" for="${inputId}">
          ${label}${required ? '<span class="fb-input-required">*</span>' : ''}
        </label>
      ` : ''}
      
      <div class="fb-input-wrapper ${buttonText ? 'fb-input-with-button' : ''}">
        ${leftIconHtml ? `<span class="fb-input-icon-left">${leftIconHtml}</span>` : ''}
        ${prefix ? `<span class="fb-input-prefix">${prefix}</span>` : ''}
        
        <input 
          type="${type}"
          id="${inputId}"
          name="${inputName}"
          class="fb-input"
          placeholder="${placeholder}"
          value="${value}"
          ${isDisabled ? 'disabled' : ''}
          ${isReadonly ? 'readonly' : ''}
          ${required ? 'required' : ''}
          ${rightIcon === 'chevron' ? 'style="cursor: pointer;"' : ''}
          ${attributes}
        >
        
        ${rightIconHtml ? `<span class="fb-input-icon-right" ${rightIcon === 'chevron' ? 'style="pointer-events: none;"' : ''}>${rightIconHtml}</span>` : ''}
        ${buttonHtml}
      </div>
      
      ${helperText ? `<span class="fb-input-helper">${helperText}</span>` : ''}
    </div>
  `;
}


/**
 * Setup input field event handlers
 * @param {string} id - Input group ID
 * @param {Object} callbacks - Event callbacks
 * @param {Function} [callbacks.onChange] - Called on input change
 * @param {Function} [callbacks.onFocus] - Called on input focus
 * @param {Function} [callbacks.onBlur] - Called on input blur
 * @param {Function} [callbacks.onClear] - Called on clear button click
 */
export function setupInput(id, callbacks = {}) {
  const group = document.querySelector(`[data-input-id="${id}"]`);
  if (!group) return;
  
  const input = group.querySelector('.fb-input');
  const clearBtn = group.querySelector('.fb-input-icon-clear');
  
  if (!input) return;
  
  // Focus state
  input.addEventListener('focus', () => {
    group.classList.add('fb-input-focused');
    if (callbacks.onFocus) callbacks.onFocus(input.value);
  });
  
  input.addEventListener('blur', () => {
    group.classList.remove('fb-input-focused');
    if (callbacks.onBlur) callbacks.onBlur(input.value);
  });
  
  // Change event
  input.addEventListener('input', (e) => {
    if (callbacks.onChange) callbacks.onChange(e.target.value);
  });
  
  // Clear button
  if (clearBtn) {
    clearBtn.style.cursor = 'pointer';
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      if (callbacks.onClear) callbacks.onClear();
      if (callbacks.onChange) callbacks.onChange('');
    });
  }
  
  return {
    getValue: () => input.value,
    setValue: (val) => { input.value = val; },
    setError: (msg) => {
      group.classList.add('fb-input-error');
      group.classList.remove('fb-input-success');
      const helper = group.querySelector('.fb-input-helper');
      if (helper) helper.textContent = msg;
    },
    setSuccess: (msg) => {
      group.classList.add('fb-input-success');
      group.classList.remove('fb-input-error');
      const helper = group.querySelector('.fb-input-helper');
      if (helper) helper.textContent = msg;
    },
    clearState: () => {
      group.classList.remove('fb-input-error', 'fb-input-success');
    },
  };
}

// Export icons for external use
export { INPUT_ICONS };
