import { AMENITIES } from '../../mockData.js';

/**
 * Hotel Onboarding - Step 4: Amenities
 * Matches Figma Node 29:1776
 */
export function renderStep4(formData = {}) {
    const selectedAmenities = formData.amenities || [];

    return `
    <div class="step-content animate-fade-in" data-node-id="29:1776">
      <div class="step-header" data-node-id="29:1777">
        <h2 class="step-title" data-node-id="29:1778">General Amenities</h2>
        <p class="step-description" data-node-id="29:1779">Agents prefer to know the amenities you’re providing</p>
      </div>



      <div class="amenities-grid flex flex-wrap gap-x-3 gap-y-4" data-node-id="29:1831">
        ${AMENITIES.map((amenity, index) => {
          const isSelected = selectedAmenities.includes(amenity);
          return `
            <button 
              type="button" 
              class="amenity-pill px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                isSelected 
                ? 'text-white border-transparent shadow-sm' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-medium hover:bg-gray-50'
              }"
              style="${isSelected ? 'background-color: #104E64;' : ''}"
              data-amenity="${amenity}"
              data-node-id="29:${1936 + index}"
            >
              <svg class="w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              ${amenity}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Flowbite Alert - Moved below the grid to match Figma -->
      <div id="alert-amenities" class="flex items-center p-4 mt-8 text-cyan-800 rounded-lg bg-cyan-50 border border-cyan-100" role="alert" data-node-id="29:1954">
        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <div class="ms-3 text-sm font-medium">
          You can add the amenities of respective rooms once your property is published
        </div>
      </div>
    </div>
  `;
}

export function setupStep4Handlers(router) {
    const pills = document.querySelectorAll('.amenity-pill');
    
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const amenity = pill.dataset.amenity;
            let currentAmenities = router.state.onboardingData.step4?.amenities || [];
            
            const isRemoving = currentAmenities.includes(amenity);
            if (isRemoving) {
                currentAmenities = currentAmenities.filter(a => a !== amenity);
            } else {
                currentAmenities.push(amenity);
            }
            
            // Save to state
            router.updateOnboardingData('step4', {
                ...router.state.onboardingData.step4,
                amenities: currentAmenities
            });
            
            // Toggle visual state
            const isSelectedNow = currentAmenities.includes(amenity);
            if (isSelectedNow) {
                pill.classList.remove('bg-white', 'text-gray-600', 'border-gray-200', 'hover:border-brand-medium', 'hover:bg-gray-50');
                pill.classList.add('text-white', 'border-transparent', 'shadow-sm');
                pill.style.backgroundColor = '#104E64';
                const svg = pill.querySelector('svg');
                if (svg) {
                    svg.classList.remove('text-gray-400');
                    svg.classList.add('text-white');
                }
            } else {
                pill.classList.add('bg-white', 'text-gray-600', 'border-gray-200', 'hover:border-brand-medium', 'hover:bg-gray-50');
                pill.classList.remove('text-white', 'border-transparent', 'shadow-sm');
                pill.style.backgroundColor = '';
                const svg = pill.querySelector('svg');
                if (svg) {
                    svg.classList.remove('text-white');
                    svg.classList.add('text-gray-400');
                }
            }
        });
    });
}
