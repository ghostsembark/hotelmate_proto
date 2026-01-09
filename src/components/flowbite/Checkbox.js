/**
 * Checkbox Component
 * Figma: https://www.figma.com/design/1Qbb3IP6lU3qp1g9sNdG9D/DS---Hotemate?node-id=1149-54707
 * 
 * Supports multiple types:
 * - Simple: Just checkbox with label
 * - With helper: Checkbox with label and helper text
 * - Card: Bordered card with checkbox
 */

/**
 * Renders a checkbox component
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique ID for the checkbox
 * @param {string} [props.name] - Input name attribute
 * @param {string} props.label - Label text
 * @param {string} [props.helperText] - Helper text below label
 * @param {boolean} [props.checked] - Whether checkbox is checked
 * @param {boolean} [props.disabled] - Whether checkbox is disabled
 * @param {string} [props.state] - Visual state (default, focus, disabled)
 * @param {string} [props.type] - Type variant (simple, withHelper, card)
 * @param {string} [props.value] - Input value
 * @returns {string} HTML string
 */
export function renderCheckbox({
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
  const checkboxId = id || `checkbox-${Date.now()}`;
  const inputName = name || checkboxId;
  const isDisabled = disabled || state === 'disabled';
  
  // State class
  const stateClass = state !== 'default' ? `fb-checkbox-${state}` : '';
  
  // Type-specific rendering
  if (type === 'card') {
    return renderCardCheckbox({ id: checkboxId, name: inputName, label, helperText, checked, isDisabled, stateClass, value });
  }
  
  if (type === 'withHelper') {
    return `
      <div class="fb-checkbox-group fb-checkbox-with-helper ${stateClass}" data-checkbox-id="${checkboxId}">
        <div class="fb-checkbox-row">
          <input 
            type="checkbox" 
            id="${checkboxId}" 
            name="${inputName}"
            class="fb-checkbox"
            value="${value}"
            ${checked ? 'checked' : ''}
            ${isDisabled ? 'disabled' : ''}
          >
          <label for="${checkboxId}" class="fb-checkbox-label">${label}</label>
        </div>
        ${helperText ? `<span class="fb-checkbox-helper">${helperText}</span>` : ''}
      </div>
    `;
  }
  
  // Simple (default)
  return `
    <div class="fb-checkbox-group ${stateClass}" data-checkbox-id="${checkboxId}">
      <input 
        type="checkbox" 
        id="${checkboxId}" 
        name="${inputName}"
        class="fb-checkbox"
        value="${value}"
        ${checked ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <label for="${checkboxId}" class="fb-checkbox-label">${label}</label>
    </div>
  `;
}

/**
 * Renders a card-style checkbox
 */
function renderCardCheckbox({ id, name, label, helperText, checked, isDisabled, stateClass, value }) {
  return `
    <label class="fb-checkbox-card ${checked ? 'fb-checkbox-card-checked' : ''} ${stateClass} ${isDisabled ? 'fb-checkbox-card-disabled' : ''}" data-checkbox-id="${id}">
      <input 
        type="checkbox" 
        id="${id}" 
        name="${name}"
        class="fb-checkbox"
        value="${value}"
        ${checked ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <div class="fb-checkbox-card-content">
        <span class="fb-checkbox-card-label">${label}</span>
        ${helperText ? `<span class="fb-checkbox-card-helper">${helperText}</span>` : ''}
      </div>
    </label>
  `;
}

/**
 * Renders a checkbox group (multiple checkboxes)
 * @param {Object} props - Component properties
 * @param {string} props.name - Group name
 * @param {Array} props.options - Array of { id, label, value, helperText, checked, disabled }
 * @param {string} [props.type] - Type variant
 * @param {string} [props.layout] - Layout (vertical, horizontal, grid)
 * @returns {string} HTML string
 */
export function renderCheckboxGroup({
  name,
  options = [],
  type = 'simple',
  layout = 'vertical',
} = {}) {
  const layoutClass = `fb-checkbox-group-${layout}`;
  
  const checkboxesHtml = options.map((opt, index) => 
    renderCheckbox({
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
    <div class="fb-checkbox-group-container ${layoutClass}">
      ${checkboxesHtml}
    </div>
  `;
}

/**
 * Setup checkbox event handlers
 * @param {string} id - Checkbox ID or group container ID
 * @param {Function} onChange - Callback with (checked, value)
 */
export function setupCheckbox(id, onChange) {
  const checkbox = document.getElementById(id);
  if (!checkbox) return;
  
  checkbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    
    // Update card styling if applicable
    const card = e.target.closest('.fb-checkbox-card');
    if (card) {
      card.classList.toggle('fb-checkbox-card-checked', checked);
    }
    
    if (onChange) onChange(checked, value);
  });
  
  return {
    isChecked: () => checkbox.checked,
    setChecked: (val) => { checkbox.checked = val; },
    getValue: () => checkbox.value,
  };
}
