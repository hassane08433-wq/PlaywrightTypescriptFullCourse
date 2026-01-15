// import playwright module
import { test, expect } from '@playwright/test'

//write a test
test('Capture screenshots in Playwright', async ({ page }) => {
  

//goto url
await page.goto('https://www.youtube.com/@testerstalk');
  
// element screenshot
await page.locator('#page-header-banner').screenshot({path: './Screenshots/ElementsScreenshot.png'});

// page screenshot

await page.screenshot({path: './Screenshots/PageScreenshot.png'});

// full page screenshot


await page.screenshot({path: './Screenshots/FulllpageScreenshot.png',fullPage:true});


})
