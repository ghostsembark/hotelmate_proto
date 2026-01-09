/**
 * Hotel Dashboard Screen
 * Implements Figma design for nodes 451:7247, 451:7296, 451:7297
 * Theme: Enterprise (data-theme="enterprise")
 */

import { renderBadge } from '../../components/flowbite/Badge.js';


// Asset URLs from Figma (localhost dev server)
const ASSETS = {
    hotelmateLogo: 'http://localhost:3845/assets/849d3bd7893a340af70e0c20c94df2118bf659ef.svg',
    bellIcon: 'http://localhost:3845/assets/1e0e4a18964f028810335b88a3c1f0cbb52040e0.svg',
    avatar: 'http://localhost:3845/assets/9afa40e67f9adfb6486c67063d80474f4d89a506.png',
    homeIcon: 'http://localhost:3845/assets/b610b976f429a9d922bb7c211552ee126dd32d19.svg',
    bookingsIcon: 'http://localhost:3845/assets/1e0e4a18964f028810335b88a3c1f0cbb52040e0.svg',
    rateCardIcon: 'http://localhost:3845/assets/5afcda6a392c51d84e83715304d0e29d494c9d4f.svg',
    contractsIcon: 'http://localhost:3845/assets/4a1178eebeaca7d18aac9252b1e0b102c52f94ab.svg',
    settingsIcon: 'http://localhost:3845/assets/3a82e94dc5c455e15df1d6104670461bae9cec3b.svg',
    chartBar: 'http://localhost:3845/assets/b610b976f429a9d922bb7c211552ee126dd32d19.svg',
    chartLine: 'http://localhost:3845/assets/fb7c2bbb158d00ded780f5557780326e4b9eaa99.svg',
    bellRing: 'http://localhost:3845/assets/1729767278a55e28b2aaa1bfe1158d7444e18db7.svg',
    buildingIcon: 'http://localhost:3845/assets/b667b6c0035530bf3f5f76884da68b31292fbb9c.svg',
    editIcon: 'http://localhost:3845/assets/2c833c2399fa5c197a1d9f32298d9cb45bdd94af.svg',
};

