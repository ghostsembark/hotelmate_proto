import { renderButton } from './flowbite/Button.js';

export function renderFooter(step, totalSteps, onBack, onNext) {
    const isFirstStep = step === 1;
    const isLastStep = step === totalSteps;
    const nextLabel = isLastStep ? 'Complete Setup' : `Next: ${onNext.label || 'Continue'}`;

    return `
    <footer class="onboarding-footer">
      <div class="footer-content">
        <div class="footer-left">
          ${!isFirstStep ? renderButton({
            label: 'Back',
            color: 'secondary',
            size: 'base',
            leftIconSvg: true,
            extraClass: 'footer-btn-back',
            attributes: `onclick="window.location.hash='${onBack.path}'"`
          }) : ''}
        </div>
        
        <div class="footer-right">
          ${renderButton({
            label: nextLabel,
            color: 'brand',
            size: 'base',
            rightIconSvg: true,
            extraClass: 'welcome-cta-btn',
            attributes: `onclick="window.location.hash='${onNext.path}'"`
          })}
        </div>
      </div>
    </footer>
  `;
}
