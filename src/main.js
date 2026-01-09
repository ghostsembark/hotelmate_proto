import './style.css'
import 'flowbite/dist/flowbite.css'
import 'flowbite'

// Import router and auth
import { router } from './router.js'
import { authService } from './auth.js'

// Import screens
import { renderLoginScreen, setupLoginHandlers } from './screens/login.js'
import { renderHotelWelcome, setupHotelWelcomeHandlers } from './screens/hotel/welcome.js'
import { renderOperatorWelcome, setupOperatorWelcomeHandlers } from './screens/operator/welcome.js'
import { renderHotelDashboard, setupHotelDashboardHandlers } from './screens/hotel/dashboard.js'

// Import components and constants
import { renderHeader } from './components/Header.js'
import { renderFooter } from './components/Footer.js'
import { renderStepper } from './components/Stepper.js'
import { renderStep1, setupStep1Handlers } from './screens/hotel/step1-basic-info.js'
import { renderStep2, setupStep2Handlers } from './screens/hotel/step2-location.js'
import { renderStep3, setupStep3Handlers } from './screens/hotel/step3-room-details.js'
import { renderStep4, setupStep4Handlers } from './screens/hotel/step4-amenities.js'
import { renderStep5, setupStep5Handlers } from './screens/hotel/step5-photos.js'
import { renderStep6, setupStep6Handlers } from './screens/hotel/step6-policies.js'
import { renderStep7, setupStep7Handlers } from './screens/hotel/step7-verification.js'
import { renderCompleteScreen, setupCompleteHandlers } from './screens/hotel/complete.js'
import { HOTEL_ONBOARDING_STEPS } from './mockData.js'

// App container
const app = document.querySelector('#app')

// Set default theme
document.documentElement.setAttribute('data-theme', 'enterprise')

// Route handlers
router.register('/login', () => {
  document.documentElement.setAttribute('data-theme', 'enterprise')
  app.innerHTML = renderLoginScreen()
  setupLoginHandlers(authService, router)
})

router.register('/onboarding/hotel/welcome', () => {
  const user = router.getUser()
  if (!user) {
    router.navigate('/login')
    return
  }
  document.documentElement.setAttribute('data-theme', 'enterprise')
  app.innerHTML = renderHotelWelcome(user)
  setupHotelWelcomeHandlers(router)
})

// Register complete route BEFORE the dynamic :step route
router.register('/hotel/dashboard', () => {
    const user = router.getUser()
    if (!user) {
      router.navigate('/login')
      return
    }
    document.documentElement.setAttribute('data-theme', 'enterprise')
    app.innerHTML = renderHotelDashboard(user)
    setupHotelDashboardHandlers(router)
})

router.register('/onboarding/hotel/complete', () => {
  const user = router.getUser()
  if (!user) {
    router.navigate('/login')
    return
  }
  
  // Ensure we are using the enterprise theme for this screen as per design
  document.documentElement.setAttribute('data-theme', 'enterprise')
  
  app.innerHTML = renderCompleteScreen(user)
  setupCompleteHandlers(router)
})

router.register('/onboarding/hotel/:step', (params, state) => {
  const user = router.getUser()
  if (!user) {
    router.navigate('/login')
    return
  }
  document.documentElement.setAttribute('data-theme', 'enterprise')

  const step = parseInt(params.step)
  const currentStepIndex = step - 1
  const stepName = HOTEL_ONBOARDING_STEPS[currentStepIndex]

  // Configure navigation
  const onBack = {
    path: step > 1 ? `/onboarding/hotel/${step - 1}` : '/onboarding/hotel/welcome'
  }
  const onNext = {
    path: step < 7 ? `/onboarding/hotel/${step + 1}` : '/onboarding/hotel/complete',
    label: step < 7 ? HOTEL_ONBOARDING_STEPS[step] : 'Finish'
  }

  // Render specific step content
  let stepContent = '';
  if (step === 1) {
    stepContent = renderStep1(state.onboardingData.step1 || {});
  } else if (step === 2) {
    stepContent = renderStep2(state.onboardingData.step2 || {});
  } else if (step === 3) {
    stepContent = renderStep3(state.onboardingData.step3 || {});
  } else if (step === 4) {
    stepContent = renderStep4(state.onboardingData.step4 || {});
  } else if (step === 5) {
    const rooms = state.onboardingData.step3?.rooms || [];
    stepContent = renderStep5(state.onboardingData.step5 || {}, rooms);
  } else if (step === 6) {
    stepContent = renderStep6(state.onboardingData.step6 || {});
  } else if (step === 7) {
    stepContent = renderStep7(state.onboardingData.step7 || {});
  } else {
    // Placeholder for other steps
    stepContent = `
      <div class="step-card">
        <h1 class="step-title">${stepName}</h1>
        <p class="step-description">Please provide the details for the ${stepName.toLowerCase()} of your property.</p>
        <div class="form-placeholder">
          <div class="placeholder-box">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="legacy-mb-4 text-gray-400">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
            <p>Form content for <strong>${stepName}</strong> will be implemented soon.</p>
          </div>
        </div>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="onboarding-page-v2">
      ${renderHeader('Add your hotel', `Step ${step}: ${stepName}`)}

      <div class="onboarding-main">
        <aside class="onboarding-sidebar">
          ${renderStepper(HOTEL_ONBOARDING_STEPS, currentStepIndex)}
        </aside>

        <main class="onboarding-content">
          <div class="step-container" id="onboarding-step-container">
            ${stepContent}
          </div>
        </main>
      </div>

      ${renderFooter(step, HOTEL_ONBOARDING_STEPS.length, onBack, onNext)}
    </div>
  `;

  // Initialize handlers
  if (step === 1) setupStep1Handlers(router);
  if (step === 2) setupStep2Handlers(router);
  if (step === 3) setupStep3Handlers(router);
  if (step === 4) setupStep4Handlers(router);
  if (step === 5) setupStep5Handlers(router);
  if (step === 6) setupStep6Handlers(router);
  if (step === 7) setupStep7Handlers(router);
})





router.register('/onboarding/operator/welcome', () => {
  const user = router.getUser()
  if (!user) {
    router.navigate('/login')
    return
  }
  document.documentElement.setAttribute('data-theme', 'mono')
  app.innerHTML = renderOperatorWelcome(user)
  setupOperatorWelcomeHandlers(router)
})

// Initialize router
router.init()
