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
                <div>
                    <label for="check-in-time" class="form-label">Check-in Time</label>
                    <div class="select-wrapper legacy-relative">
                        <select id="check-in-time" class="form-select">
                            <option value="" disabled ${!checkInTime ? 'selected' : ''}>Select</option>
                            ${TIME_OPTIONS.map(time => `<option value="${time}" ${checkInTime === time ? 'selected' : ''}>${time}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div>
                    <label for="check-out-time" class="form-label">Check-out Time</label>
                    <div class="select-wrapper legacy-relative">
                        <select id="check-out-time" class="form-select">
                            <option value="" disabled ${!checkOutTime ? 'selected' : ''}>Select</option>
                            ${TIME_OPTIONS.map(time => `<option value="${time}" ${checkOutTime === time ? 'selected' : ''}>${time}</option>`).join('')}
                        </select>
                    </div>
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
                
                 <button id="add-payment-policy" type="button" class="btn bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 legacy-rounded-lg legacy-flex legacy-items-center legacy-gap-2 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    Add Stage
                </button>
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

                <button id="add-cancellation-policy" type="button" class="btn bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 legacy-rounded-lg legacy-flex legacy-items-center legacy-gap-2 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    Add Policy
                </button>
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
            <span class="policy-badge bg-cyan-50 text-xs font-medium p-1 legacy-rounded legacy-border border-cyan-100" style="color: var(--text-fg-brand-strong);" data-id="${policy.id}">
                Policy ${index + 1} | ${policy.amount} ${policy.timing}
            </span>
        </div>
        <div class="legacy-flex flex-row legacy-gap-4 items-end">
            <div class="w-[45%]">
                <label class="form-label text-xs">When should this be collected</label>
                <div class="select-wrapper legacy-relative">
                    <select class="policy-timing form-select" data-id="${policy.id}" data-field="timing">
                        <option value="Before check-in" ${policy.timing === 'Before check-in' ? 'selected' : ''}>Before check-in</option>
                        <option value="After check-in" ${policy.timing === 'After check-in' ? 'selected' : ''}>After check-in</option>
                        <option value="On booking" ${policy.timing === 'On booking' ? 'selected' : ''}>On booking</option>
                    </select>
                </div>
            </div>
            <div class="w-[22%]">
                <label class="form-label text-xs">Days</label>
                <input type="number" value="${policy.days}" class="policy-days form-input" placeholder="1" data-id="${policy.id}" data-field="days">
            </div>
            <div class="w-[22%]">
                <label class="form-label text-xs">Show much should be collected</label>
                <input type="text" value="${policy.amount}" class="policy-amount form-input" placeholder="50%" data-id="${policy.id}" data-field="amount">
            </div>
             <div class="w-[6%] legacy-flex justify-end pb-2">
                <button type="button" class="remove-payment-policy text-gray-400 hover:text-red-600 transition-colors p-2 legacy-rounded-full hover:bg-gray-100" data-id="${policy.id}" title="Remove policy">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
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
             <span class="policy-badge bg-cyan-50 text-xs font-medium p-1 legacy-rounded legacy-border border-cyan-100" style="color: var(--text-fg-brand-strong);" data-id="${policy.id}">
                Policy ${index + 1} | ${policy.amount} ${policy.timing}
            </span>
        </div>
         <div class="legacy-flex flex-row legacy-gap-4 items-end">
            <div class="w-[45%]">
                <label class="form-label text-xs">When can guest cancel it</label>
                 <div class="select-wrapper legacy-relative">
                     <select class="cancellation-timing form-select" data-id="${policy.id}" data-field="timing">
                        <option value="Before Check in" ${policy.timing === 'Before Check in' ? 'selected' : ''}>Before Check in</option>
                         <option value="After Booking" ${policy.timing === 'After Booking' ? 'selected' : ''}>After Booking</option>
                    </select>
                </div>
            </div>
            <div class="w-[22%]">
                <label class="form-label text-xs">Days</label>
                <input type="number" value="${policy.days}" class="cancellation-days form-input" placeholder="1" data-id="${policy.id}" data-field="days">
            </div>
            <div class="w-[22%]">
                <label class="form-label text-xs">How much should be charged</label>
                <input type="text" value="${policy.amount}" class="cancellation-amount form-input" placeholder="10%" data-id="${policy.id}" data-field="amount">
            </div>
             <div class="w-[6%] legacy-flex justify-end pb-2">
                <button type="button" class="remove-cancellation-policy text-gray-400 hover:text-red-600 transition-colors p-2 legacy-rounded-full hover:bg-gray-100" data-id="${policy.id}" title="Remove policy">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
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
            badge.textContent = `Policy ${index + 1} | ${policy.amount} ${policy.timing}`;
        }
    };

    // Check-in/out handlers
    const checkInSelect = document.getElementById('check-in-time');
    const checkOutSelect = document.getElementById('check-out-time');

    if (checkInSelect) {
        checkInSelect.addEventListener('change', (e) => {
            step6Data.checkInTime = e.target.value;
            saveState();
        });
    }

    if (checkOutSelect) {
        checkOutSelect.addEventListener('change', (e) => {
            step6Data.checkOutTime = e.target.value;
            saveState();
        });
    }

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
            if (e.target.matches('input') || e.target.matches('select')) {
                const id = parseInt(e.target.dataset.id);
                const field = e.target.dataset.field;
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
            if (e.target.matches('input') || e.target.matches('select')) {
                const id = parseInt(e.target.dataset.id);
                const field = e.target.dataset.field;
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
