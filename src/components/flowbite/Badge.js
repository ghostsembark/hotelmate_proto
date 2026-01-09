/**
 * Badge Component
 * Figma Node: 1146:22250
 * 
 * Supports variants:
 * - Theme: gray, white, brand, danger, warning, success
 * - Size: sm, lg
 * - Shape: square (rounded-base), pill (rounded-full)
 * - Types: default, with-icon, with-avatar, with-dot, icon-only
 */

/**
 * Renders a badge component
 * @param {Object} props - Component properties
 * @param {string} props.label - Badge text
 * @param {string} [props.theme='gray'] - Color theme
 * @param {string} [props.size='sm'] - Size (sm, lg)
 * @param {boolean} [props.pill=false] - Whether badge is pill-shaped
 * @param {string} [props.iconLeft] - SVG for left icon
 * @param {string} [props.iconRight] - SVG for right icon
 * @param {string} [props.avatar] - URL for avatar image
 * @param {boolean} [props.withDot=false] - Whether to show a status dot
 * @param {boolean} [props.iconOnly=false] - Whether badge is icon only
 * @param {string} [props.extraClass=''] - Additional CSS classes
 * @returns {string} HTML string
 */
export function renderBadge({
  label = 'Badge',
  theme = 'gray',
  size = 'sm',
  pill = false,
  iconLeft = null,
  iconRight = null,
  avatar = null,
  withDot = false,
  iconOnly = false,
  extraClass = '',
} = {}) {
  const sizeClass = `fb-badge-${size}`;
  const themeClass = `fb-badge-${theme}`;
  const shapeClass = pill ? 'fb-badge-pill' : 'fb-badge-rounded';
  const iconOnlyClass = iconOnly ? 'fb-badge-icon-only' : '';
  
  const classes = [
    'fb-badge',
    sizeClass,
    themeClass,
    shapeClass,
    iconOnlyClass,
    extraClass,
  ].filter(Boolean).join(' ');

  // Dot element
  const dotElement = withDot ? `<span class="fb-badge-dot"></span>` : '';
  
  // Avatar element
  const avatarElement = avatar ? `
    <img src="${avatar}" alt="" class="fb-badge-avatar">
  ` : '';

  // Left Icon
  const leftIconElement = iconLeft ? `
    <span class="fb-badge-icon fb-badge-icon-left">${iconLeft}</span>
  ` : '';

  // Right Icon
  const rightIconElement = iconRight ? `
    <span class="fb-badge-icon fb-badge-icon-right">${iconRight}</span>
  ` : '';

  if (iconOnly && iconLeft) {
    return `
      <span class="${classes}" title="${label}">
        <span class="fb-badge-icon">${iconLeft}</span>
      </span>
    `;
  }

  return `
    <span class="${classes}">
      ${avatarElement}
      ${dotElement}
      ${leftIconElement}
      <span class="fb-badge-label">${label}</span>
      ${rightIconElement}
    </span>
  `;
}
