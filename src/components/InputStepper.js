/**
 * Input Stepper Component
 * Renders a standard [ - ] [ Value ] [ + ] counter.
 */

// Simple SVG Icons for Minus and Plus
const ICONS = {
  minus: `<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5H9M5 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

export function renderInputStepper({ id, value = 0, min = 0, max = 100 }) {
  // Ensure value is within bounds
  const safeValue = Math.max(min, Math.min(max, value));
  
  return `
    <div class="input-stepper" id="${id}" data-min="${min}" data-max="${max}">
      <button type="button" class="stepper-btn stepper-minus" ${safeValue <= min ? 'disabled' : ''} aria-label="Decrease">
        ${ICONS.minus}
      </button>
      <input 
        type="number" 
        class="stepper-value" 
        value="${safeValue}" 
        min="${min}" 
        max="${max}" 
        readonly
      >
      <button type="button" class="stepper-btn stepper-plus" ${safeValue >= max ? 'disabled' : ''} aria-label="Increase">
        ${ICONS.plus}
      </button>
    </div>
  `;
}

/**
 * Initializes listeners for a stepper instance.
 * @param {string} id - The ID of the stepper container.
 * @param {Function} onChange - Callback (newValue) => void
 */
export function setupInputStepper(id, onChange) {
  const container = document.getElementById(id);
  if (!container) return;

  const minusBtn = container.querySelector('.stepper-minus');
  const plusBtn = container.querySelector('.stepper-plus');
  const input = container.querySelector('.stepper-value');

  const updateState = (newValue) => {
    const min = parseInt(container.dataset.min);
    const max = parseInt(container.dataset.max);
    
    // Clamp
    newValue = Math.max(min, Math.min(max, newValue));
    
    // Update DOM
    input.value = newValue;
    minusBtn.disabled = newValue <= min;
    plusBtn.disabled = newValue >= max;

    // Trigger callback
    if (onChange) onChange(newValue);
  };

  minusBtn.addEventListener('click', () => {
    const min = parseInt(container.dataset.min);
    const current = parseInt(input.value);
    if (current > min) {
      updateState(current - 1);
    }
  });

  plusBtn.addEventListener('click', () => {
    const max = parseInt(container.dataset.max);
    const current = parseInt(input.value);
    if (current < max) {
      updateState(current + 1);
    }
  });
}
