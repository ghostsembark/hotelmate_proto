/**
 * Header Component for HotelMate Onboarding
 * Matches Figma Node 239:40932
 */

export function renderHeader(title = '', subtitle = '', showExit = true) {
    return `
    <header class="onboarding-header" data-node-id="239:40932">
      <div class="header-left">
        <img src="/hotelmate_logo.svg" alt="HotelMate" class="header-logo" data-node-id="286:106770">
      </div>
      
      ${title ? `
        <div class="header-center" data-node-id="239:40934">
          <h2 class="header-title" data-node-id="239:40935">${title}</h2>
          ${subtitle ? `<p class="header-subtitle" data-node-id="239:40936">${subtitle}</p>` : ''}
        </div>
      ` : ''}

      <div class="header-right">
        ${showExit ? `
          <div class="nav-link-container" data-name="Nav link" data-node-id="239:40937">
            <a href="#/login" class="save-exit-link">Save & Exit</a>
          </div>
        ` : ''}
      </div>
    </header>
  `;
}
