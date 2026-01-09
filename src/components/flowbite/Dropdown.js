import { renderInput } from './Input.js';

/**
 * Renders a dropdown sheet component
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique ID for the dropdown
 * @param {Array} props.options - Array of options (strings or objects with label/value)
 * @param {string} [props.className] - Additional CSS classes
 * @returns {string} HTML string
 */
export function renderDropdownSheet({ id, options = [], className = '' } = {}) {
  return `
    <div id="${id}" class="dropdown-container legacy-hidden ${className}">
      <ul class="py-0 m-0 list-none">
        ${options.map(opt => {
          const label = typeof opt === 'object' ? opt.label : opt;
          const value = typeof opt === 'object' ? opt.value : opt;
          return `
            <li>
              <button type="button" class="dropdown-item" data-value="${value}">
                ${label}
              </button>
            </li>
          `;
        }).join('')}
      </ul>
    </div>
  `;
}

/**
 * Renders an integrated dropdown component (Input + Sheet)
 * @param {Object} props - Component properties
 */
export function renderDropdown({
  id,
  label,
  value,
  options,
  size = 'sm',
  rightIcon = 'chevron',
  className = '',
  attributes = '',
  dropdownId,
  showLabel = true,
} = {}) {
  const finalDropdownId = dropdownId || `dropdown-${id}`;
  
  return `
    <div class="legacy-relative ${className}">
      ${renderInput({
        id,
        label,
        showLabel,
        value,
        size,
        rightIcon,
        className: 'dropdown-trigger',
        attributes
      })}
      ${renderDropdownSheet({
        id: finalDropdownId,
        options
      })}
    </div>
  `;
}

/**
 * Setup dropdown Sheet event handlers
 * @param {string} inputId - ID of the input that triggers the dropdown
 * @param {string} dropdownId - ID of the dropdown container
 * @param {Function} onSelect - Callback when an option is selected
 */
export function setupDropdownSheet(inputId, dropdownId, onSelect) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  const triggerGroup = input ? input.closest('.fb-input-group') : null;
  
  if (!input || !dropdown) return;
  
  const toggle = (show) => {
    if (show) {
      dropdown.classList.remove('legacy-hidden', 'hidden');
      if (triggerGroup) triggerGroup.classList.add('fb-input-focused');
    } else {
      dropdown.classList.add('legacy-hidden');
      if (triggerGroup) triggerGroup.classList.remove('fb-input-focused');
    }
  };
  
  // Show on focus/click
  input.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle(dropdown.classList.contains('legacy-hidden'));
  });
  
  // Handle selection
  dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item');
    if (item) {
      const value = item.dataset.value;
      const label = item.textContent.trim();
      input.value = label;
      toggle(false);
      if (onSelect) onSelect(value, label);
    }
  });
  
  // Close when clicking outside
  const handleOutsideClick = (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      toggle(false);
    }
  };
  
  document.addEventListener('click', handleOutsideClick);
  
  // Cleanup would be needed in a real SPA, but for this prototype we just return the cleanup fn
  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}
