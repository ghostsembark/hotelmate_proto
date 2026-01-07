/**
 * HotelMate - Operator Welcome Screen
 * First screen after operator login (Mono theme)
 */

export function renderOperatorWelcome(user) {
    const userName = user?.name || 'there'

    return `
    <div class="onboarding-page">
      <div class="onboarding-container">
        <!-- Logo -->
        <div class="onboarding-logo">
          <img src="/hotelmate_logo.svg" alt="HotelMate" class="logo-image">
        </div>

        <!-- Welcome Content -->
        <div class="welcome-content">
          <div class="welcome-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="var(--bg-brand-soft)"/>
              <path d="M20 26H44M20 32H44M20 38H36" stroke="var(--bg-brand)" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>

          <h1 class="welcome-title">Welcome, ${userName}!</h1>
          <p class="welcome-subtitle">Let's set up your operator profile on HotelMate</p>

          <div class="welcome-info-card">
            <p class="info-card-text">
              Tour Operator onboarding details coming soon. 
              The flow will be customized based on your business needs.
            </p>
          </div>

          <button type="button" class="btn-get-started" id="operatorContinueBtn" disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  `
}

export function setupOperatorWelcomeHandlers(router) {
    // Placeholder - will be implemented when operator flow details are provided
}
