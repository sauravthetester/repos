import { test, expect } from '@playwright/test';
import { getTaskVariable } from "azure-pipelines-task-lib";

test.describe('report tests', {
  annotation: { type: 'category', description: 'report' },
}, () => {

  test.use({
    //locale: 'de-De',
    timezoneId: 'Europe/London',
    colorScheme: 'light',
  });

test.beforeEach(async ({ page }) => {
  console.log(' =========== beforeEach');
});

test('has title', async ({ page }) => {

  await page.goto('https://amazon.com/');
  // await expect(page).toHaveScreenshot('landing.png');
  
  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});
let a = 3;
test('get started link',{
  annotation: { type: 'getFix', description: 'report' }
}, async ({ page }, testInfo) => {
  test.fail(a==2);
  test.skip(a==2);

  const {SAR} = process.env;
  console.log(' =========== SAR = '+SAR);
  
  console.log(' =========== config = '+testInfo.config.fullyParallel);
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});
test('new get started link', async ({ page }, testInfo) => {
  test.fail(a==2);

  const {SAR} = process.env;
  console.log(' =========== SAR = '+SAR);
  
  console.log(' =========== config = '+testInfo.config.fullyParallel);
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});

test.afterEach(async ({ page },testInfo) => {
  await page.screenshot({ path: './screenshot.png' });
  await testInfo.attach('downloaded', { path: './screenshot.png' });
  testInfo.retry;
  testInfo.error;
  // afterEachText=hello npx playwright test
  // anotherText=trying afterEachText=hello npx playwright test
  console.log(` =========== ${process.env.afterEachText}`);
  console.log(` =========== ${getTaskVariable("anotherText")}`);
});

});
