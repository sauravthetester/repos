import { test, expect } from '@playwright/test';
import { afterEach } from 'node:test';



test('has title', async ({ page }) => {
  test.step('step1', async () => {
  await page.goto('https://www.flipkart.com/');
  });
  await page.getByPlaceholder('Search for Products, Brands and More').fill('mouse');
  await page.locator('//button[@title="Search for Products, Brands and More"]').click();
  await page.getByRole('link',{ name : 'Login' }).click();
  await page.mouse.move(0,120);
  await page.getByRole('button', {name : 'Request OTP'}).click();
  await expect(page.locator('//form/div/input[@type="text"]/following-sibling::span/span')).toBeVisible();
  await expect(page.locator('//form/div/input[@type="text"]/following-sibling::span/span')).toHaveText('Please enter valid Email ID/Mobile number');
  await expect(page.getByText('Please enter valid Email ID/Mobile numberiii')).toBeVisible();
  // await expect(page.getByText('Please enter valid Email ID/Mobile number')).toBeVisible();

});

// 
test('has title2', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByTitle('Cart').filter({ has: page.getByRole('img')}).click();
  await page.getByText('Missing Cart items?').waitFor({state: 'visible', timeout: 10000});
  await expect(page.getByText('Missing Cart items?')).toBeVisible();
  await page.mouse.move(0,120);
  await page.locator('button:below(:text("Missing Cart items?"))').screenshot();
  await page.locator('button:below(:text("Missing Cart items?"))').click();
  await expect(page.getByRole('button', {name : 'Request OTP'})).toBeEnabled();
  await expect(page.locator('span:text("Login"):above(:text("Get access to your Orders, Wishlist and Recommendations"))')).toBeVisible();
});

// write
afterEach
