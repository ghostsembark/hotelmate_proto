import { PROPERTY_TYPES, STAR_RATINGS } from '../../mockData.js'
import { renderInput } from '../../components/flowbite/Input.js'

/**
 * Hotel Onboarding - Step 1: Basic Info
 * Matches Figma Node 239-41818
 */
export function renderStep1(formData = {}) {
    return `
    <div class="step-content animate-fade-in" data-node-id="239:42687">
      <div class="step-header" data-node-id="239:42688">
        <h2 class="step-title" data-node-id="239:42689">Basic Details</h2>
        <p class="step-description" data-node-id="239:42690">Provide the basic details of your property</p>
      </div>

      <form id="step1Form" class="step-form" data-node-id="239:42691">
        <!-- Property Name -->
        <div class="form-group" data-node-id="239:42692">
          ${renderInput({
            id: 'propertyName',
            name: 'propertyName',
            label: 'Property Name',
            placeholder: 'Enter your hotel name',
            value: formData.propertyName || '',
            required: true,
          })}
        </div>

        <!-- Property Type -->
        <div class="form-group" data-node-id="239:42693">
          <label for="propertyType" class="form-label">Property Type</label>
          <div class="select-wrapper">
            <select id="propertyType" name="propertyType" class="form-select" required>
              <option value="" disabled ${!formData.propertyType ? 'selected' : ''}>Select property type</option>
              ${PROPERTY_TYPES.map(type => `
                <option value="${type}" ${formData.propertyType === type ? 'selected' : ''}>${type}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Star Rating -->
        <div class="form-group" data-node-id="239:42694">
          <label for="starRating" class="form-label">Star Rating</label>
          <div class="select-wrapper">
            <select id="starRating" name="starRating" class="form-select" required>
              <option value="" disabled ${!formData.starRating ? 'selected' : ''}>Select rating</option>
              ${STAR_RATINGS.map(rating => `
                <option value="${rating.value}" ${formData.starRating == rating.value ? 'selected' : ''}>${rating.label}</option>
              `).join('')}
            </select>
          </div>
        </div>
      </form>
    </div>
  `;
}

export function setupStep1Handlers(router) {
    const form = document.getElementById('step1Form');
    if (!form) return;

    // Real-time data persistence
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const { name, value } = e.target;
            router.updateOnboardingData('step1', {
                ...router.state.onboardingData.step1,
                [name]: value
            });
        });
    });

    // Validation feedback (simple)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}
