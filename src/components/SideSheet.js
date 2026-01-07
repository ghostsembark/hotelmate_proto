/**
 * Side Sheet Component
 * Renders a slide-over drawer with overlay.
 */

const ICONS = {
  close: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`
};

/**
 * Returns HTML for the Side Sheet structure.
 * @param {Object} props
 * @param {string} props.id - Unique ID for the sheet container
 * @param {string} props.title - Title text
 * @param {string} props.content - Initial HTML content for the body
 * @param {string} props.saveLabel - Label for primary button (default: Save)
 */
export function renderSideSheet({ id, title, content = '', saveLabel = 'Save' }) {
  return `
    <div id="${id}" class="side-sheet-container">
      <!-- Overlay -->
      <div class="side-sheet-overlay" data-action="close"></div>
      
      <!-- Panel -->
      <div class="side-sheet-panel">
        <div class="side-sheet-header">
          <h3 class="side-sheet-title">${title}</h3>
          <button type="button" class="side-sheet-close" data-action="close" aria-label="Close">
            ${ICONS.close}
          </button>
        </div>
        
        <div class="side-sheet-content">
          ${content}
        </div>
        
        <div class="side-sheet-footer">
          <button type="button" class="btn-primary" data-action="save">${saveLabel}</button>
          <button type="button" class="btn-secondary" data-action="close">Close</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initializes Side Sheet behavior.
 * @param {string} id - The ID of the sheet container.
 * @param {Object} callbacks - { onSave: () => void, onClose: () => void }
 */
export function setupSideSheet(id, callbacks = {}) {
  const container = document.getElementById(id);
  if (!container) return;

  const overlay = container.querySelector('.side-sheet-overlay');
  const panel = container.querySelector('.side-sheet-panel');
  const savedBtn = container.querySelector('button[data-action="save"]');

  const close = () => {
    overlay.classList.remove('open');
    panel.classList.remove('open');
    if (callbacks.onClose) callbacks.onClose();
  };

  const open = () => {
    overlay.classList.add('open');
    panel.classList.add('open');
  };

  // Close triggers
  container.querySelectorAll('[data-action="close"]').forEach(el => {
    el.addEventListener('click', close);
  });

  // Save trigger
  if (savedBtn) {
    savedBtn.addEventListener('click', () => {
      if (callbacks.onSave) callbacks.onSave();
    });
  }

  return { open, close };
}
