/**
 * HotelMate Mock Data
 * Test credentials and dropdown options for prototype
 */

// Test Users
export const USERS = {
    hotel: {
        email: 'hotel@demo.com',
        password: 'password123',
        type: 'hotel',
        theme: 'enterprise',
        name: 'Grand Plaza Hotel'
    },
    operator: {
        email: 'operator@demo.com',
        password: 'password123',
        type: 'operator',
        theme: 'mono',
        name: 'Wanderlust Tours'
    }
}

// Dropdown Options
export const PROPERTY_TYPES = [
    'Resort',
    'Boutique Hotel',
    'Business Hotel',
    'Beach Resort',
    'City Hotel',
    'Mountain Lodge'
]

export const STAR_RATINGS = [
    { value: 1, label: '1 Star' },
    { value: 2, label: '2 Stars' },
    { value: 3, label: '3 Stars' },
    { value: 4, label: '4 Stars' },
    { value: 5, label: '5 Stars' }
]

export const ROOM_TYPES = [
    'Standard',
    'Deluxe',
    'Suite',
    'Executive Suite',
    'Presidential Suite',
    'Villa'
]

export const AMENITIES = [
    'Swimming Pool',
    'Spa & Wellness',
    'Restaurant',
    'Bar/Lounge',
    'Fitness Center',
    'Business Center',
    'Conference Rooms',
    'Room Service',
    'Concierge',
    'Valet Parking',
    'Airport Shuttle',
    'Beach Access',
    'Kids Club',
    'Kids Club',
    'Pet Friendly'
]

export const ROOM_VIEWS = [
    'City View',
    'Garden View',
    'Mountain View',
    'Ocean View',
    'Pool View',
    'Courtyard View'
];

export const BED_TYPES = [
    'King Bed',
    'Queen Bed',
    'Twin Bed',
    'Double Bed',
    'Single Bed',
    'Bunk Bed'
];

export const MEAL_TYPES = [
    'Room Only',
    'Breakfast Included',
    'Breakfast & Dinner',
    'All Inclusive'
];

export const COUNTRIES = [
    'United States',
    'United Kingdom',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'Thailand',
    'Indonesia',
    'Japan',
    'Australia',
    'India',
    'UAE'
]

export const HOTEL_ONBOARDING_STEPS = [
    "Basic Info",
    "Location",
    "Room Details",
    "Amenities",
    "Photos",
    "Policies",
    "Verification"
];

export const MOCK_LOCATIONS = [
    "Hotel Exotica, 123 Main St, Downtown, New York, NY 10001",
    "Grand Plaza Hotel, 456 Elm St, Midtown, New York, NY 10018",
    "Seaside Resort, 789 Ocean Dr, Miami Beach, FL 33139",
    "Mountain View Lodge, 101 Peak Rd, Aspen, CO 81611",
    "City Center Inn, 202 Market St, San Francisco, CA 94102",
    "Desert Oasis, 303 Sand Dune Way, Phoenix, AZ 85001",
    "Lakeside Retreat, 404 Shoreline Blvd, Chicago, IL 60601",
    "Historic Manor, 505 Heritage Ln, Boston, MA 02108",
    "Royal Palace, 606 King's Way, London, UK SW1A 1AA"
];
