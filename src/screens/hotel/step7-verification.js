

export function renderStep7(data) {
    const noGst = data.noGst || false;
    
    return `
    <div class="step-content animate-fade-in">
        <div class="step-header mb-8">
            <h2 class="heading-2xl mb-2">Verification</h2>
            <p class="body-base text-body-subtle">Verify your property to start accepting bookings.</p>
        </div>
        
        <div class="w-full">
            <div class="card p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <!-- No GST Checkbox -->
                <div class="mb-6">
                    <label class="flex items-center gap-3 cursor-pointer group select-none">
                        <input type="checkbox" id="no-gst-checkbox" class="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand cursor-pointer" ${noGst ? 'checked' : ''}>
                        <span class="text-sm font-medium text-heading group-hover:text-brand transition-colors">I don't have a GST Number</span>
                    </label>
                </div>

                <!-- GST Section (Hidden if No GST is checked) -->
                <div id="gst-section" class="${noGst ? 'hidden' : 'block'} transition-all duration-300 ease-in-out">
                        <!-- GST Input -->
                        <div class="mb-6">
                        <label class="block label-base mb-2">GST Number</label>
                        <input type="text" id="gst-number" class="input w-full" placeholder="Enter GST Number" value="${data.gstNumber || ''}">
                        </div>
                        
                        <!-- File Upload -->
                        <div class="mb-2">
                        <label class="block label-base mb-2">Upload GST Certificate</label>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative" id="upload-area">
                            <div class="flex flex-col items-center pointer-events-none">
                                <svg class="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="text-sm text-gray-600 mb-1 font-medium">Click to upload or drag and drop</p>
                                <p class="text-xs text-gray-500">SVG, PNG, JPG or PDF (max. 800x400px)</p>
                            </div>
                            <input type="file" id="gst-file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.png,.jpg,.jpeg">
                        </div>
                        </div>
                        
                        <!-- File Preview -->
                        <div id="file-preview" class="mt-4 ${data.gstFileName ? '' : 'hidden'}">
                        <div class="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                            <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span class="text-sm font-medium text-gray-700 truncate flex-1" id="file-name-display">${data.gstFileName || ''}</span>
                            <button type="button" id="remove-file" class="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50" title="Remove file">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function setupStep7Handlers(router) {
    const defaultData = {
        noGst: false,
        gstNumber: '',
        gstFileName: null // In a real app we'd store the file object or a URL, here just the name for mock
    };

    let step7Data = router.getOnboardingData().step7 || defaultData;

    const saveState = () => {
        router.updateOnboardingData('step7', step7Data);
    };

    const reRender = () => {
         const container = document.getElementById('onboarding-step-container');
         if(container){
             container.innerHTML = renderStep7(step7Data);
             setupStep7Handlers(router);
         }
    };

    // Checkbox Handler
    const noGstCheckbox = document.getElementById('no-gst-checkbox');
    const gstSection = document.getElementById('gst-section');
    
    if (noGstCheckbox) {
        noGstCheckbox.addEventListener('change', (e) => {
            step7Data.noGst = e.target.checked;
            // Clear GST data if checked
            if(step7Data.noGst) {
                 step7Data.gstNumber = '';
                 step7Data.gstFileName = null;
            }
            saveState();
            reRender();
        });
    }

    // Input Handler
    const gstInput = document.getElementById('gst-number');
    if (gstInput) {
        gstInput.addEventListener('input', (e) => {
            step7Data.gstNumber = e.target.value;
            saveState();
        });
    }

    // File Upload Handler
    const fileInput = document.getElementById('gst-file');
    const uploadArea = document.getElementById('upload-area');
    
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                step7Data.gstFileName = e.target.files[0].name;
                saveState();
                reRender();
            }
        });
    }

    // Remove File Handler
    const removeFileBtn = document.getElementById('remove-file');
    if (removeFileBtn) {
        removeFileBtn.addEventListener('click', () => {
            step7Data.gstFileName = null;
            // Clear input value so same file can be selected again
            const fInput = document.getElementById('gst-file');
            if(fInput) fInput.value = '';
            
            saveState();
            reRender();
        });
    }
}
