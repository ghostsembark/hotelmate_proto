import { renderButton } from '../../components/flowbite/Button.js'

export function renderHotelWelcome(user) {
  return `
    <div class="welcome-page" data-node-id="239:9102">
      <!-- Header -->
      <header class="welcome-header" data-node-id="239:40932">
        <div class="welcome-header-content">
          <img src="/hotelmate_logo.svg" alt="HotelMate" class="welcome-logo" data-node-id="286:106770">
        </div>
      </header>

      <!-- Decorative illustration - top right -->
      <div class="deco-illustration deco-top-right">
        <img src="/top assets.svg" alt="" class="deco-svg" />
      </div>

      <!-- Decorative illustration - bottom right -->
      <div class="deco-illustration deco-bottom-right">
        <img src="/bottom assets.svg" alt="" class="deco-svg" />
      </div>

      <!-- Main Content -->
      <main class="welcome-main">
        <!-- Illustration -->
        <div class="welcome-illustration" data-node-id="239:9938">
          <svg width="211" height="165" viewBox="0 0 211 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Hotel building base -->
            <ellipse cx="105" cy="145" rx="85" ry="18" fill="#E86C4A"/>
            <ellipse cx="105" cy="143" rx="80" ry="15" fill="#F2856B"/>
            
            <!-- Dots on base -->
            <circle cx="40" cy="143" r="3" fill="#FFF" opacity="0.6"/>
            <circle cx="105" cy="148" r="3" fill="#FFF" opacity="0.6"/>
            <circle cx="170" cy="143" r="3" fill="#FFF" opacity="0.6"/>
            
            <!-- Cat ears on boat -->
            <path d="M25 130 L35 115 L45 130" fill="#E86C4A"/>
            <path d="M165 130 L175 115 L185 130" fill="#E86C4A"/>
            
            <!-- Main hotel building -->
            <rect x="65" y="50" width="50" height="90" fill="#1A9B7A"/>
            <rect x="68" y="53" width="44" height="84" fill="#22B88A"/>
            
            <!-- Hotel windows -->
            <rect x="72" y="58" width="12" height="15" rx="2" fill="#FFF"/>
            <rect x="88" y="58" width="12" height="15" rx="2" fill="#FFF"/>
            <rect x="72" y="78" width="12" height="15" rx="2" fill="#FFF"/>
            <rect x="88" y="78" width="12" height="15" rx="2" fill="#FFF"/>
            <rect x="72" y="98" width="12" height="15" rx="2" fill="#FFF"/>
            <rect x="88" y="98" width="12" height="15" rx="2" fill="#FFF"/>
            
            <!-- Hotel entrance -->
            <rect x="78" y="118" width="24" height="22" rx="2" fill="#104E64"/>
            
            <!-- Side building -->
            <rect x="115" y="75" width="35" height="65" fill="#1A9B7A"/>
            <rect x="118" y="78" width="29" height="59" fill="#22B88A"/>
            
            <!-- Side building windows -->
            <rect x="122" y="82" width="8" height="10" rx="1" fill="#FFF"/>
            <rect x="134" y="82" width="8" height="10" rx="1" fill="#FFF"/>
            <rect x="122" y="97" width="8" height="10" rx="1" fill="#FFF"/>
            <rect x="134" y="97" width="8" height="10" rx="1" fill="#FFF"/>
            <rect x="122" y="112" width="8" height="10" rx="1" fill="#FFF"/>
            <rect x="134" y="112" width="8" height="10" rx="1" fill="#FFF"/>
            
            <!-- Building top decorations -->
            <rect x="75" y="40" width="30" height="12" fill="#1A9B7A"/>
            <rect x="125" y="68" width="15" height="8" fill="#1A9B7A"/>
            
            <!-- Hand with phone -->
            <path d="M160 30 Q175 25, 175 45 Q175 65, 165 70 Q155 75, 150 65 Q145 55, 150 40 Q155 25, 160 30" fill="#F5C5A8"/>
            <rect x="155" y="35" width="18" height="28" rx="3" fill="#104E64"/>
            <rect x="157" y="38" width="14" height="22" rx="2" fill="#67E8F9"/>
            
            <!-- Person icon on phone -->
            <circle cx="164" cy="46" r="4" fill="#FFF"/>
            <path d="M158 58 Q164 52, 170 58" fill="#FFF"/>
            
            <!-- Percentage bubble -->
            <circle cx="178" cy="25" r="12" fill="#F5B58D"/>
            <text x="172" y="29" font-size="10" fill="#104E64" font-weight="bold">%</text>
          </svg>
        </div>

        <!-- Welcome Text -->
        <h1 class="welcome-heading" data-node-id="239:9936">
          Get started by creating your profile
        </h1>
        
        <p class="welcome-subtext" data-node-id="239:9937">
          You can complete your hotel setup later.
        </p>

        <!-- CTA Button -->
        <div class="welcome-cta-container">
          ${renderButton({
            id: 'getStartedBtn',
            label: 'Get Started',
            color: 'brand',
            size: 'xl',
            extraClass: 'welcome-cta-btn'
          })}
        </div>
      </main>
    </div>
  `
}

export function setupHotelWelcomeHandlers(router) {
  const getStartedBtn = document.getElementById('getStartedBtn')
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      router.setCurrentStep(1)
      router.navigate('/onboarding/hotel/1')
    })
  }
}
