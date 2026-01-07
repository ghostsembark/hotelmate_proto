/**
 * HotelMate Simple Router
 * Hash-based client-side routing for the prototype
 */

class Router {
    constructor() {
        this.routes = {}
        this.currentRoute = null
        this.state = {
            user: null,
            onboardingData: {},
            currentStep: 0
        }

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute())
    }

    // Register a route handler
    register(path, handler) {
        this.routes[path] = handler
        return this
    }

    // Navigate to a route
    navigate(path) {
        window.location.hash = path
    }

    // Get current hash path
    getPath() {
        return window.location.hash.slice(1) || '/login'
    }

    // Handle route change
    handleRoute() {
        const path = this.getPath()
        this.currentRoute = path

        // Find matching route
        for (const [route, handler] of Object.entries(this.routes)) {
            const match = this.matchRoute(route, path)
            if (match) {
                handler(match.params, this.state)
                return
            }
        }

        // Default to login if no match
        if (this.routes['/login']) {
            this.navigate('/login')
        }
    }

    // Match route pattern to path
    matchRoute(pattern, path) {
        const patternParts = pattern.split('/')
        const pathParts = path.split('/')

        if (patternParts.length !== pathParts.length) {
            return null
        }

        const params = {}
        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(':')) {
                params[patternParts[i].slice(1)] = pathParts[i]
            } else if (patternParts[i] !== pathParts[i]) {
                return null
            }
        }

        return { params }
    }

    // Set user after login
    setUser(user) {
        this.state.user = user
    }

    // Get current user
    getUser() {
        return this.state.user
    }

    // Update onboarding data
    updateOnboardingData(step, data) {
        this.state.onboardingData[step] = data
    }

    // Get all onboarding data
    getOnboardingData() {
        return this.state.onboardingData
    }

    // Set current step
    setCurrentStep(step) {
        this.state.currentStep = step
    }

    // Initialize routing
    init() {
        this.handleRoute()
    }
}

// Singleton instance
export const router = new Router()
