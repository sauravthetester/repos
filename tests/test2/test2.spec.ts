import { test, expect } from '@playwright/test';

test.describe('Flipkart Test', {
  annotation: { type: 'Flipkart', description: 'report' },
}, () => {


test('flipkart', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');
  await page.locator('.Pke_EE00').click();
});
});