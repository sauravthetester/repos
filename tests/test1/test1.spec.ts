import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../login';

test.describe('Amazon Test', {
  annotation: { type: 'Amazon', description: 'report' },
}, () => {


test('amazon', async () => {

  const page2:Page = await LoginPage.getPage();

  await page2.goto('https://amazon.com/');
});
});
