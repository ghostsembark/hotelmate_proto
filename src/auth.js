/**
 * HotelMate Authentication Service
 * Mock authentication for prototype
 */

import { USERS } from './mockData.js'

class AuthService {
    constructor() {
        this.currentUser = null
    }

    // Authenticate user with credentials
    login(email, password) {
        // Check against mock users
        for (const user of Object.values(USERS)) {
            if (user.email === email && user.password === password) {
                this.currentUser = { ...user }
                // Remove password from stored user
                delete this.currentUser.password
                return { success: true, user: this.currentUser }
            }
        }

        return { success: false, error: 'Invalid email or password' }
    }

    // Get current user
    getUser() {
        return this.currentUser
    }

    // Check if user is authenticated
    isAuthenticated() {
        return this.currentUser !== null
    }

    // Get user type
    getUserType() {
        return this.currentUser?.type || null
    }

    // Get user theme
    getTheme() {
        return this.currentUser?.theme || 'enterprise'
    }

    // Logout user
    logout() {
        this.currentUser = null
    }
}

// Singleton instance
export const authService = new AuthService()
