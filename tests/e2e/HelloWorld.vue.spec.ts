import { test, expect } from '@playwright/test';
  
  test('HelloWorld.vue renders correctly', async ({ page }) => {
    await page.goto('http://localhost:5173');
    
  await expect(page.getByText("count is 0", { exact: false })).toBeVisible();
  await expect(page.getByText("Edit components/HelloWorld.vue to test HMR", { exact: false })).toBeVisible();
  });
  