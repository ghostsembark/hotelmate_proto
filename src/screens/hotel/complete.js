import { renderButton } from '../../components/flowbite/Button.js';

export function renderCompleteScreen(user) {
    return `
    <div class="legacy-min-h-screen legacy-bg-white legacy-relative legacy-overflow-hidden legacy-flex legacy-flex-col">
        <!-- Header / Logo -->
        <div class="px-8 py-6">
             <span class="font-serif italic text-2xl text-brand font-bold tracking-tighter">hm</span>
        </div>

        <!-- Main Content -->
        <div class="flex-1 legacy-flex legacy-flex-col legacy-items-center legacy-justify-center -mt-20 legacy-px-4 legacy-relative z-10 animate-fade-in">
            <div class="max-w-[800px] legacy-w-full legacy-text-center legacy-flex legacy-flex-col legacy-items-center">
                
                <!-- Success Icon -->
                <div class="legacy-mb-6 legacy-flex legacy-justify-center">
                    <div class="legacy-rounded-full legacy-bg-white text-brand p-2">
                         <svg width="84" height="84" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="38" stroke="#0E7490" stroke-width="4"/>
                            <path d="M24 40L36 52L56 28" stroke="#0E7490" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <!-- Text Group -->
                <div class="legacy-flex legacy-flex-col legacy-items-center legacy-gap-3 legacy-w-full legacy-mb-10">
                    <h1 class="text-lg font-semibold text-heading">
                        Your hotel is live on HotelMate <span class="align-middle">🎉</span>
                    </h1>
                    
                    <p class="text-sm font-normal text-body-subtle leading-relaxed">
                        You've successfully completed the essential setup.<br>
                        Your hotel can now be discovered by tour operators.
                    </p>
                </div>

                <!-- Divider -->
                <div class="border-t border-gray-200 legacy-w-full legacy-mb-10"></div>

                <!-- Next Steps Section -->
                <div class="legacy-w-full max-w-lg">
                    <p class="text-xs font-semibold text-body-subtle mb-3">Next Step</p>
                    <p class="text-sm font-normal text-heading legacy-mb-8">
                        To start receiving contracts, bookings, and payments, complete a<br>
                        few recommended steps below.
                    </p>
                    
                    <div class="legacy-flex legacy-flex-col sm:flex-row legacy-gap-4 legacy-justify-center">
                        ${renderButton({
                          id: 'btn-business-ready',
                          label: 'Get Business Ready',
                          color: 'brand',
                          size: 'lg',
                          rightIconSvg: true,
                          extraClass: 'px-8 py-3 legacy-min-w-200'
                        })}
                        
                        ${renderButton({
                          id: 'btn-dashboard',
                          label: 'To Dashboard',
                          color: 'secondary',
                          size: 'lg',
                          rightIconSvg: true,
                          extraClass: 'px-8 py-3 legacy-min-w-200'
                        })}
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative Background Illustration (Bottom Right) -->
        <div class="legacy-absolute bottom-0 legacy-right-0 w-[400px] h-[300px] opacity-80 pointer-events-none legacy-hidden md:block">
            <!-- Placeholder for the travel illustration (Passport, Compass, Backpack) -->
             <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="legacy-w-full legacy-h-full text-gray-100">
                <path d="M0 300C50 300 100 250 150 250C250 250 300 100 400 50V300H0Z" fill="#F3F4F6"/>
                <!-- Simple outline sketches representing the illustration concept -->
                <circle cx="280" cy="200" r="40" stroke="#CBD5E1" stroke-width="2" fill="white"/>
                <path d="M280 170L280 230" stroke="#CBD5E1" stroke-width="2"/>
                <path d="M250 200L310 200" stroke="#CBD5E1" stroke-width="2"/>
                <rect x="180" y="220" width="60" height="80" rx="4" stroke="#CBD5E1" stroke-width="2" fill="white" transform="rotate(-15 180 220)"/>
                <path d="M190 230L230 230M190 240L230 240M190 250L230 250" stroke="#CBD5E1" stroke-width="1" transform="rotate(-15 180 220)"/>
            </svg>
        </div>
    </div>
    `;
}

export function setupCompleteHandlers(router) {
    document.getElementById('btn-dashboard')?.addEventListener('click', () => {
        router.navigate('/hotel/dashboard');
    });
    
    document.getElementById('btn-business-ready')?.addEventListener('click', () => {
        alert('Starting Business Readiness Flow (Not implemented in prototype)');
    });
}
