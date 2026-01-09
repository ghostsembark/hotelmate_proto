import { renderBadge } from '../../components/flowbite/Badge.js';
import { renderButton } from '../../components/flowbite/Button.js';
import { renderInput } from '../../components/flowbite/Input.js';
import { renderDropdownSheet, setupDropdownSheet, renderDropdown } from '../../components/flowbite/Dropdown.js';
import { renderInputStepper, setupInputStepper } from '../../components/InputStepper.js';

/**
 * Hotel Onboarding - Step 6: Policies
 * Matches Figma Node 62:8040
 */

// Generate time options in 30-minute intervals (00:00 to 23:30)
const TIME_OPTIONS = [];
for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0');
    TIME_OPTIONS.push(`${hour}:00`);
    TIME_OPTIONS.push(`${hour}:30`);
}

export function renderStep6(data = {}) {
    // Default data structure
    const checkInTime = data.checkInTime || '';
    const checkOutTime = data.checkOutTime || '';
    const paymentPolicies = data.paymentPolicies || [{ id: Date.now(), timing: 'Before check-in', days: '1', amount: '50%' }];
    const cancellationPolicies = data.cancellationPolicies || [{ id: Date.now(), timing: 'Before Check in', days: '1', amount: '10%' }];

    return `
    <div class="step-content animate-fade-in" data-node-id="62:8040">
        <div class="step-header legacy-mb-8">
            <h2 class="step-title">Policies</h2>
            <p class="step-description">Mention all the policies applicable at your property.</p>
        </div>

        <!-- Check-in/out Time Section -->
        <div class="legacy-mb-10">
            <h3 class="text-base font-semibold text-heading mb-1">Check-in/out time</h3>
            <p class="text-sm text-body legacy-mb-6">Specify the check-in & check-out time at your property</p>
            
            <div class="legacy-grid legacy-grid-cols-2 legacy-gap-6">
                <div class="form-group">
                    ${renderDropdown({
                        id: 'check-in-time',
                        label: 'Check-in Time',
                        value: checkInTime || 'Select',
                        options: TIME_OPTIONS
                    })}
                </div>
                <div class="form-group">
                    ${renderDropdown({
                        id: 'check-out-time',
                        label: 'Check-out Time',
                        value: checkOutTime || 'Select',
                        options: TIME_OPTIONS
                    })}
                </div>
            </div>
        </div>

        <!-- Payment Policies Section -->
        <div class="legacy-mb-10">
            <h3 class="text-base font-semibold text-heading mb-1">Payment Policies</h3>
            <p class="text-sm text-body legacy-mb-6">Define when and how much guests should pay.</p>

            <div class="bg-neutral-secondary legacy-rounded-lg legacy-p-6 legacy-mb-6 legacy-border border-default">
                <div id="payment-policy-list" class="legacy-flex legacy-flex-col legacy-mb-6">
                    ${paymentPolicies.map((policy, index) => renderPaymentPolicyItem(policy, index)).join('<hr class="border-gray-200" style="margin: 16px 0;" />')}
                </div>
                
                ${renderButton({
                    id: 'add-payment-policy',
                    label: 'Add Stage',
                    color: 'dark',
                    size: 'sm',
                    leftIconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`
                })}
            </div>
        </div>

        <!-- Cancellation Policies Section -->
        <div class="legacy-mb-10">
            <h3 class="text-base font-semibold text-heading mb-1">Cancellation Policies</h3>
            <p class="text-sm text-body legacy-mb-6">Offering a flexible cancellation policy helps traveller book in advance.</p>

            <div class="bg-neutral-secondary legacy-rounded-lg legacy-p-6 legacy-mb-6 legacy-border border-default">
                 <div id="cancellation-policy-list" class="legacy-flex legacy-flex-col legacy-mb-6">
                    ${cancellationPolicies.map((policy, index) => renderCancellationPolicyItem(policy, index)).join('<hr class="border-gray-200" style="margin: 16px 0;" />')}
                </div>

                ${renderButton({
                    id: 'add-cancellation-policy',
                    label: 'Add Policy',
                    color: 'dark',
                    size: 'sm',
                    leftIconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`
                })}
            </div>
        </div>
    </div>
    `;
}

function renderPaymentPolicyItem(policy, index) {
    return `
    <div class="payment-policy-item" data-id="${policy.id}">
        <div class="legacy-flex legacy-justify-between legacy-items-center legacy-mb-4">
            <h4 class="text-sm font-semibold text-heading">Payment Policy ${index + 1}</h4>
            ${renderBadge({
                label: `Policy ${index + 1} | ${policy.amount} ${policy.timing}`,
                theme: 'brand',
                size: 'sm',
                extraClass: 'policy-badge',
                attributes: `data-id="${policy.id}"`
            })}
        </div>
        <div class="legacy-flex flex-row legacy-gap-4 items-end">
            <div class="w-[33%]">
                ${renderDropdown({
                    id: `payment-timing-${policy.id}`,
                    label: 'When should this be collected',
                    value: policy.timing || 'Select',
                    options: ['Before check-in', 'After check-in', 'On booking'],
                    attributes: `data-id="${policy.id}" data-field="timing"`
                })}
            </div>
            <div class="w-[22%]">
                <label class="form-label text-xs">Days</label>
                ${renderInputStepper({
                    id: `stepper-payment-${policy.id}`,
                    value: parseInt(policy.days) || 0,
                    min: 0,
                    max: 365
                })}
            </div>
            <div class="w-[34%]">
                ${renderInput({
                    label: 'Show much should be collected',
                    value: policy.amount,
                    placeholder: '50%',
                    size: 'sm',
                    className: 'policy-amount',
                    attributes: `data-id="${policy.id}" data-field="amount"`
                })}
            </div>
             <div class="w-[6%] legacy-flex justify-end pb-2">
                ${renderButton({
                    label: 'Remove',
                    color: 'secondary',
                    size: 'sm',
                    iconOnly: true,
                    leftIconSvg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`,
                    extraClass: 'remove-payment-policy',
                    attributes: `data-id="${policy.id}" title="Remove policy"`
                })}
            </div>
        </div>
    </div>
    `;
}

function renderCancellationPolicyItem(policy, index) {
    return `
    <div class="cancellation-policy-item" data-id="${policy.id}">
        <div class="legacy-flex legacy-justify-between legacy-items-center legacy-mb-4">
             <h4 class="text-sm font-semibold text-heading">Cancellation Policy ${index + 1}</h4>
             ${renderBadge({
                label: `Policy ${index + 1} | ${policy.amount} ${policy.timing}`,
                theme: 'brand',
                size: 'sm',
                extraClass: 'policy-badge',
                attributes: `data-id="${policy.id}"`
            })}
        </div>
         <div class="legacy-flex flex-row legacy-gap-4 items-end">
            <div class="w-[33%]">
                 ${renderDropdown({
                    id: `cancellation-timing-${policy.id}`,
                    label: 'When can guest cancel it',
                    value: policy.timing || 'Select',
                    options: ['Before Check in', 'After Booking'],
                    attributes: `data-id="${policy.id}" data-field="timing"`
                 })}
            </div>
            <div class="w-[22%]">
                <label class="form-label text-xs">Days</label>
                ${renderInputStepper({
                    id: `stepper-cancellation-${policy.id}`,
                    value: parseInt(policy.days) || 0,
                    min: 0,
                    max: 365
                })}
            </div>
            <div class="w-[34%]">
                ${renderInput({
                    label: 'How much should be charged',
                    value: policy.amount,
                    placeholder: '10%',
                    size: 'sm',
                    className: 'cancellation-amount',
                    attributes: `data-id="${policy.id}" data-field="amount"`
                })}
            </div>
             <div class="w-[6%] legacy-flex justify-end pb-2">
                ${renderButton({
                    label: 'Remove',
                    color: 'secondary',
                    size: 'sm',
                    iconOnly: true,
                    leftIconSvg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`,
                    extraClass: 'remove-cancellation-policy',
                    attributes: `data-id="${policy.id}" title="Remove policy"`
                })}
            </div>
        </div>
    </div>
    `;
}

export function setupStep6Handlers(router) {
    const defaultData = {
        checkInTime: '',
        checkOutTime: '',
        paymentPolicies: [{ id: Date.now(), timing: 'Before check-in', days: '1', amount: '50%' }],
        cancellationPolicies: [{ id: Date.now(), timing: 'Before Check in', days: '1', amount: '10%' }]
    };
    
    // Get existing data or initialize
    let step6Data = router.getOnboardingData().step6 || defaultData;
    
    const saveState = () => {
        router.updateOnboardingData('step6', step6Data);
    };

    const reRender = () => {
        const container = document.getElementById('onboarding-step-container');
        if (container) {
            container.innerHTML = renderStep6(step6Data);
            setupStep6Handlers(router); // Re-attach listeners
        }
    };
    
    // Helper to update policy badge text live
    const updatePolicyBadge = (containerId, policyId, policyArray, index) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const badge = container.querySelector(`.policy-badge[data-id="${policyId}"]`);
        const policy = policyArray.find(p => p.id === policyId);
        
        if (badge && policy) {
            const labelEl = badge.querySelector('.fb-badge-label');
            if (labelEl) {
                labelEl.textContent = `Policy ${index + 1} | ${policy.amount} ${policy.timing}`;
            }
        }
    };

    // --- Global Dropdown Handling (Delegated) ---
    
    const handleGlobalClick = (e) => {
        // Toggle Dropdown
        const trigger = e.target.closest('.dropdown-trigger');
        if (trigger) {
            const input = trigger.querySelector('.fb-input');
            // Dropdown is a sibling of the input group (trigger) in our current structure
            const dropdown = trigger.parentElement.querySelector('.dropdown-container');
            
            if (input && dropdown) {
                const isHidden = dropdown.classList.contains('legacy-hidden');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-container').forEach(d => d.classList.add('legacy-hidden'));
                document.querySelectorAll('.fb-input-group').forEach(g => g.classList.remove('fb-input-focused'));
                
                if (isHidden) {
                    dropdown.classList.remove('legacy-hidden');
                    trigger.classList.add('fb-input-focused');
                }
            }
            return;
        }

        // Handle Selection
        const item = e.target.closest('.dropdown-item');
        if (item) {
            const dropdown = item.closest('.dropdown-container');
            // Group is a sibling of the dropdown in our current structure
            const group = dropdown.parentElement.querySelector('.fb-input-group');
            const input = group.querySelector('.fb-input');
            const value = item.dataset.value;
            const label = item.textContent.trim();
            
            if (input) {
                input.value = label;
                dropdown.classList.add('legacy-hidden');
                group.classList.remove('fb-input-focused');

                // Dispatch to specific handlers based on ID
                if (input.id === 'check-in-time') {
                    step6Data.checkInTime = value;
                    saveState();
                } else if (input.id === 'check-out-time') {
                    step6Data.checkOutTime = value;
                    saveState();
                } else if (input.id.startsWith('payment-timing-')) {
                    const id = parseInt(input.dataset.id);
                    const index = step6Data.paymentPolicies.findIndex(p => p.id === id);
                    if (index !== -1) {
                        step6Data.paymentPolicies[index].timing = value;
                        saveState();
                        updatePolicyBadge('payment-policy-list', id, step6Data.paymentPolicies, index);
                    }
                } else if (input.id.startsWith('cancellation-timing-')) {
                    const id = parseInt(input.dataset.id);
                    const index = step6Data.cancellationPolicies.findIndex(p => p.id === id);
                    if (index !== -1) {
                        step6Data.cancellationPolicies[index].timing = value;
                        saveState();
                        updatePolicyBadge('cancellation-policy-list', id, step6Data.cancellationPolicies, index);
                    }
                }
            }
            return;
        }

        // Close on outside click
        if (!e.target.closest('.fb-input-group') && !e.target.closest('.dropdown-container')) {
            document.querySelectorAll('.dropdown-container').forEach(d => d.classList.add('legacy-hidden'));
            document.querySelectorAll('.fb-input-group').forEach(g => g.classList.remove('fb-input-focused'));
        }
    };

    // Remove previous listener to avoid duplicates during re-render
    if (window._step6GlobalClickHandler) {
        document.removeEventListener('click', window._step6GlobalClickHandler);
    }
    window._step6GlobalClickHandler = handleGlobalClick;
    document.addEventListener('click', handleGlobalClick);

    // --- Stepper Initializations ---
    
    // Payment Policies Steppers
    step6Data.paymentPolicies.forEach((policy, index) => {
        setupInputStepper(`stepper-payment-${policy.id}`, (newValue) => {
            policy.days = newValue.toString();
            saveState();
            updatePolicyBadge('payment-policy-list', policy.id, step6Data.paymentPolicies, index);
        });
    });

    // Cancellation Policies Steppers
    step6Data.cancellationPolicies.forEach((policy, index) => {
        setupInputStepper(`stepper-cancellation-${policy.id}`, (newValue) => {
            policy.days = newValue.toString();
            saveState();
            updatePolicyBadge('cancellation-policy-list', policy.id, step6Data.cancellationPolicies, index);
        });
    });

    // --- Payment Policy Handlers ---
    
    // Add Payment Policy
    const addPaymentBtn = document.getElementById('add-payment-policy');
    if (addPaymentBtn) {
        addPaymentBtn.addEventListener('click', () => {
            step6Data.paymentPolicies.push({
                id: Date.now(),
                timing: 'Before check-in',
                days: '1',
                amount: '0%'
            });
            saveState();
            reRender();
        });
    }

    // Remove Payment Policy
    document.querySelectorAll('.remove-payment-policy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            step6Data.paymentPolicies = step6Data.paymentPolicies.filter(p => p.id !== id);
            saveState();
            reRender();
        });
    });

    // Update Payment Policy Fields
    const paymentContainer = document.getElementById('payment-policy-list');
    if (paymentContainer) {
        paymentContainer.addEventListener('input', (e) => {
            if (e.target.matches('.fb-input')) {
                const id = parseInt(e.target.closest('[data-id]').dataset.id || e.target.dataset.id);
                const field = e.target.closest('[data-field]').dataset.field || e.target.dataset.field;
                const value = e.target.value;
                
                const index = step6Data.paymentPolicies.findIndex(p => p.id === id);
                if (index !== -1) {
                    step6Data.paymentPolicies[index][field] = value;
                    saveState();
                    updatePolicyBadge('payment-policy-list', id, step6Data.paymentPolicies, index);
                }
            }
        });
    }

    // --- Cancellation Policy Handlers ---

    // Add Cancellation Policy
    const addCancellationBtn = document.getElementById('add-cancellation-policy');
    if (addCancellationBtn) {
        addCancellationBtn.addEventListener('click', () => {
            step6Data.cancellationPolicies.push({
                id: Date.now(),
                timing: 'Before Check in',
                days: '1',
                amount: '0%'
            });
            saveState();
            reRender();
        });
    }

    // Remove Cancellation Policy
    document.querySelectorAll('.remove-cancellation-policy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            step6Data.cancellationPolicies = step6Data.cancellationPolicies.filter(p => p.id !== id);
            saveState();
            reRender();
        });
    });

    // Update Cancellation Policy Fields
    const cancellationContainer = document.getElementById('cancellation-policy-list');
    if (cancellationContainer) {
        cancellationContainer.addEventListener('input', (e) => {
            if (e.target.matches('.fb-input')) {
                const id = parseInt(e.target.closest('[data-id]').dataset.id || e.target.dataset.id);
                const field = e.target.closest('[data-field]').dataset.field || e.target.dataset.field;
                const value = e.target.value;
                
                const index = step6Data.cancellationPolicies.findIndex(p => p.id === id);
                if (index !== -1) {
                    step6Data.cancellationPolicies[index][field] = value;
                    saveState();
                    updatePolicyBadge('cancellation-policy-list', id, step6Data.cancellationPolicies, index);
                }
            }
        });
    }
}
