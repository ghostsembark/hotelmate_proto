/**
 * Hotel Onboarding - Step 5: Photos
 * Matches Figma Node 29:2018 (Initial) and 29:2183 (Uploaded)
 */

const PROPERTY_TAGS = ['Facade', 'Playground', 'Swimming Pool', 'Restaurant', 'Lobby', 'Lounge', 'Bar'];
const ROOM_TAGS = ['Bathroom', 'Bed', 'Balcony'];

export function renderStep5(data = {}, rooms = []) {
    const propertyPhotos = data.propertyPhotos || [];
    const roomPhotos = data.roomPhotos || {}; // { roomId: [{url, tag}] }

    return `
    <div class="step-content animate-fade-in" data-node-id="29:2018">
      <div class="step-header" data-node-id="29:2169">
        <h2 class="step-title">Photos</h2>
        <p class="step-description">Add atleast 10 photos</p>
      </div>

      <!-- Hidden file inputs -->
      <input type="file" id="property-file-input" accept="image/*" multiple style="display: none;">
      ${rooms.map(room => `<input type="file" id="room-file-input-${room.id}" accept="image/*" multiple style="display: none;" data-room-id="${room.id}">`).join('')}

      <!-- Property Photos Section -->
      <div class="mb-10" data-node-id="29:2169">
        <div class="flex flex-col gap-6 mb-6">
          <div class="flex flex-col gap-1.5">
            <h3 class="text-base font-semibold text-heading">Property Photos</h3>
            <p class="text-sm font-normal text-body">Showcase your property with high-quality photos to attract bookings</p>
          </div>
          
          ${propertyPhotos.length === 0 ? `
            <button id="upload-property-photo" class="btn btn-secondary w-fit flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              Upload Photos
            </button>
          ` : ''}
        </div>
        
        <div id="property-photo-grid" class="grid grid-cols-4 gap-6 mb-6">
          ${propertyPhotos.map((photo, idx) => renderPhotoCard(photo, idx, 'property', PROPERTY_TAGS)).join('')}
        </div>
        
        ${propertyPhotos.length > 0 ? `
          <button id="upload-property-photo" class="btn btn-secondary w-fit flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            Upload Photos
          </button>
        ` : ''}
      </div>

      <!-- Room Photos Section -->
      <div data-node-id="29:2442">
        <div class="flex flex-col gap-6 mb-10">
          <div class="flex flex-col gap-1.5">
            <h3 class="text-base font-semibold text-heading">Room Photos</h3>
            <p class="text-sm font-normal text-body">Upload photos of your rooms to give guests a clear idea of what to expect</p>
          </div>

          ${rooms.length > 0 ? rooms.map(room => {
            const photos = roomPhotos[room.id] || [];
            return `
              <div class="room-photo-subsection flex flex-col gap-6" data-room-id="${room.id}">
                <h4 class="text-base font-semibold text-heading">Room Type ${room.id || room.name || room.type}</h4>
                
                ${photos.length === 0 ? `
                  <button class="btn btn-secondary w-fit upload-room-photo flex items-center gap-1.5" data-room-id="${room.id}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    Upload Photos
                  </button>
                ` : ''}
                
                ${photos.length > 0 ? `
                  <div class="grid grid-cols-4 gap-6 mb-6" id="grid-${room.id}">
                    ${photos.map((photo, idx) => renderPhotoCard(photo, idx, room.id, ROOM_TAGS)).join('')}
                  </div>
                  <button class="btn btn-secondary w-fit upload-room-photo flex items-center gap-1.5" data-room-id="${room.id}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    Upload Photos
                  </button>
                ` : ''}
              </div>
            `;
          }).join('') : ''}

          <!-- Flowbite Alert - Moved to bottom of Room Photos -->
          <div id="alert-photos" class="flex items-center p-4 text-cyan-800 rounded-lg bg-cyan-50 border border-cyan-100" role="alert" data-node-id="29:2452">
            <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
            </svg>
            <div class="ms-3 text-sm font-medium">
              You can upload the photos of room later
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}

function renderPhotoCard(photo, index, type, tags) {
    return `
    <div class="photo-card relative group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm transition-all hover:shadow-md">
       <div class="aspect-video relative overflow-hidden bg-gray-100">
         <img src="${photo.url}" class="w-full h-full object-cover" alt="Uploaded photo">
         <button class="remove-photo absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-gray-50" 
                 data-type="${type}" data-index="${index}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
         </button>
       </div>
       <div class="p-3">
         <div class="relative">
           <select class="tag-select w-full bg-white border border-gray-200 text-sm rounded-lg focus:ring-brand focus:border-brand p-2 pr-8 appearance-none cursor-pointer ${!photo.tag ? 'text-brand' : 'text-gray-700'}" 
                   data-type="${type}" data-index="${index}">
             <option value="" ${!photo.tag ? 'selected' : ''}>Select Tag</option>
             ${tags.map(tag => `<option value="${tag}" ${photo.tag === tag ? 'selected' : ''}>${tag}</option>`).join('')}
           </select>
           <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
           </div>
         </div>
       </div>
    </div>
    `;
}

export function setupStep5Handlers(router) {
    const state = router.getOnboardingData().step5 || { propertyPhotos: [], roomPhotos: {} };
    const rooms = router.getOnboardingData().step3?.rooms || [];

    const saveAndRerender = () => {
        console.log('🟣 saveAndRerender called');
        console.log('🟣 Current state:', JSON.stringify(state, null, 2));
        router.updateOnboardingData('step5', state);
        const container = document.getElementById('onboarding-step-container');
        console.log('🟣 Container found:', !!container);
        if (container) {
            console.log('🟣 Re-rendering with', state.propertyPhotos.length, 'property photos');
            container.innerHTML = renderStep5(state, rooms);
            setupStep5Handlers(router); // Re-attach listeners
            console.log('🟣 Re-render complete');
        }
    };

    // Helper function to read files and convert to data URLs
    const readFiles = (files, callback) => {
        console.log('🟢 readFiles called with', files.length, 'files');
        const fileArray = Array.from(files);
        
        // Handle empty file array
        if (fileArray.length === 0) {
            console.log('🟢 Empty file array, returning');
            callback([]);
            return;
        }
        
        let processedCount = 0;
        const dataUrls = [];

        fileArray.forEach((file, index) => {
            console.log('🟢 Processing file:', file.name, file.type);
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    console.log('🟢 File loaded:', file.name);
                    dataUrls[index] = e.target.result;
                    processedCount++;
                    console.log('🟢 Processed', processedCount, 'of', fileArray.length);
                    if (processedCount === fileArray.length) {
                        console.log('🟢 All files processed, calling callback with', dataUrls.filter(url => url).length, 'URLs');
                        callback(dataUrls.filter(url => url)); // Filter out any undefined
                    }
                };
                reader.onerror = () => {
                    console.error('🔴 Error reading file:', file.name);
                    processedCount++;
                    if (processedCount === fileArray.length) {
                        callback(dataUrls.filter(url => url));
                    }
                };
                reader.readAsDataURL(file);
            } else {
                console.log('🟡 Skipping non-image file:', file.type);
                processedCount++;
                if (processedCount === fileArray.length) {
                    callback(dataUrls.filter(url => url));
                }
            }
        });
    };

    // Property Upload - use querySelectorAll since button can appear in multiple places
    const propUploadBtns = document.querySelectorAll('#upload-property-photo');
    const propFileInput = document.getElementById('property-file-input');
    
    if (propFileInput) {
        // Attach click handler to all upload buttons
        propUploadBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                propFileInput.click();
            });
        });

        // Single change handler for file input
        propFileInput.addEventListener('change', (e) => {
            console.log('🔵 Change event fired!');
            const files = e.target.files;
            console.log('🔵 Files selected:', files.length);
            if (files.length > 0) {
                console.log('🔵 Calling readFiles...');
                readFiles(files, (dataUrls) => {
                    console.log('🔵 readFiles callback received:', dataUrls.length, 'URLs');
                    dataUrls.forEach(url => {
                        console.log('🔵 Adding photo to state');
                        state.propertyPhotos.push({ url, tag: '' });
                    });
                    console.log('🔵 Current propertyPhotos count:', state.propertyPhotos.length);
                    // Reset file input so same file can be selected again
                    propFileInput.value = '';
                    console.log('🔵 Calling saveAndRerender...');
                    saveAndRerender();
                });
            }
        });
    }

    // Room Upload
    document.querySelectorAll('.upload-room-photo').forEach(btn => {
        const roomId = btn.dataset.roomId;
        const roomFileInput = document.getElementById(`room-file-input-${roomId}`);
        
        if (roomFileInput) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                roomFileInput.click();
            });

            roomFileInput.addEventListener('change', (e) => {
                const files = e.target.files;
                if (files.length > 0) {
                    readFiles(files, (dataUrls) => {
                        if (!state.roomPhotos[roomId]) state.roomPhotos[roomId] = [];
                        dataUrls.forEach(url => {
                            state.roomPhotos[roomId].push({ url, tag: '' });
                        });
                        // Reset file input
                        roomFileInput.value = '';
                        saveAndRerender();
                    });
                }
            });
        }
    });

    // Remove logic
    document.querySelectorAll('.remove-photo').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const index = parseInt(btn.dataset.index);
            if (type === 'property') {
                state.propertyPhotos.splice(index, 1);
            } else {
                state.roomPhotos[type].splice(index, 1);
            }
            saveAndRerender();
        });
    });

    // Tag assignment
    document.querySelectorAll('.tag-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const type = select.dataset.type;
            const index = parseInt(select.dataset.index);
            const tag = e.target.value;
            if (type === 'property') {
                state.propertyPhotos[index].tag = tag;
            } else {
                state.roomPhotos[type][index].tag = tag;
            }
            // Update select color based on selection
            if (tag) {
                select.classList.remove('text-brand');
                select.classList.add('text-gray-700');
            } else {
                select.classList.remove('text-gray-700');
                select.classList.add('text-brand');
            }
            router.updateOnboardingData('step5', state);
        });
    });
}
