/**
 * Button Component
 * Figma Node: 1146:24616
 * 
 * Supports variants:
 * - Color: brand, secondary, dark, outline, ghost, destructive, success, warning, dashed
 * - Size: xs, sm, base, lg, xl
 * - State: initial, disabled
 * - Icon support: leftIcon, rightIcon, iconOnly
 * - Style: solid (default), outline (via outline prop)
 */

/**
 * Renders a button component
 * @param {Object} props - Component properties
 * @param {string} props.label - Button text
 * @param {string} [props.color='brand'] - Button color variant
 * @param {string} [props.size='base'] - Button size
 * @param {string} [props.type='button'] - Button type (submit, reset, button)
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.outline=false] - Whether button should have outline style
 * @param {boolean} [props.iconOnly=false] - Whether button is icon only
 * @param {string|boolean} [props.leftIconSvg] - SVG for left icon or true for default arrow
 * @param {string|boolean} [props.rightIconSvg] - SVG for right icon or true for default arrow
 * @param {string} [props.id] - Button ID
 * @param {string} [props.extraClass=''] - Additional CSS classes
 * @param {string} [props.attributes=''] - Raw HTML attributes (e.g. 'onclick="..."')
 * @returns {string} HTML string
 */
export function renderButton({
  label = 'Button text',
  color = 'brand',
  size = 'base',
  type = 'button',
  disabled = false,
  outline = false,
  iconOnly = false,
  leftIconSvg = '',
  rightIconSvg = '',
  id = '',
  extraClass = '',
  attributes = '',
} = {}) {
  const sizeClass = `fb-btn-${size}`;
  const colorClass = `fb-btn-${color}`;
  const outlineClass = outline ? 'fb-btn-outline' : '';
  const iconOnlyClass = iconOnly ? 'fb-btn-icon-only' : '';
  const buttonId = id ? `id="${id}"` : '';
  
  // Base classes according to our system
  const classes = [
    'fb-btn',
    sizeClass,
    outlineClass || colorClass, // If outline is true, it takes precedence for primary styling
    outline && colorClass ? `fb-btn-outline-${color}` : '', // Specific outline brand color
    iconOnlyClass,
    extraClass,
  ].filter(Boolean).join(' ');

  // Left Arrow SVG (default if leftIconSvg is true but not a string)
  let leftIcon = leftIconSvg;
  if (leftIconSvg === true) {
    leftIcon = `<svg style="width: 1em; height: 1em;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
  }

  // Right Arrow SVG (default if rightIconSvg is true but not a string)
  let rightIcon = rightIconSvg;
  if (rightIconSvg === true) {
    rightIcon = `<svg style="width: 1em; height: 1em;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  }

  if (iconOnly) {
    return `
      <button 
        type="${type}" 
        class="${classes}"
        ${buttonId}
        ${disabled ? 'disabled' : ''}
        ${attributes}
        aria-label="${label}"
      >
        ${leftIcon || rightIcon || `<svg style="width: 1.25em; height: 1.25em;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`}
      </button>
    `;
  }

  return `
    <button 
      type="${type}" 
      class="${classes}"
      ${buttonId}
      ${disabled ? 'disabled' : ''}
      ${attributes}
    >
      ${leftIcon ? `<span class="fb-btn-icon fb-btn-icon-left">${leftIcon}</span>` : ''}
      <span>${label}</span>
      ${rightIcon ? `<span class="fb-btn-icon fb-btn-icon-right">${rightIcon}</span>` : ''}
    </button>
  `;
}
