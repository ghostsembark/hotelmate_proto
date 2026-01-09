/**
 * Design Tokens Documentation
 * Displays HotelMate color palette, typography, and spacing tokens
 * Auto-generated based on style.css extraction
 */

export default {
  title: 'Design System/Tokens',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Complete design system tokens including Enterprise and Mono themes in both Light and Dark modes. Contains 400+ tokens.',
      },
    },
  },
};

const ThemeWrapper = (content, theme = 'enterprise') => `
  <div data-theme="${theme}" style="padding: 24px; background: var(--bg-neutral-primary); color: var(--text-heading); border-radius: 8px; border: 1px solid var(--border-default); transition: all 0.2s ease;">
    <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 14px; font-weight: 400; color: var(--text-body);">Active Theme:</span>
        <span style="font-size: 16px; font-weight: 700;">${theme.charAt(0) + theme.slice(1)}</span>
      </h3>
    </div>
    ${content}
  </div>
`;

const TokenGrid = (tokens, renderer) => `
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
    ${tokens.map(renderer).join('')}
  </div>
`;

const ColorSwatch = (token) => `
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="height: 48px; width: 100%; border-radius: 6px; background: var(--${token}); border: 1px solid rgba(0,0,0,0.1);"></div>
    <div style="font-size: 12px; font-weight: 600; color: var(--text-heading); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${token}</div>
  </div>
`;

const SemanticSwatch = (token, type = 'bg') => {
  let style = '';
  if (type === 'bg') style = `background: var(--${token}); height: 48px; border: 1px solid var(--border-default);`;
  if (type === 'text') style = `color: var(--${token}); font-size: 16px; font-weight: 600; padding: 12px; border: 1px solid var(--border-default);`;
  if (type === 'border') style = `border: 2px solid var(--${token}); height: 48px; background: transparent;`;
  
  return `
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="border-radius: 6px; ${style} display: flex; align-items: center; justify-content: center;">
      ${type === 'text' ? 'Aa' : ''}
    </div>
    <div style="font-size: 11px; font-weight: 500; color: var(--text-body); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${token}</div>
  </div>
`};

// =====================
// DATA SETS
// =====================

const palettes = [
  'brand', 'gray', 'slate', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 
  'green', 'emerald', 'teal', 'cyan', 'sky', 'indigo', 'purple', 'fuchsia', 'pink', 'rose'
];

const suffixes = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

const fontSizes = [
  'text-xxs', 'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 
  'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'
];

const semanticBackgrounds = [
  "bg-white", "bg-neutral-primary", "bg-neutral-primary-soft", "bg-neutral-primary-medium", "bg-neutral-primary-strong",
  "bg-neutral-secondary", "bg-neutral-secondary-soft", "bg-neutral-secondary-medium", "bg-neutral-secondary-strong",
  "bg-neutral-tertiary", "bg-neutral-tertiary-soft", "bg-neutral-tertiary-medium", "bg-neutral-quaternary",
  "bg-quaternary-medium", "bg-neutral-subtle", "bg-gray", "bg-dark", "bg-dark-strong", "bg-disabled",
  "bg-brand-softer", "bg-brand-soft", "bg-brand", "bg-brand-medium", "bg-brand-strong",
  "bg-success-soft", "bg-success", "bg-success-medium", "bg-success-strong",
  "bg-danger-soft", "bg-danger", "bg-danger-medium", "bg-danger-strong",
  "bg-warning-soft", "bg-warning", "bg-warning-medium", "bg-warning-strong",
  "bg-purple", "bg-sky", "bg-teal", "bg-pink", "bg-cyan", "bg-fuchsia", "bg-indigo", "bg-orange"
];

const semanticTexts = [
  "text-white", "text-black", "text-heading", "text-body", "text-body-subtle",
  "text-fg-brand", "text-fg-brand-subtle", "text-fg-brand-strong",
  "text-fg-success", "text-fg-success-strong",
  "text-fg-danger", "text-fg-danger-strong",
  "text-fg-warning", "text-fg-warning-subtle",
  "text-fg-info", "text-fg-yellow", "text-fg-disabled",
  "text-fg-purple", "text-fg-cyan", "text-fg-indigo", "text-fg-pink", "text-fg-lime"
];

