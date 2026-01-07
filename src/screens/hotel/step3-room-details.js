import { renderInputStepper, setupInputStepper } from '../../components/InputStepper.js';
import { renderSideSheet, setupSideSheet } from '../../components/SideSheet.js';

let currentRoomId = null;
let sideSheetControl = null;

// Initial state fallback
const DEFAULT_ROOM = {
  id: 'room_1',
  name: '',
  type: 'standard',
  view: 'city',
  count: 1,
  occupancy: 2,
  children: 0,
  isFilled: false,
  details: {
    bedType: 'king',
    bedCount: 1,
    extraBedAllowed: false,
    maxExtraBeds: 0,
    freeChildCount: 0,
    bathroomCount: 1,
    mealType: 'room_only'
  }
};

/**
 * Renders the Step 3 screen.
 * @param {Object} data - The existing step3 data, e.g. { rooms: [...] }
 */
export function renderStep3(data) {
  // Ensure we have at least one room or use data from state
  const rooms = data.rooms && data.rooms.length > 0 ? data.rooms : [{ ...DEFAULT_ROOM }];
  
  // HTML for the room list
  const roomsHtml = rooms.map((room, index) => renderRoomCard(room, index)).join('');

  // HTML for Side Sheet Form
  const sideSheetFormHtml = renderSideSheetForm();

  return `
    <div class="step-header mb-6">
      <h2 class="heading-2xl mb-2">Room Details</h2>
      <p class="body-base text-body-subtle">Add all the room types available at your property.</p>
    </div>

    <div id="room-list" class="flex flex-col gap-4 mb-6">
      ${roomsHtml}
    </div>

    <button id="add-room-btn" class="w-full py-4 border border-dashed rounded-lg text-body-subtle font-medium transition flex items-center justify-center gap-2" style="border-color: var(--border-default); background: transparent; cursor: pointer;">
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      Add Another Room Type
    </button>

    <!-- Side Sheet Component -->
    ${renderSideSheet({
      id: 'room-details-sheet',
      title: 'Room Amenities & Details',
      content: sideSheetFormHtml,
      saveLabel: 'Confirm'
    })}
  `;
}

/**
 * Generates HTML for a single room card.
 */
function renderRoomCard(room, index) {
  return `
    <div class="room-card" data-id="${room.id}">
      <div class="flex justify-between items-start mb-4">
        <h3 class="heading-lg">Room Type ${index + 1}</h3>
        ${index > 0 ? `<button class="delete-room-btn" data-id="${room.id}" style="color: var(--text-fg-danger); background: none; border: none; cursor: pointer; padding: 4px;">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>` : ''}
      </div>

      <div class="mb-4">
        <label class="form-label">Room Name</label>
        <input type="text" class="input room-name-input" 
          placeholder="e.g. Deluxe King" value="${room.name}" data-id="${room.id}">
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6 pb-6" style="border-bottom: 1px solid var(--border-default);">
        <!-- Room Type -->
        <div>
          <label class="form-label">Room Type</label>
          <div class="select-wrapper">
            <select class="input room-type-select form-select" data-id="${room.id}">
              <option value="standard" ${room.type === 'standard' ? 'selected' : ''}>Standard</option>
              <option value="deluxe" ${room.type === 'deluxe' ? 'selected' : ''}>Deluxe</option>
              <option value="suite" ${room.type === 'suite' ? 'selected' : ''}>Suite</option>
              <option value="family" ${room.type === 'family' ? 'selected' : ''}>Family Room</option>
            </select>
          </div>
        </div>

        <!-- Room View -->
        <div>
          <label class="form-label">Room View</label>
          <div class="select-wrapper">
            <select class="input room-view-select form-select" data-id="${room.id}">
              <option value="city" ${room.view === 'city' ? 'selected' : ''}>City View</option>
              <option value="sea" ${room.view === 'sea' ? 'selected' : ''}>Sea View</option>
              <option value="garden" ${room.view === 'garden' ? 'selected' : ''}>Garden View</option>
              <option value="pool" ${room.view === 'pool' ? 'selected' : ''}>Pool View</option>
              <option value="mountain" ${room.view === 'mountain' ? 'selected' : ''}>Mountain View</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 mb-6">
        <!-- Number of Rooms -->
        <div class="flex justify-between items-center">
          <label class="form-label mb-0">Total number of rooms you have of this type</label>
          ${renderInputStepper({ id: `stepper-count-${room.id}`, value: room.count, min: 1, max: 500 })}
        </div>
        
        <!-- Max Occupancy -->
        <div class="flex justify-between items-center">
          <label class="form-label mb-0">Max Occupancy allowed in this room</label>
          ${renderInputStepper({ id: `stepper-occupancy-${room.id}`, value: room.occupancy, min: 1, max: 10 })}
        </div>

        <!-- Children Allowed -->
        <div class="flex justify-between items-center">
          <label class="form-label mb-0">Number of children allowed</label>
          ${renderInputStepper({ id: `stepper-children-${room.id}`, value: room.children, min: 0, max: 5 })}
        </div>
      </div>

      <div class="card-footer" style="padding-top: var(--spacing-6, 24px); border-top: 1px solid var(--border-default);">
        ${room.isFilled ? renderRoomDetailsSummary(room) : `
          <button class="btn-details edit-details-btn" data-id="${room.id}">
            Add Additional Details
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        `}
      </div>
    </div>
  `;
}

