// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Mouse Actions in Playwright', async ({ page }) => {


    //goto url
   
    await page.goto('https://www.youtube.com/@testerstalk');
   // await page.locator('yt-formatted-string').filter({ hasText: '#1 Playwright Automation' }).getByRole('link').click({button: "left"});
//await page.locator('yt-formatted-string').filter({ hasText: '#1 Playwright Automation' }).getByRole('link').click({button: "middle"});
//await page.locator('yt-formatted-string').filter({ hasText: '#1 Playwright Automation' }).getByRole('link').click({button: "right"});
//mouse hover
//await page.getByRole('button', { name: 'Search with your voice' }).hover();
await page.getByRole('button', { name: 'Search with your voice' }).dblclick();



});
