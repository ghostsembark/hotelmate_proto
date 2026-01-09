# Hotel Dashboard Implementation Plan

## Objective

Implement the Hotel Dashboard as per Figma Node `174:4374`.

## Design Reference

- **Theme**: Enterprise (`data-theme="enterprise"`)
- **Style**: Flowbite + Tailwind CSS (Legacy Prefix Strategy compatible)

## 1. Route Configuration

- **File**: `src/main.js`
- **Action**: Register new route `/hotel/dashboard`.
- **Check**: ensure user is logged in.

## 2. Mini Tasks

### Task 1: Screen Skeleton

- **Goal**: Create the file structure and basic layout grid.
- **File**: `src/screens/hotel/dashboard.js`
- **Actions**:
  - Create `renderHotelDashboard` and `setupHotelDashboardHandlers`.
  - Set up the main page container.
  - Define the two-column grid layout (Main Content vs Sidebar).

### Task 2: Navigation Bar

- **Figma Node**: [`451:7247`](https://www.figma.com/design/aSksdKcTdcP1HbQlajnnjk/VD?node-id=451-7247&m=dev)
- **Details**:
  - Implement Top Header (Logo, Property Switcher, Notification, Profile).
  - Implement Main Navigation Bar (Dark blue background).
  - Ensure responsive behavior.

### Task 3: Performance & Visits Section

- **Figma Node**: [`451:7296`](https://www.figma.com/design/aSksdKcTdcP1HbQlajnnjk/VD?node-id=451-7296&m=dev)
- **Details**:
  - Implement "Total Revenue" Card with Bar Chart mock.
  - Implement "Total Visits" Card with Line Chart mock.
  - Implement "Contracts Overview" and "Bookings Overview" cards below charts.

### Task 4: Sidebar Widgets

- **Figma Node**: [`451:7297`](https://www.figma.com/design/aSksdKcTdcP1HbQlajnnjk/VD?node-id=451-7297&m=dev)
- **Details**:
  - Implement "Rate Card Requests" widget with list items and status badges.
  - Implement "Upcoming Bookings" widget with timeline view.

## 3. Contingency

- **Charts**: Use visual HTML/CSS mocks/Images for speed.
