import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 15000,
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  testMatch: '**/*e2.spec.ts',
  reporter: [['playwright-trx-reporter', { outputFile: 'results.trx' }]],
  maxFailures: 10,
  expect: {
    timeout: 15000
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
  },
  

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'setup',
    //   testDir: "./tests/",
    //   testMatch: /.*\.setup\.ts/,
    //   teardown: 'cleanup db',
    // },
    // {
    //   name: 'cleanup db',
    //   testMatch: /global\.teardown\.ts/,
    // },
    {
      name: 'chromium',
      // dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'] },
      timeout: 15000
    },
    // {
    //   name: 'flipkart',
    //   testDir: "./tests/test2",
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'amazon',
    //   testDir: "./tests/test1",
    //   //dependencies: ['flipkart'],
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
