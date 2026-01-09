/**
 * HotelMate - Login Screen
 * Enterprise theme for Hotels
 */

export function renderLoginScreen(onLogin) {
    return `
    <div class="login-page" data-node-id="175-4907">
      <!-- Left Panel - Login Form -->
      <div class="login-form-panel" data-node-id="175-4908">
        <!-- Logo -->
        <div class="login-logo" data-node-id="175-4909">
          <img src="/hotelmate_logo.svg" alt="HotelMate" class="logo-image">
        </div>

        <!-- Login Form Container -->
        <div class="login-content" data-node-id="175-4910">
          <h1 class="login-title" data-node-id="175-4911">Welcome to HotelMate</h1>
          <p class="login-subtitle" data-node-id="175-4912">Sign in to your account</p>

          <!-- Login Form -->
          <form class="login-form" data-node-id="175-4913" id="loginForm">
            <!-- Email Field -->
            <div class="form-group" data-node-id="175-4914">
              <label for="email" class="form-label">Email ID</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                class="form-input" 
                placeholder="Enter your email"
                required
              >
              <span class="form-error" id="email-error"></span>
            </div>

            <!-- Password Field -->
            <div class="form-group" data-node-id="175-4915">
              <label for="password" class="form-label">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                class="form-input" 
                placeholder="Enter your password"
                required
                minlength="8"
              >
              <span class="form-error" id="password-error"></span>
            </div>

            <!-- General Error Message -->
            <div id="login-error" class="login-error-message"></div>

            <!-- Actions -->
            <div class="form-actions" data-node-id="175-4916">
              <button type="submit" class="btn-signin">Sign in</button>
              <a href="#" class="forgot-link">Forgot Password?</a>
            </div>
          </form>

          <!-- Divider -->
          <div class="login-divider" data-node-id="175-4917"></div>

          <!-- Register Section -->
          <div class="register-section" data-node-id="175-4918">
            <p class="register-text">Don't have an account? Create one</p>
            <button type="button" class="btn-register">
              Register Now
              <svg class="register-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <div style="margin-top: 10px; font-size: 12px; opacity: 0.7;">
                <a href="#" id="dev-dashboard-link" style="text-decoration: underline; color: inherit;">Dev: Jump to Dashboard</a>
            </div>
          </div>

          <!-- Demo Credentials Hint -->
          <div class="demo-hint">
            <p class="demo-hint-title">Demo Credentials:</p>
            <p class="demo-hint-text">Hotel: hotel@demo.com</p>
            <p class="demo-hint-text">Operator: operator@demo.com</p>
            <p class="demo-hint-text">Password: password123</p>
          </div>
        </div>
      </div>

      <!-- Right Panel - Feature Showcase -->
      <div class="showcase-panel" data-node-id="175-4919">
        <!-- Images Container with overlapping effect -->
        <div class="showcase-images-container" data-node-id="175-4926">
          <!-- Teacher Image (Woman with laptop - left side) -->
          <div class="person-wrapper person-teacher">
            <img src="/Teacher.png" alt="Teacher working on laptop" class="person-image">
          </div>
          
          <!-- Student Image (Man with phone - right side) -->
          <div class="person-wrapper person-student">
            <img src="/Student.png" alt="Student using phone" class="person-image">
          </div>
        </div>

        <!-- Background Decorations -->
        <div class="showcase-decorations" data-node-id="175-4920">
          <!-- Decorative Stars (Yellow) -->
          <svg class="deco-star star-1" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FACC15"/>
          </svg>
          <svg class="deco-star star-2" width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FACC15"/>
          </svg>
          <svg class="deco-star star-3" width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FACC15"/>
          </svg>
          <svg class="deco-star star-4" width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FACC15"/>
          </svg>
          <svg class="deco-star star-5" width="8" height="8" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FB923C"/>
          </svg>
          
          <!-- Decorative Plus Signs -->
          <div class="deco-plus plus-1">+</div>
          <div class="deco-plus plus-2">+</div>
          <div class="deco-plus plus-3">+</div>
          <div class="deco-plus plus-4">+</div>
          <div class="deco-plus plus-5">+</div>
          
          <!-- Decorative Dots (Yellow/Orange) -->
          <div class="deco-dot dot-1"></div>
          <div class="deco-dot dot-2"></div>
          <div class="deco-dot dot-3"></div>
          <div class="deco-dot dot-4"></div>
          <div class="deco-dot dot-5"></div>
          <div class="deco-dot dot-6"></div>
          <div class="deco-dot dot-7"></div>
        </div>

        <!-- Bubble Messages -->
        <div class="bubble-messages" data-node-id="175-4921">
          <div class="chat-bubble bubble-1" data-node-id="175-4922">
            <span>Share Hotel Rates</span>
          </div>
          <div class="chat-bubble bubble-2" data-node-id="175-4923">
            <span>4 adults, 2 child</span>
          </div>
          <div class="chat-bubble bubble-3" data-node-id="175-4924">
            <span>Here is the special rate</span>
          </div>
          <div class="chat-bubble bubble-4" data-node-id="175-4925">
            <span>Please confirm</span>
          </div>
        </div>

        <!-- Feature Info -->
        <div class="feature-info" data-node-id="175-4928">
          <h2 class="feature-title">Introducing new features</h2>
          <p class="feature-description">
            Analyzing previous trends ensures that businesses always make the right decision. And as the scale of the decision and its impact magnifies...
          </p>
        </div>

        <!-- Carousel Indicators -->
        <div class="carousel-indicators" data-node-id="175-4929">
          <button class="carousel-arrow carousel-prev" aria-label="Previous slide">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="indicator-dot"></span>
          <button class="indicator active" aria-label="Current slide">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </button>
          <span class="indicator-dot"></span>
          <button class="carousel-arrow carousel-next" aria-label="Next slide">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
}

// Setup login form validation and submission
export function setupLoginHandlers(authService, router) {
    const validators = {
        email: (value) => {
            if (!value.trim()) {
                return 'Email is required'
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address'
            }
            return ''
        },
        password: (value) => {
            if (!value) {
                return 'Password is required'
            }
            if (value.length < 8) {
                return 'Password must be at least 8 characters'
            }
            return ''
        }
    }

    function showError(inputId, message) {
        const input = document.getElementById(inputId)
        const errorSpan = document.getElementById(`${inputId}-error`)

        if (message) {
            input.classList.add('form-input-error')
            errorSpan.textContent = message
            errorSpan.classList.add('visible')
        } else {
            input.classList.remove('form-input-error')
            errorSpan.textContent = ''
            errorSpan.classList.remove('visible')
        }
    }

    function validateField(inputId) {
        const input = document.getElementById(inputId)
        const validator = validators[inputId]
        if (validator) {
            const error = validator(input.value)
            showError(inputId, error)
            return !error
        }
        return true
    }

    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')

    if (emailInput && passwordInput) {
        emailInput.addEventListener('blur', () => validateField('email'))
        passwordInput.addEventListener('blur', () => validateField('password'))

        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('form-input-error')) {
                validateField('email')
            }
        })
        passwordInput.addEventListener('input', () => {
            if (passwordInput.classList.contains('form-input-error')) {
                validateField('password')
            }
        })
    }

    // Dev Link Handler
    const devLink = document.getElementById('dev-dashboard-link');
    if (devLink) {
        devLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate login as hotel user
            const hotelUser = { type: 'hotel', email: 'hotel@demo.com', name: 'Demo Hotel' };
            router.setUser(hotelUser);
            document.documentElement.setAttribute('data-theme', 'enterprise');
            router.navigate('/hotel/dashboard');
        });
    }

    const loginForm = document.getElementById('loginForm')
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault()

            // Clear previous login error
            const loginErrorDiv = document.getElementById('login-error')
            if (loginErrorDiv) {
                loginErrorDiv.textContent = ''
                loginErrorDiv.classList.remove('visible')
            }

            const isEmailValid = validateField('email')
            const isPasswordValid = validateField('password')

            if (isEmailValid && isPasswordValid) {
                const email = document.getElementById('email').value
                const password = document.getElementById('password').value

                const result = authService.login(email, password)

                if (result.success) {
                    // Set theme based on user type
                    const theme = authService.getTheme()
                    document.documentElement.setAttribute('data-theme', theme)

                    // Store user in router state
                    router.setUser(result.user)

                    // Navigate to appropriate onboarding
                    if (result.user.type === 'hotel') {
                        router.navigate('/onboarding/hotel/welcome')
                    } else {
                        router.navigate('/onboarding/operator/welcome')
                    }
                } else {
                    // Show login error
                    if (loginErrorDiv) {
                        loginErrorDiv.textContent = result.error
                        loginErrorDiv.classList.add('visible')
                    }
                }
            }
        })
    }
}