const semanticBorders = [
  "border-dark", "border-buffer", "border-buffer-medium", "border-buffer-strong", "border-muted",
  "border-light", "border-light-subtle", "border-light-medium",
  "border-default", "border-default-subtle", "border-default-medium", "border-default-strong",
  "border-brand-subtle", "border-brand-light", "border-brand",
  "border-success", "border-success-subtle",
  "border-danger", "border-danger-subtle",
  "border-warning", "border-warning-subtle",
  "border-dark-subtle", "border-purple", "border-orange"
];

// =====================
// THEME SWITCHER
// =====================

export const ThemeComparison = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
      ${['enterprise', 'mono', 'enterprise-dark', 'mono-dark'].map(theme => `
        <div data-theme="${theme}" style="padding: 24px; background: var(--bg-neutral-primary); border: 1px solid var(--border-default); border-radius: 12px;">
          <h3 style="font-weight: 700; color: var(--text-heading); margin-bottom: 16px; text-transform: capitalize;">${theme.replace('-', ' ')}</h3>
          <div style="display: grid; gap: 8px;">
            <div style="background: var(--bg-brand); color: white; padding: 12px; border-radius: var(--rounded); text-align: center;">Brand Action</div>
            <div style="background: var(--bg-neutral-secondary); border: 1px solid var(--border-default); padding: 12px; border-radius: var(--rounded); color: var(--text-body);">Secondary Surface</div>
             <div style="color: var(--text-body-subtle); font-size: 13px;">Subtle text with <span style="color: var(--text-fg-brand); font-weight: 600;">brand accent</span>.</div>
          </div>
        </div>
      `).join('')}
    </div>
  `
};

// =====================
// PRIMITIVE COLORS
// =====================

export const PrimitiveColors = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 40px; padding: 24px;">
      ${palettes.map(palette => `
        <div>
          <h3 style="font-size: 18px; margin-bottom: 16px; text-transform: capitalize;">${palette} Palette</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px;">
            ${suffixes.map(suffix => ColorSwatch(`${palette}-${suffix}`)).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `
};

// =====================
// SEMANTIC TOKENS
// =====================

export const SemanticBackgrounds = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 40px;">
      ${[['Enterprise Light', 'enterprise'], ['Enterprise Dark', 'enterprise-dark'], ['Mono Light', 'mono'], ['Mono Dark', 'mono-dark']].map(([title, theme]) => ThemeWrapper(`
        <h2 style="font-size: 18px; margin-bottom: 24px;">${title} Backgrounds (${semanticBackgrounds.length} tokens)</h2>
        ${TokenGrid(semanticBackgrounds, token => SemanticSwatch(token, 'bg'))}
      `, theme)).join('<div style="margin-bottom: 40px;"></div>')}
    </div>
  `
};

const spacingScale = [
  '0','px','0.5','1','1.5','2','2.5','3','3.5','4','5','6','7','8','9','10','11','12',
  '14','16','20','24','28','32','36','40','44','48','52','56','60','64','72','80','96'
];

const fontFamilies = ['font-base', 'font-sans', 'font-serif', 'font-mono'];
const fontWeights = ['font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'];
const lineHeights = ['leading-none', 'leading-3', 'leading-4', 'leading-5', 'leading-6', 'leading-7', 'leading-8', 'leading-9', 'leading-10'];
const letterSpacings = ['tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest'];

