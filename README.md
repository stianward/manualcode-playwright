# Sauce Labs Automation - BDD with Cucumber & Playwright

Professional automated testing framework for Sauce Labs using BDD (Behavior Driven Development) approach.

## Project Structure

```
sauce-labs-automation/
├── features/
│   ├── login.feature                 # Feature file with Scenario Outline
│   └── step-definitions/
│       ├── hooks.ts                  # Setup/Teardown hooks
│       ├── loginSteps.ts             # Step implementations
│       └── world.ts                  # Shared context
├── pages/
│   ├── basePage.ts                   # Base class with common methods
│   └── loginPage.ts                  # Login page object
├── cucumber.js                       # Cucumber configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
# Run all tests (headless mode)
npm test

# Run tests with browser visible
npm test:headed

# Generate HTML report
npm test:report
```

## Architecture

### 1. **Feature File** (`features/login.feature`)
- Written in Gherkin language (Given-When-Then)
- Scenario Outline with multiple test cases
- Business-readable test descriptions

### 2. **Page Object Model** (`pages/`)
- `BasePage.ts` - Common methods for all pages
- `LoginPage.ts` - Login-specific selectors and actions
- Encapsulates UI elements and interactions

### 3. **Step Definitions** (`features/step-definitions/`)
- `loginSteps.ts` - Maps Gherkin steps to code
- `hooks.ts` - Browser setup (Before) and cleanup (After)
- `world.ts` - Shared context between steps

## Test Scenarios

The `login.feature` file contains:
- **4 test cases** in Scenario Outline format
- Tests for: valid login, invalid credentials, locked accounts
- Uses data tables for easy test case management

## Key Classes

### BasePage
```typescript
- goto(url)              // Navigate to URL
- getPageTitle()         // Get page title
- clickBySelector()      // Click element with wait
- fill()                 // Fill input field
- waitForPageReady()     // Wait for network idle
- waitForURL()           // Wait for URL change
```

### LoginPage
```typescript
- navigateToLoginPage()         // Go to login
- enterEmail(email)             // Enter email
- enterPassword(password)       // Enter password
- clickSubmitButton()           // Click login button
- verifyErrorMessageDisplayed() // Verify error
- verifyLoginSuccess()          // Verify success
- getErrorMessageText()         // Get error text
```

## Best Practices Implemented

✅ **Page Object Model** - Separation of concerns
✅ **BDD/Gherkin** - Business-readable tests
✅ **DRY Principle** - Reusable base methods
✅ **Wait Strategies** - Proper waits for visibility
✅ **Clear Naming** - Self-documenting code
✅ **Error Handling** - Try-catch patterns
✅ **Configuration** - Centralized in cucumber.js

## Environment Variables

- `HEADED=true` - Run with browser visible (default: headless)

## Reports

HTML reports are generated in:
- `cucumber-report.html` - Detailed test execution report

## Extending the Framework

### Add a New Page Object
```typescript
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  readonly url = 'https://www.saucelabs.com/dashboard';
  // Add selectors and methods
}
```

### Add New Feature Scenarios
```gherkin
Feature: User Dashboard
  Scenario: User can view dashboard
    Given I am logged in
    When I navigate to dashboard
    Then I should see user profile
```

### Add New Steps
```typescript
import { Given, When, Then } from '@cucumber/cucumber';

Given('I am logged in', async function(this: CustomWorld) {
  // Implementation
});
```

## Technologies Used

- **Playwright** - Cross-browser automation
- **Cucumber** - BDD framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - JavaScript runtime

## Notes

- All timeouts are configurable in BasePage
- Headless mode is default (faster execution)
- Network idle strategy ensures page fully loaded
- Clear error messages for debugging
