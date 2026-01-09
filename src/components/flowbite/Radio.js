/**
 * Radio Component
 * Figma: https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54726
 * 
 * Supports multiple types:
 * - Simple: Just radio with label
 * - With helper: Radio with label and helper text
 * - Card: Bordered card with radio
 */

/**
 * Renders a single radio button
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique ID for the radio
 * @param {string} props.name - Radio group name (required for grouping)
 * @param {string} props.label - Label text
 * @param {string} [props.helperText] - Helper text below label
 * @param {boolean} [props.checked] - Whether radio is selected
 * @param {boolean} [props.disabled] - Whether radio is disabled
 * @param {string} [props.state] - Visual state (default, focus, disabled)
 * @param {string} [props.type] - Type variant (simple, withHelper, card)
 * @param {string} [props.value] - Input value
 * @returns {string} HTML string
 */
export function renderRadio({
  id,
  name,
  label,
  helperText = '',
  checked = false,
  disabled = false,
  state = 'default',
  type = 'simple',
  value = '',
} = {}) {
  const radioId = id || `radio-${Date.now()}`;
  const isDisabled = disabled || state === 'disabled';
  
  // State class
  const stateClass = state !== 'default' ? `fb-radio-${state}` : '';
  
  // Type-specific rendering
  if (type === 'card') {
    return renderCardRadio({ id: radioId, name, label, helperText, checked, isDisabled, stateClass, value });
  }
  
  if (type === 'withHelper') {
    return `
      <div class="fb-radio-group fb-radio-with-helper ${stateClass}" data-radio-id="${radioId}">
        <div class="fb-radio-row">
          <input 
            type="radio" 
            id="${radioId}" 
            name="${name}"
            class="fb-radio"
            value="${value || label}"
            ${checked ? 'checked' : ''}
            ${isDisabled ? 'disabled' : ''}
          >
          <label for="${radioId}" class="fb-radio-label">${label}</label>
        </div>
        ${helperText ? `<span class="fb-radio-helper">${helperText}</span>` : ''}
      </div>
    `;
  }
  
  // Simple (default)
  return `
    <div class="fb-radio-item ${stateClass}" data-radio-id="${radioId}">
      <input 
        type="radio" 
        id="${radioId}" 
        name="${name}"
        class="fb-radio"
        value="${value || label}"
        ${checked ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <label for="${radioId}" class="fb-radio-label">${label}</label>
    </div>
  `;
}

/**
 * Renders a card-style radio
 */
function renderCardRadio({ id, name, label, helperText, checked, isDisabled, stateClass, value }) {
  return `
    <label class="fb-radio-card ${checked ? 'fb-radio-card-checked' : ''} ${stateClass} ${isDisabled ? 'fb-radio-card-disabled' : ''}" data-radio-id="${id}">
      <input 
        type="radio" 
        id="${id}" 
        name="${name}"
        class="fb-radio"
        value="${value || label}"
        ${checked ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <div class="fb-radio-card-content">
        <span class="fb-radio-card-label">${label}</span>
        ${helperText ? `<span class="fb-radio-card-helper">${helperText}</span>` : ''}
      </div>
    </label>
  `;
}

/**
 * Renders a radio group (multiple radio buttons)
 * @param {Object} props - Component properties
 * @param {string} props.name - Group name (required)
 * @param {Array} props.options - Array of { id, label, value, helperText, checked, disabled }
 * @param {string} [props.type] - Type variant
 * @param {string} [props.layout] - Layout (vertical, horizontal, grid)
 * @returns {string} HTML string
 */
export function renderRadioGroup({
  name,
  options = [],
  type = 'simple',
  layout = 'vertical',
} = {}) {
  const layoutClass = `fb-radio-group-${layout}`;
  
  const radiosHtml = options.map((opt, index) => 
    renderRadio({
      id: opt.id || `${name}-${index}`,
      name,
      label: opt.label,
      helperText: opt.helperText,
      checked: opt.checked,
      disabled: opt.disabled,
      type,
      value: opt.value || opt.label,
    })
  ).join('');
  
  return `
    <div class="fb-radio-group-container ${layoutClass}" data-radio-group="${name}">
      ${radiosHtml}
    </div>
  `;
}

/**
 * Setup radio group event handlers
 * @param {string} name - Radio group name
 * @param {Function} onChange - Callback with (value)
 */
export function setupRadioGroup(name, onChange) {
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  if (!radios.length) return;
  
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const value = e.target.value;
      
      // Update card styling
      const container = e.target.closest('.fb-radio-group-container');
      if (container) {
        container.querySelectorAll('.fb-radio-card').forEach(card => {
          card.classList.remove('fb-radio-card-checked');
        });
        const card = e.target.closest('.fb-radio-card');
        if (card) card.classList.add('fb-radio-card-checked');
      }
      
      if (onChange) onChange(value);
    });
  });
  
  return {
    getValue: () => {
      const checked = document.querySelector(`input[name="${name}"]:checked`);
      return checked ? checked.value : null;
    },
    setValue: (val) => {
      const radio = document.querySelector(`input[name="${name}"][value="${val}"]`);
      if (radio) radio.checked = true;
    },
  };
}