export const SemanticTypography = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 40px;">
      ${[['Enterprise Light', 'enterprise'], ['Enterprise Dark', 'enterprise-dark']].map(([title, theme]) => ThemeWrapper(`
        <h2 style="font-size: 18px; margin-bottom: 24px;">${title} Text Colors</h2>
        ${TokenGrid(semanticTexts, token => SemanticSwatch(token, 'text'))}
      `, theme)).join('<div style="margin-bottom: 40px;"></div>')}

      <div style="padding: 24px; border-top: 2px solid #eee;">
        <h2 style="font-size: 18px; margin-bottom: 24px;">Typography Primitives</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
          <div>
            <h4 style="margin-bottom: 12px; color: #666;">Font Families</h4>
            ${fontFamilies.map(f => `<div style="margin-bottom: 8px; font-family: var(--${f});"><code style="color: #666; font-size: 12px; margin-right: 8px;">${f}</code> The quick brown fox</div>`).join('')}
          </div>
          <div>
            <h4 style="margin-bottom: 12px; color: #666;">Font Weights</h4>
            ${fontWeights.map(f => `<div style="margin-bottom: 8px; font-weight: var(--${f});"><code style="color: #666; font-size: 12px; margin-right: 8px;">${f}</code> The quick brown fox</div>`).join('')}
          </div>
           <div>
            <h4 style="margin-bottom: 12px; color: #666;">Line Heights</h4>
            ${lineHeights.map(f => `<div style="margin-bottom: 8px; line-height: var(--${f}); background: #eee;"><code style="color: #666; font-size: 12px; margin-right: 8px;">${f}</code> The quick brown fox jumps...</div>`).join('')}
          </div>
          <div>
            <h4 style="margin-bottom: 12px; color: #666;">Letter Spacing</h4>
            ${letterSpacings.map(f => `<div style="margin-bottom: 8px; letter-spacing: var(--${f});"><code style="color: #666; font-size: 12px; margin-right: 8px;">${f}</code> SPACING</div>`).join('')}
          </div>
        </div>
      </div>

      <div style="padding: 24px; border-top: 2px solid #eee;">
        <h2 style="font-size: 18px; margin-bottom: 24px;">Detailed Type Scale</h2>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          ${fontSizes.map(size => `
            <div style="border-bottom: 1px solid #eee; padding-bottom: 16px;">
              <div style="display: flex; align-items: baseline; gap: 16px; margin-bottom: 8px;">
                 <code style="color: #666; width: 100px;">${size}</code>
                 <span style="font-size: var(--${size}); color: #111;">The quick brown fox jumps over the lazy dog.</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
};

export const SemanticBorders = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 40px;">
      ${[['Enterprise Light', 'enterprise'], ['Enterprise Dark', 'enterprise-dark']].map(([title, theme]) => ThemeWrapper(`
        <h2 style="font-size: 18px; margin-bottom: 24px;">${title} Border Colors</h2>
         ${TokenGrid(semanticBorders, token => SemanticSwatch(token, 'border'))}
      `, theme)).join('<div style="margin-bottom: 40px;"></div>')}
      
      <div style="padding: 24px;">
        <h3 style="font-size: 18px; margin-bottom: 24px;">Border Widths</h3>
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          ${['0', '1', '2', '4', '8'].map(w => `
            <div style="text-align: center;">
              <div style="width: 64px; height: 64px; background: #fff; border: var(--border-${w}) solid #000; margin-bottom: 8px;"></div>
              <code>border-${w}</code>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
};

// =====================
// MEASUREMENTS & SHADOWS
// =====================

export const SpacingAndRadius = {
  render: () => `
    <div style="padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px;">
      <!-- Spacing -->
      <div>
        <h3 style="font-size: 18px; margin-bottom: 24px;">Spacing Primitives</h3>
        <div style="display: flex; flex-direction: column; gap: 16px; height: 600px; overflow-y: auto; padding-right: 16px;">
          ${spacingScale.map(s => {
             const token = s.replace('.', '-');
             return `
            <div style="display: flex; align-items: center; gap: 16px;">
              <span style="width: 120px; font-size: 12px;">spacing-${token}</span>
              <div style="height: 24px; width: var(--spacing-${token}); background: #0694A2; border-radius: 2px;"></div>
            </div>
          `}).join('')}
        </div>
      </div>

      <!-- Corner Radius -->
      <div>
        <h3 style="font-size: 18px; margin-bottom: 24px;">Border Radii (Enterprise context)</h3>
        <div data-theme="enterprise" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          ${['0', 'sm','md','lg','xl','2xl','3xl','full'].map(r => `
            <div style="text-align: center; padding: 16px; border: 1px solid #E5E7EB; border-radius: 8px;">
              <div style="width: 60px; height: 60px; background: #0694A2; border-radius: var(--rounded-${r}); margin: 0 auto 12px;"></div>
              <code style="font-size: 11px;">rounded-${r}</code>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
};

export const Shadows = {
  render: () => `
    <div style="padding: 24px;">
      <h3 style="font-size: 18px; margin-bottom: 32px;">Elevation & Shadows</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 40px;">
        ${['xs', 'sm', 'md', 'lg', 'xl'].map(s => `
          <div style="text-align: center;">
            <div style="width: 120px; height: 120px; background: white; margin: 0 auto 16px; border-radius: 12px; box-shadow: var(--shadow-${s}); display: flex; align-items: center; justify-content: center; font-size: 11px; color: #6B7280; border: 1px solid #F3F4F6;">
              shadow-${s}
            </div>
            <code>--shadow-${s}</code>
          </div>
        `).join('')}
      </div>
    </div>
  `
};