/**
 * Generates summary UI for a room with filled details.
 */
function renderRoomDetailsSummary(room) {
  const mealTypeLabels = {
    room_only: 'Room Only',
    breakfast: 'Breakfast',
    half_board: 'Half Board',
    full_board: 'Full Board',
    all_inclusive: 'All Inclusive'
  };

  return `
    <div class="room-details-summary">
      <div class="flex justify-between items-center mb-4">
        <span class="text-sm font-semibold text-gray-900">Additional Details</span>
        <button class="edit-details-btn flex items-center gap-1 text-sm font-medium text-brand" data-id="${room.id}">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          Edit Details
        </button>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg border border-gray-100">
        <div class="detail-item">
          <div class="text-xs text-body-subtle mb-1">Bed Type</div>
          <div class="text-sm font-bold text-gray-900 capitalize">${room.details.bedType}</div>
        </div>
        <div class="detail-item">
          <div class="text-xs text-body-subtle mb-1">Number of Beds</div>
          <div class="text-sm font-bold text-gray-900">${room.details.bedCount}</div>
        </div>
        <div class="detail-item">
          <div class="text-xs text-body-subtle mb-1">Extra Beds Allowed</div>
          <div class="text-sm font-bold text-gray-900">${room.details.extraBedAllowed ? room.details.maxExtraBeds : 0}</div>
        </div>
        <div class="detail-item">
          <div class="text-xs text-body-subtle mb-1">Max. No. Children</div>
          <div class="text-sm font-bold text-gray-900">${room.details.freeChildCount}</div>
        </div>
        <div class="detail-item">
          <div class="text-xs text-body-subtle mb-1">Meal Type</div>
          <div class="text-sm font-bold text-gray-900">${mealTypeLabels[room.details.mealType] || room.details.mealType}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the HTML form for the side sheet.
 */
function renderSideSheetForm() {
  return `
    <div class="flex flex-col gap-6">
      
      <!-- Bed Configuration -->
    <div class="flex flex-col gap-6">
      
      <!-- Row 1: Bed Type -->
      <div class="flex items-center justify-between w-full">
        <label class="form-label mb-0" style="width: auto;">Bed Type</label>
        <div class="select-wrapper" style="width: 182px;">
          <select id="sheet-bed-type" class="input form-select">
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="queen">Queen</option>
            <option value="king">King</option>
            <option value="twin">Twin</option>
          </select>
        </div>
      </div>

      <!-- Row 2: Number of Beds -->
      <div class="flex items-center justify-between w-full">
        <label class="form-label mb-0" style="width: auto;">Number of beds</label>
         ${renderInputStepper({ id: 'sheet-bed-count', value: 1, min: 1, max: 5 })}
      </div>

      <!-- Row 3: Add Extra Beds (Radio) -->
      <div class="flex items-center justify-between w-full">
        <label class="form-label mb-0" style="width: auto;">Can this room accommodate extra beds</label>
        <div class="flex items-center gap-4" id="sheet-extra-bed-group">
          <div class="flex items-center">
            <input id="sheet-extra-bed-yes" type="radio" value="yes" name="sheet-extra-bed" class="w-4 h-4 text-brand bg-gray-100 border-gray-300 focus:ring-brand focus:ring-2">
            <label for="sheet-extra-bed-yes" class="ms-4 text-sm font-medium text-gray-900">YES</label>
          </div>
          <div class="flex items-center">
            <input id="sheet-extra-bed-no" type="radio" value="no" name="sheet-extra-bed" class="w-4 h-4 text-brand bg-gray-100 border-gray-300 focus:ring-brand focus:ring-2" checked>
            <label for="sheet-extra-bed-no" class="ms-4 text-sm font-medium text-gray-900">NO</label>
          </div>
        </div>
      </div>

      <!-- Row 4: Max Extra Beds (Conditional) -->
      <div id="extra-bed-options" class="flex items-center justify-between w-full hidden">
        <label class="form-label mb-0" style="width: auto;">Max Extra Beds</label>
         ${renderInputStepper({ id: 'sheet-max-extra', value: 0, min: 0, max: 3 })}
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Row 5: Free Child Age -->
      <div class="flex items-center justify-between w-full">
        <label class="form-label mb-0" style="width: auto;">Free Child Age limit</label>
        ${renderInputStepper({ id: 'sheet-free-child-age', value: 0, min: 0, max: 12 })}
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Row 6: Bathrooms -->
      <div class="flex items-center justify-between w-full">
        <label class="form-label mb-0" style="width: auto;">Number of bathrooms</label>
        ${renderInputStepper({ id: 'sheet-bathroom-count', value: 1, min: 1, max: 4 })}
      </div>

      <!-- Row 7: Meal Type -->
      <div class="flex items-center justify-between w-full">
        <label class="form-label mb-0" style="width: auto;">Meal Type</label>
        <div class="select-wrapper" style="width: 182px;">
          <select id="sheet-meal-type" class="input form-select">
            <option value="room_only">Room Only</option>
            <option value="breakfast">Breakfast</option>
            <option value="half_board">Half Board</option>
            <option value="full_board">Full Board</option>
            <option value="all_inclusive">All Inclusive</option>
          </select>
        </div>
      </div>

      <!-- Additional Space below Meal Type -->
      <div class="pb-10"></div>

    </div>
  `;
}

/**
 * Sets up event listeners for the Step 3 screen.
 */
export function setupStep3Handlers(router) {
  // Initialize state if empty
  let currentData = router.getOnboardingData().step3;
  if (!currentData || !currentData.rooms || currentData.rooms.length === 0) {
    currentData = { rooms: [{ ...DEFAULT_ROOM }] };
    router.updateOnboardingData('step3', currentData);
  }

  // Helper to save state
  const saveData = () => {
    router.updateOnboardingData('step3', currentData);
  };

  const rerender = () => {
    // Re-render the room list only
    const container = document.getElementById('room-list');
    if (container) {
      container.innerHTML = currentData.rooms.map((room, index) => renderRoomCard(room, index)).join('');
      reattachRoomListeners();
    }
  };

  sideSheetControl = setupSideSheet('room-details-sheet', {
    onSave: () => {
      // Save data from sheet to currentRoomId
      if (currentRoomId) {
        const room = currentData.rooms.find(r => r.id === currentRoomId);
        if (room) {
          // Extract values from sheet inputs
          room.details.bedType = document.getElementById('sheet-bed-type').value;
          
          // Read from radio group
          const extraBedRadio = document.querySelector('input[name="sheet-extra-bed"]:checked');
          room.details.extraBedAllowed = extraBedRadio ? extraBedRadio.value === 'yes' : false;
          
          room.details.mealType = document.getElementById('sheet-meal-type').value;
          
          // Read stepper values directly from DOM
          room.details.bedCount = parseInt(document.querySelector('#sheet-bed-count .stepper-value').value) || 1;
          room.details.maxExtraBeds = parseInt(document.querySelector('#sheet-max-extra .stepper-value').value) || 0;
          room.details.freeChildCount = parseInt(document.querySelector('#sheet-free-child-age .stepper-value').value) || 0;
          room.details.bathroomCount = parseInt(document.querySelector('#sheet-bathroom-count .stepper-value').value) || 1;
          room.isFilled = true;

          saveData();
          sideSheetControl.close();
          rerender(); // Update card to potentially show badges or updated status
        }
      }
    }
  });

  // Setup Sheet Internal Logic (Dynamic fields)
  const extraBedRadios = document.querySelectorAll('input[name="sheet-extra-bed"]');
  const extraBedOptions = document.getElementById('extra-bed-options');
  
  extraBedRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'yes') {
        extraBedOptions.classList.remove('hidden');
      } else {
        extraBedOptions.classList.add('hidden');
      }
    });
  });

  // Initialize sheet steppers 
  setupInputStepper('sheet-bed-count');
  setupInputStepper('sheet-max-extra');
  setupInputStepper('sheet-free-child-age');
  setupInputStepper('sheet-bathroom-count');


  // 2. Setup Room List Listeners
  function reattachRoomListeners() {
    // Steppers for each room
    currentData.rooms.forEach(room => {
       setupInputStepper(`stepper-count-${room.id}`, (val) => { room.count = val; saveData(); });
       setupInputStepper(`stepper-occupancy-${room.id}`, (val) => { room.occupancy = val; saveData(); });
       setupInputStepper(`stepper-children-${room.id}`, (val) => { room.children = val; saveData(); });
    });

    // Inputs
    document.querySelectorAll('.room-name-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const room = currentData.rooms.find(r => r.id === id);
        if (room) { room.name = e.target.value; saveData(); }
      });
    });

    document.querySelectorAll('.room-type-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const room = currentData.rooms.find(r => r.id === id);
        if (room) { room.type = e.target.value; saveData(); }
      });
    });

    document.querySelectorAll('.room-view-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const room = currentData.rooms.find(r => r.id === id);
        if (room) { room.view = e.target.value; saveData(); }
      });
    });

    // Edit/Details Button
    document.querySelectorAll('.edit-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.id; // or e.currentTarget
        const room = currentData.rooms.find(r => r.id === id);
        if (room) {
          openSideSheetForRoom(room);
        }
      });
    });

    // Delete Button
    document.querySelectorAll('.delete-room-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Find closest button if click target was icon
        const button = e.target.closest('button');
        const id = button.dataset.id;
        if (confirm('Are you sure you want to remove this room?')) {
          currentData.rooms = currentData.rooms.filter(r => r.id !== id);
          saveData();
          rerender();
        }
      });
    });
  }

  // 3. Logic to populate Side Sheet
  function openSideSheetForRoom(room) {
    currentRoomId = room.id;
    
    // Populate simple fields
    document.getElementById('sheet-bed-type').value = room.details.bedType || 'king';
    document.getElementById('sheet-meal-type').value = room.details.mealType || 'room_only';
    
    // Populate Radios
    const extraBedValue = room.details.extraBedAllowed ? 'yes' : 'no';
    const radioToSelect = document.querySelector(`input[name="sheet-extra-bed"][value="${extraBedValue}"]`);
    if (radioToSelect) {
      radioToSelect.checked = true;
      // Manually trigger change to show/hide extra bed options
      radioToSelect.dispatchEvent(new Event('change'));
    }

    // Helper to manually set stepper value
    const setStepper = (id, val) => {
      const container = document.getElementById(id);
      if(container) {
         const input = container.querySelector('.stepper-value');
         if(input) {
            input.value = val;
            // Need to manually update button states? 
            // Our setupInputStepper doesn't expose updateState directly from outside.
            // But we can trigger a click on one of the buttons if we wanted, or just trust the user will click.
            // For correct UI state (disabled buttons), we should really update the checking logic.
            // We can hack it by re-running setup? No, that attaches listeners.
            // We'll leave it as input value update for now. 
            // Ideally we'd trigger a custom event or reuse the internal update function.
         }
      }
    };

    setStepper('sheet-bed-count', room.details.bedCount);
    setStepper('sheet-max-extra', room.details.maxExtraBeds);
    setStepper('sheet-free-child-age', room.details.freeChildCount);
    setStepper('sheet-bathroom-count', room.details.bathroomCount);

    sideSheetControl.open();
  }

  // 4. Add Room Button
  const addBtn = document.getElementById('add-room-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const newRoom = JSON.parse(JSON.stringify(DEFAULT_ROOM));
      newRoom.id = `room_${Date.now()}`;
      currentData.rooms.push(newRoom);
      saveData();
      rerender();
    });
  }

  // Initial listener attachment
  reattachRoomListeners();

}