export function renderHotelDashboard() {
    return `
    <div data-theme="enterprise" class="min-h-screen bg-[#F7F9FA] font-['Inter',sans-serif]">
        
        <!-- ============================================== -->
        <!-- TOP HEADER (Figma 451:7247) -->
        <!-- ============================================== -->
        <header class="bg-[#1D6A7C] text-white">
            <div class="max-w-[1440px] mx-auto px-6 h-[56px] flex items-center justify-between">
                
                <!-- Left: Logo + Property Switcher -->
                <div class="flex items-center gap-6">
                    <!-- Logo -->
                    <span class="font-['Georgia',serif] text-[24px] italic text-white">hotel<span class="font-normal">mate</span></span>
                    
                    <!-- Property Switcher Dropdown -->
                    <button class="bg-white text-[#1D6A7C] px-3 py-1.5 rounded-[4px] text-[14px] font-medium flex items-center gap-2">
                        Exotica Hotel, Delhi
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="#1D6A7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Right: Notifications + Account -->
                <div class="flex items-center gap-6">
                    <!-- Updates -->
                    <button class="flex items-center gap-2 text-[#A2F4FD] hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span class="text-[16px] font-medium">Updates</span>
                    </button>
                    
                    <!-- Account -->
                    <button class="flex items-center gap-2 text-[#A2F4FD] hover:text-white transition-colors">
                        <div class="w-[32px] h-[32px] rounded-full bg-[#374151] flex items-center justify-center text-white text-[12px] font-semibold">
                            PH
                        </div>
                        <span class="text-[16px] font-medium">Account</span>
                    </button>
                </div>
            </div>
        </header>
        
        <!-- ============================================== -->
        <!-- NAVIGATION BAR (Figma 451:7247) -->
        <!-- ============================================== -->
        <nav class="bg-[#1D6A7C]">
            <div class="max-w-[1440px] mx-auto px-6 flex items-center">
                
                <!-- Home (Active) -->
                <a href="#" class="flex items-center gap-2 px-4 py-3 bg-[#2A7A8C] text-white border-b-2 border-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-[16px] font-medium">Home</span>
                </a>
                
                <!-- Bookings -->
                <a href="#" class="flex items-center gap-2 px-4 py-3 text-[#A2F4FD] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-[16px] font-medium">Bookings</span>
                </a>
                
                <!-- Rate Card -->
                <a href="#" class="flex items-center gap-2 px-4 py-3 text-[#A2F4FD] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    <span class="text-[16px] font-medium">Rate Card</span>
                </a>
                
                <!-- Contracts -->
                <a href="#" class="flex items-center gap-2 px-4 py-3 text-[#A2F4FD] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    <span class="text-[16px] font-medium">Contracts</span>
                </a>
                
                <!-- Settings -->
                <a href="#" class="flex items-center gap-2 px-4 py-3 text-[#A2F4FD] hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    <span class="text-[16px] font-medium">Settings</span>
                </a>
            </div>
        </nav>
        
        <!-- ============================================== -->
        <!-- MAIN CONTENT AREA -->
        <!-- ============================================== -->
        <main class="max-w-[1440px] mx-auto px-6 py-9">
            <div class="grid grid-cols-12 gap-6">
                
                <!-- ============================================== -->
                <!-- LEFT COLUMN: Performance & Metrics (8 cols) -->
                <!-- Figma 451:7296 -->
                <!-- ============================================== -->
                <div class="col-span-12 lg:col-span-8 flex flex-col gap-9">
                    
                    <!-- Performance Overview Section -->
                    <section>
                        <h2 class="text-[20px] font-semibold text-black mb-4">Performance Overview</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <!-- Total Revenue Card -->
                            <div class="bg-white rounded-[4px] p-4 pt-5">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-[16px] font-medium text-[#6B7280]">Total Revenue</span>
                                    <button class="flex items-center gap-1 text-[14px] font-medium text-[#0694A2] border border-[#EDF2F7] rounded px-2 py-1">
                                        This Week
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3 4.5L6 7.5L9 4.5" stroke="#0694A2" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="text-[20px] font-bold text-black mb-4">INR 2,90,000</div>
                                
                                <!-- Bar Chart (Visual Mock matching Figma) -->
                                <div class="flex items-end gap-3 h-[160px] pt-2">
                                    <!-- Y-Axis Labels -->
                                    <div class="flex flex-col justify-between h-full text-[12px] text-[#8492A6] pr-1">
                                        <span>50k</span>
                                        <span>40k</span>
                                        <span>30k</span>
                                        <span>20k</span>
                                        <span>10k</span>
                                    </div>
                                    
                                    <!-- Bars Container -->
                                    <div class="flex-1 flex items-end justify-between gap-1">
                                        <!-- Bar 1 (1 Jan) -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[90px] bg-gradient-to-b from-[#F472B6] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                        <!-- Bar 2 -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[140px] bg-gradient-to-b from-[#EC4899] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                        <!-- Bar 3 -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[70px] bg-gradient-to-b from-[#F472B6] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                        <!-- Bar 4 -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[150px] bg-gradient-to-b from-[#EC4899] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                        <!-- Bar 5 -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[80px] bg-gradient-to-b from-[#F472B6] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                        <!-- Bar 6 -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[85px] bg-gradient-to-b from-[#F472B6] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                        <!-- Bar 7 (7 Jan) -->
                                        <div class="flex-1 flex flex-col items-center gap-1">
                                            <div class="w-full max-w-[24px] h-[80px] bg-gradient-to-b from-[#F472B6] to-[#FDF2F8] rounded-t-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- X-Axis Labels -->
                                <div class="flex justify-between text-[12px] text-[#8492A6] mt-2 pl-8">
                                    <span>1 Jan</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7 Jan</span>
                                </div>
                            </div>
                            
                            <!-- Total Visits Card -->
                            <div class="bg-white rounded-[4px] p-4 pt-5">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-[16px] font-medium text-[#6B7280]">Total Visits</span>
                                    <button class="flex items-center gap-1 text-[14px] font-medium text-[#0694A2] border border-[#EDF2F7] rounded px-2 py-1">
                                        This Week
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3 4.5L6 7.5L9 4.5" stroke="#0694A2" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="text-[20px] font-bold text-black mb-4">90</div>
                                
                                <!-- Line Chart (Visual Mock) -->
                                <div class="h-[160px] relative">
                                    <!-- Grid Lines -->
                                    <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        <div class="flex items-center">
                                            <span class="text-[12px] text-[#8492A6] w-6">50</span>
                                            <div class="flex-1 h-px bg-[#EDF2F7]"></div>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-[12px] text-[#8492A6] w-6">40</span>
                                            <div class="flex-1 h-px bg-[#EDF2F7]"></div>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-[12px] text-[#8492A6] w-6">30</span>
                                            <div class="flex-1 h-px bg-[#EDF2F7]"></div>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-[12px] text-[#8492A6] w-6">20</span>
                                            <div class="flex-1 h-px bg-[#EDF2F7]"></div>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-[12px] text-[#8492A6] w-6">10</span>
                                            <div class="flex-1 h-px bg-[#EDF2F7]"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- SVG Line -->
                                    <svg class="absolute left-6 top-0 right-0 bottom-0 w-[calc(100%-24px)] h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
                                        <polyline
                                            fill="none"
                                            stroke="#2DD4BF"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            points="0,120 50,100 100,90 150,40 200,80 250,70 300,60"
                                        />
                                        <!-- Dots on data points -->
                                        <circle cx="150" cy="40" r="4" fill="#2DD4BF"/>
                                    </svg>
                                </div>
                                
                                <!-- X-Axis Labels -->
                                <div class="flex justify-between text-[12px] text-[#8492A6] mt-2 pl-6">
                                    <span>1 Jan</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7 Jan</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Contracts Overview Section -->
                    <section>
                        <h2 class="text-[20px] font-semibold text-black mb-4">Contracts Overview</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            <!-- New Request -->
                            <div class="bg-white rounded-[4px] p-4 flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <h3 class="text-[16px] font-medium text-[#6B7280] mb-2">New Request</h3>
                                    <div class="text-[20px] font-bold text-[#425466]">10</div>
                                </div>
                                <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">View</a>
                            </div>
                            
                            <!-- Pending Request -->
                            <div class="bg-white rounded-[4px] p-4 flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <h3 class="text-[16px] font-medium text-[#6B7280] mb-2">Pending Request</h3>
                                    <div class="text-[20px] font-bold text-[#425466]">3</div>
                                </div>
                                <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">View</a>
                            </div>
                            
                            <!-- Accepted Request -->
                            <div class="bg-white rounded-[4px] p-4 flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <h3 class="text-[16px] font-medium text-[#6B7280]">Accepted Request</h3>
                                        <span class="text-[12px] text-[#6B7280]">Contract Signed</span>
                                    </div>
                                    <div class="text-[20px] font-bold text-[#425466]">24</div>
                                </div>
                                <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">View</a>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Bookings Overview Section -->
                    <section>
                        <h2 class="text-[20px] font-semibold text-black mb-4">Bookings Overview</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            <!-- Total Bookings -->
                            <div class="bg-white rounded-[4px] p-4 flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <h3 class="text-[16px] font-medium text-[#6B7280] mb-2">Total Bookings (This Month)</h3>
                                    <div class="flex items-baseline gap-2">
                                        <span class="text-[20px] font-bold text-[#425466]">123</span>
                                        <span class="text-[14px] text-[#10B981] flex items-center gap-1">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M6 9V3M6 3L3 6M6 3L9 6" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            12% more than last month
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">View</a>
                            </div>
                            
                            <!-- Upcoming Check-ins -->
                            <div class="bg-white rounded-[4px] p-4 flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <h3 class="text-[16px] font-medium text-[#6B7280] mb-2">Upcoming Check-ins</h3>
                                    <div class="text-[20px] font-bold text-[#425466]">39</div>
                                </div>
                                <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">View</a>
                            </div>
                            
                            <!-- Accepted Request -->
                            <div class="bg-white rounded-[4px] p-4 flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <h3 class="text-[16px] font-medium text-[#6B7280]">Accepted Request</h3>
                                        <span class="text-[12px] text-[#6B7280]">Contract Signed</span>
                                    </div>
                                    <div class="text-[20px] font-bold text-[#425466]">24</div>
                                </div>
                                <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">View</a>
                            </div>
                        </div>
                    </section>
                </div>
                
                <!-- ============================================== -->
                <!-- RIGHT COLUMN: Sidebar (4 cols) -->
                <!-- Figma 451:7297 -->
                <!-- ============================================== -->
                <div class="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    
                    <!-- Rate Card Requests Widget -->
                    <div class="bg-[#009689] rounded-[4px] p-3">
                        
                        <!-- Header -->
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-6 h-6 rounded-full bg-[#F0FDF4] flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D542B" stroke-width="2">
                                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </div>
                            <h2 class="text-[16px] font-semibold text-white">Rate Card Requests</h2>
                        </div>
                        
                        <!-- Request Items -->
                        <div class="flex flex-col gap-3">
                            
                            <!-- Item 1: ABC DMC -->
                            <div class="bg-white rounded-[4px] p-3">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-[4px] bg-[#F3F4F6] flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
                                                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path>
                                            </svg>
                                        </div>
                                        <span class="text-[14px] font-medium text-[#111827]">ABC DMC</span>
                                    </div>
                                    <span class="text-[12px] text-[#9CA3AF]">a min. ago</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    ${renderBadge({ label: 'New Request', theme: 'success', withDot: true, pill: true })}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
                                        <path d="M9 18l6-6-6-6"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <!-- Item 2: XYZ DMC -->
                            <div class="bg-white rounded-[4px] p-3">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-[4px] bg-[#F3F4F6] flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
                                                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path>
                                            </svg>
                                        </div>
                                        <span class="text-[14px] font-medium text-[#111827]">XYZ DMC</span>
                                    </div>
                                    <span class="text-[12px] text-[#9CA3AF]">2 days ago</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    ${renderBadge({ label: 'New Request', theme: 'success', withDot: true, pill: true })}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
                                        <path d="M9 18l6-6-6-6"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <!-- Item 3: Vertex Pvt Ltd (Contract Signed) -->
                            <div class="bg-white rounded-[4px] p-3">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-[4px] bg-[#F3F4F6] flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                            </svg>
                                        </div>
                                        <span class="text-[14px] font-medium text-[#111827]">Vertex Pvt Ltd</span>
                                    </div>
                                    <span class="text-[12px] text-[#9CA3AF]">25 mar, 2026</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    ${renderBadge({ label: 'Contract Signed', theme: 'brand', pill: true })}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
                                        <path d="M9 18l6-6-6-6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <!-- All Notifications Button -->
                        <button class="w-full mt-3 bg-white text-[#009689] text-[14px] font-medium py-2 rounded-[4px] flex items-center justify-center gap-2 hover:bg-[#F0FDF4] transition-colors">
                            All Notifications
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 18l6-6-6-6"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Upcoming Bookings Widget -->
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-[20px] font-semibold text-black">Upcoming Bookings</h2>
                            <a href="#" class="text-[14px] font-medium text-[#0694A2] hover:underline">Visit</a>
                        </div>
                        
                        <div class="flex flex-col gap-4">
                            
                            <!-- 7 Jan, Today -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">7 Jan, Today</h3>
                                <div class="bg-[#E0F7FA] border-l-4 border-[#0694A2] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] font-bold text-[#111827]">4 bookings</div>
                                    <div class="text-[14px] text-[#6B7280]">2 Payments Received . 4 Pending</div>
                                </div>
                            </div>
                            
                            <!-- 8 Jan, Tomorrow -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">8 Jan, Tomorrow</h3>
                                <div class="bg-[#E0F7FA] border-l-4 border-[#0694A2] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] font-bold text-[#111827]">5 bookings</div>
                                    <div class="text-[14px] text-[#6B7280]">3 Payments Received . 2 Pending</div>
                                </div>
                            </div>
                            
                            <!-- 9 Jan, Thursday -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">9 Jan, Thursday</h3>
                                <div class="bg-[#E0F7FA] border-l-4 border-[#0694A2] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] font-bold text-[#111827]">6 bookings</div>
                                    <div class="text-[14px] text-[#6B7280]">4 Payments Received . 2 Pending</div>
                                </div>
                            </div>
                            
                            <!-- 10 Jan, Friday -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">10 Jan, Friday</h3>
                                <div class="bg-[#F9FAFB] border-l-4 border-[#D1D5DB] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] text-[#9CA3AF]">No Booking</div>
                                </div>
                            </div>
                            
                            <!-- 11 Jan, Saturday -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">11 Jan, Saturday</h3>
                                <div class="bg-[#E0F7FA] border-l-4 border-[#0694A2] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] font-bold text-[#111827]">3 bookings</div>
                                    <div class="text-[14px] text-[#6B7280]">1 Payment Received . 2 Pending</div>
                                </div>
                            </div>
                            
                            <!-- 12 Jan, Sunday -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">12 Jan, Sunday</h3>
                                <div class="bg-[#E0F7FA] border-l-4 border-[#0694A2] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] font-bold text-[#111827]">7 bookings</div>
                                    <div class="text-[14px] text-[#6B7280]">6 Payments Received . 1 Pending</div>
                                </div>
                            </div>
                            
                            <!-- 13 Jan, Monday -->
                            <div>
                                <h3 class="text-[14px] font-bold text-[#111827] mb-2">13 Jan, Monday</h3>
                                <div class="bg-[#E0F7FA] border-l-4 border-[#0694A2] p-3 rounded-r-[4px]">
                                    <div class="text-[14px] font-bold text-[#111827]">4 bookings</div>
                                    <div class="text-[14px] text-[#6B7280]">3 Payments Received . 1 Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `;
}

export function setupHotelDashboardHandlers() {
    // Event handlers for dashboard interactions
    console.log('[HotelDashboard] Handlers initialized');
}
