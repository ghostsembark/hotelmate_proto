export function renderStepper(steps, currentStepIndex) {
  return `
    <div class="onboarding-stepper" data-node-id="239:48219">
      <div class="stepper-container">
        <ul class="stepper-list">
          ${steps.map((step, index) => {
    const isCompleted = index < currentStepIndex;
    const isActive = index === currentStepIndex;
    const isUpcoming = index > currentStepIndex;

    let stateClass = 'upcoming';
    if (isCompleted) stateClass = 'completed';
    if (isActive) stateClass = 'active';

    return `
              <li class="stepper-item ${stateClass}" data-step="${index + 1}">
                <div class="stepper-marker">
                  <div class="marker-circle">
                    ${isCompleted ? `
                      <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.917 5.724 10.5 15 1.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    ` : `
                      <span class="marker-number">${index + 1}</span>
                    `}
                  </div>
                  ${index < steps.length - 1 ? `<div class="marker-line"></div>` : ''}
                </div>
                <div class="stepper-content">
                  <span class="stepper-label">${step}</span>
                </div>
              </li>
            `;
  }).join('')}
        </ul>
      </div>
    </div>
  `;
}
