import {test as setup} from '@playwright/test';

setup('do something', async ({page}) => {
  console.log(' =========== setup');
  process.env.SAR='playwrightEnv1';
});