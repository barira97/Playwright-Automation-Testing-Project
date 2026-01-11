#  Swag Labs Automation Testing Project

Using Playwright + Page Object Model (POM)

##  Project Overview

This project is an end-to-end automation testing framework built using Playwright for the Swag Labs website (https://www.saucedemo.com/).

It automates login validations and multiple purchase journeys using the Page Object Model (POM) architecture.

The goal of this project is to validate critical user workflows such as:

-> Login failure handling

-> Successful product purchase

-> Sorting, filtering, checkout and logout flow

## 🔍 Test Scenarios Covered

### Q1 – Locked User Login Validation

-> Login with locked_out_user

-> Verify the correct error message is displayed

### Q2 – Standard User Purchase Journey

-> Login with standard_user

-> Reset App State

-> Add any 3 products to the cart

-> Proceed to checkout

-> Verify product names & total price

-> Complete the purchase

-> Verify order success message

-> Reset App State and logout

### Q3 – Performance User Purchase Journey

-> Login with performance_glitch_user

-> Reset App State

-> Apply filter Name (Z to A)

-> Add first product after filtering

-> Checkout and verify:

   Product name

   Total price

-> Finish order

-> Verify success message

-> Reset App State and Logout

## How to Run the Tests

### 1️⃣ Install dependencies
npm install

### 2️⃣ Run all tests
npm run test

### 3️⃣ View test list
npx playwright test --list

### 4️⃣ Run in headed mode
npm run test --headed

### 6️⃣ Run to see the Allure report
npm run getReport

### 6 Run to view the report
npx playwright show-report

## Framework Features

-> Page Object Model (POM) architecture

-> Reusable action methods

-> Clean locator separation

-> Supports multiple users

-> UI validations and checkout verification

## Reporting

### Playwright generates:

-> HTML reports

-> Screenshots on failure

-> Execution logs

## Author

Barira Yasmin
