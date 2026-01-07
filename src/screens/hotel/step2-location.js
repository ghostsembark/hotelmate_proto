import { MOCK_LOCATIONS } from '../../mockData.js'

/**
 * Hotel Onboarding - Step 2: Location
 * Matches Figma Node 239-46261 (Initial) and 239-45368 (Final)
 */
export function renderStep2(formData = {}) {
    return `
    <div class="step-content animate-fade-in" data-node-id="239:46243">
      <div class="step-header">
        <h2 class="step-title">Location & Contact Details</h2>
        <p class="step-description">These details will be shared with the agents when they reach out to you</p>
      </div>

      <form id="step2Form" class="step-form">
        <!-- Contact Details -->
        <div class="form-group" data-node-id="239:46246">
          <label for="phoneNumber" class="form-label">Phone number</label>
          <div class="phone-input-group">
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              class="form-input" 
              placeholder="123-456-7890"
              value="${formData.phoneNumber || ''}"
              required
            >
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-input" 
            placeholder="hotel@example.com"
            value="${formData.email || ''}"
            required
          >
        </div>

        <!-- Address Search -->
        <div class="form-group mt-8
          <!-- Divider -->
        

          <p class="section-label">Property Address</p>
          
          <div class="relative">
            <label for="addressSearch" class="form-label">Search</label>
            <div class="relative">
              <input 
                type="text" 
                id="addressSearch" 
                class="form-input pr-10" 
                placeholder="Search for your property Location"
                autocomplete="off"
              >
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
            </div>
            
            <!-- Flowbite Dropdown Sheet -->
            <div id="addressDropdown" class="hidden dropdown-container">
              <ul class="py-0 m-0 list-none">
                ${MOCK_LOCATIONS.map(loc => `
                  <li>
                    <button type="button" class="dropdown-item address-option">
                      ${loc}
                    </button>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Detailed Address Fields (Hidden Initially) -->
        <div id="detailedAddressFields" class="${formData.addressSelected ? '' : 'hidden'} flex flex-col gap-6 mt-4">
          <p class="section-label">Fill full address so that traveller can reach out to you</p>
          
          <div class="form-group">
            <label for="buildingNumber" class="form-label">Building Number, Plot Number</label>
            <input 
              type="text" 
              id="buildingNumber" 
              name="buildingNumber" 
              class="form-input" 
              placeholder="e.g. 123, Block A"
              value="${formData.buildingNumber || ''}"
              required
            >
          </div>

          <div class="form-group">
            <label for="street" class="form-label">Street, Colony, Area</label>
            <input 
              type="text" 
              id="street" 
              name="street" 
              class="form-input" 
              placeholder="e.g. Main Street, Downtown"
              value="${formData.street || ''}"
              required
            >
          </div>

          <div class="form-group">
            <label for="cityArea" class="form-label">City, State</label>
            <input 
              type="text" 
              id="cityArea" 
              name="cityArea" 
              class="form-input" 
              placeholder="e.g. New York, NY"
              value="${formData.cityArea || ''}"
              required
            >
          </div>
        </div>
      </form>
    </div>
  `;
}

export function setupStep2Handlers(router) {
    const form = document.getElementById('step2Form');
    if (!form) return;

    const addressSearch = document.getElementById('addressSearch');
    const addressDropdown = document.getElementById('addressDropdown');
    const detailedFields = document.getElementById('detailedAddressFields');
    const addressOptions = document.querySelectorAll('.address-option');

    // Input persistence
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const { name, value } = e.target;
            if (name) { // Only save named inputs
                router.updateOnboardingData('step2', {
                    ...router.state.onboardingData.step2,
                    [name]: value
                });
            }
        });
    });

    // Search Interaction
    addressSearch.addEventListener('input', () => {
        addressDropdown.classList.remove('hidden');
    });

    addressSearch.addEventListener('focus', () => {
        addressDropdown.classList.remove('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!addressSearch.contains(e.target) && !addressDropdown.contains(e.target)) {
            addressDropdown.classList.add('hidden');
        }
    });

    // Address Selection
    addressOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedAddress = e.target.textContent.trim();
            addressSearch.value = selectedAddress;
            addressDropdown.classList.add('hidden');
            detailedFields.classList.remove('hidden');

            // Auto-fill mock data based on selection (simple split for demo)
            const parts = selectedAddress.split(',');
            if (parts.length >= 3) {
                const building = parts[1].trim();
                const street = parts[2].trim();
                const city = parts[3] ? parts[3].trim() : '';

                document.getElementById('buildingNumber').value = building;
                document.getElementById('street').value = street;
                document.getElementById('cityArea').value = city;

                // Persist auto-filled data
                router.updateOnboardingData('step2', {
                    ...router.state.onboardingData.step2,
                    buildingNumber: building,
                    street: street,
                    cityArea: city,
                    addressSelected: true
                });
            }
        });
    });
}
