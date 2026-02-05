// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Working on checkbox and radio button', async ({ page }) => {  
  

//goto url
await page.goto('https://jqueryui.com/checkboxradio/');

const iframe = page.frameLocator('[class="demo-frame"]')
// Drag Element, Drop Element css selector
//await expect(iframe.locator('[id = "radio-1"]').isChecked()).not.toBeChecked().toBeTruthy();

await iframe.locator('[for = "radio-1"]').first().check();
await expect(iframe.locator('[id = "radio-1"]').isChecked()).toBeTruthy();
//   const dropElement = iframe.locator('[id = "droppable"]');
//   await dragElement.dragTo(dropElement);

});
