/**
 * Footer Component for HotelMate Onboarding
 * Implements navigation buttons matching Figma styling (Node 239:40931)
 */

export function renderFooter(step, totalSteps, onBack, onNext) {
    const isFirstStep = step === 1;
    const isLastStep = step === totalSteps;
    const nextLabel = isLastStep ? 'Complete Setup' : `Next: ${onNext.label || 'Continue'}`;

    return `
    <footer class="onboarding-footer">
      <div class="footer-content">
        <div class="footer-left">
          ${!isFirstStep ? `
            <button class="footer-btn-back" onclick="window.location.hash='${onBack.path}'">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Back
            </button>
          ` : ''}
        </div>
        
        <div class="footer-right">
          <button class="welcome-cta-btn" onclick="window.location.hash='${onNext.path}'">
            ${nextLabel}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  `;
}
