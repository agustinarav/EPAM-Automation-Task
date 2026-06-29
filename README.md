# EPAM WebDriverIO Automation Task

Automated tests using WebDriverIO and JavaScript.

## Requirements

- Node.js
- WebDriverIO

## Installation

Clone the repository:

git clone https://github.com/agustinarav/EPAM-Automation-Task.git

Install dependencies:

npm install

## Run Tests

Execute tests with:

npm run wdio

Tests run on:

- Firefox
- Microsoft Edge

The browsers run in parallel.

## Test Coverage

Negative Testing:

- Login with empty username and password.
- Login with username only.
- Checkout without postal code.

Wait Strategies:

- Login using performance_glitch_user.
- Handle loading delays without using pause() or sleep().

## Pattern

The project uses Page Object Model (POM).

## Assertions

Tests use WebDriverIO expect assertions.