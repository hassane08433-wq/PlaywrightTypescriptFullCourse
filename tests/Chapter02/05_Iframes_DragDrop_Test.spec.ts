// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Handling', async ({ page }) => {
  

//goto url
await page.goto('https://jqueryui.com/droppable/');

const iframe = page.frameLocator('[class="demo-frame"]')
// Drag Element, Drop Element css selector
const dragElement = iframe.locator('[id = "draggable"]');
  const dropElement = iframe.locator('[id = "droppable"]');
  await dragElement.dragTo(dropElement);

});
