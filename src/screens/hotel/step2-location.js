import { MOCK_LOCATIONS } from '../../mockData.js'
import { renderInput } from '../../components/flowbite/Input.js'

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
          ${renderInput({
            id: 'phoneNumber',
            name: 'phoneNumber',
            label: 'Phone number',
            type: 'tel',
            placeholder: '123-456-7890',
            value: formData.phoneNumber || '',
            required: true,
          })}
        </div>

        <div class="form-group">
          ${renderInput({
            id: 'email',
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'hotel@example.com',
            value: formData.email || '',
            required: true,
          })}
        </div>

        <!-- Address Search -->
        <div class="form-group legacy-mt-8">
          <!-- Divider -->
        

          <p class="section-label">Property Address</p>
          
          <div class="legacy-relative">
            ${renderInput({
              id: 'addressSearch',
              label: 'Search',
              placeholder: 'Search for your property Location',
              leftIcon: 'search',
            })}
            
            <!-- Flowbite Dropdown Sheet -->
            <div id="addressDropdown" class="legacy-hidden dropdown-container">
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
        <div id="detailedAddressFields" class="${formData.addressSelected ? '' : 'hidden'} legacy-flex legacy-flex-col legacy-gap-6 legacy-mt-4">
          <p class="section-label">Fill full address so that traveller can reach out to you</p>
          
          <div class="form-group">
            ${renderInput({
              id: 'buildingNumber',
              name: 'buildingNumber',
              label: 'Building Number, Plot Number',
              placeholder: 'e.g. 123, Block A',
              value: formData.buildingNumber || '',
              required: true,
            })}
          </div>

          <div class="form-group">
            ${renderInput({
              id: 'street',
              name: 'street',
              label: 'Street, Colony, Area',
              placeholder: 'e.g. Main Street, Downtown',
              value: formData.street || '',
              required: true,
            })}
          </div>

          <div class="form-group">
            ${renderInput({
              id: 'cityArea',
              name: 'cityArea',
              label: 'City, State',
              placeholder: 'e.g. New York, NY',
              value: formData.cityArea || '',
              required: true,
            })}
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

    // Input persistence - now using fb-input class
    const inputs = form.querySelectorAll('.fb-input, input');
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
    if (addressSearch) {
        addressSearch.addEventListener('input', () => {
            addressDropdown.classList.remove('hidden');
            addressDropdown.classList.remove('legacy-hidden');
        });

        addressSearch.addEventListener('focus', () => {
            addressDropdown.classList.remove('hidden');
            addressDropdown.classList.remove('legacy-hidden');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (addressSearch && !addressSearch.contains(e.target) && !addressDropdown.contains(e.target)) {
            addressDropdown.classList.add('hidden');
        }
    });

    // Address Selection
    addressOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedAddress = e.target.textContent.trim();
            if (addressSearch) addressSearch.value = selectedAddress;
            addressDropdown.classList.add('hidden');
            detailedFields.classList.remove('hidden');

            // Auto-fill mock data based on selection (simple split for demo)
            const parts = selectedAddress.split(',');
            if (parts.length >= 3) {
                const building = parts[1].trim();
                const street = parts[2].trim();
                const city = parts[3] ? parts[3].trim() : '';

                const buildingInput = document.getElementById('buildingNumber');
                const streetInput = document.getElementById('street');
                const cityInput = document.getElementById('cityArea');

                if (buildingInput) buildingInput.value = building;
                if (streetInput) streetInput.value = street;
                if (cityInput) cityInput.value = city;

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
