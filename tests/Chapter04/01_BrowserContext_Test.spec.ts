import { test, expect } from '@playwright/test';

test('Multiple Browser/Tabs in Playwright Test', async ({ page, browser }) => {
  await page.goto('https://www.youtube.com/');

// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('tab', { name: 'Playlists' }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
 //await page.getByRole('button', { name: 'No thanks' }).click();




 const context2 = await browser.newContext();

  const page2 = await context2.newPage();


  
  await page2.goto('https://www.youtube.com/');
  await page2.getByRole('combobox', { name: 'Search' }).click();
  await page2.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page2.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page2.getByRole('tab', { name: 'Playlists' }).click();
  await page2.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await page2.getByRole('button', { name: 'Skip', exact: true }).click();
 //await page2.getByRole('button', { name: 'No thanks' }).click();


const newtab = await context2.newPage();
await newtab.goto('https://www.youtube.com/');
await newtab.getByRole('combobox', { name: 'Search' }).click();
  await newtab.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await newtab.getByRole('combobox', { name: 'Search' }).press('Enter');
  await newtab.getByRole('tab', { name: 'Playlists' }).click();
  await newtab.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  //await newtab.getByRole('button', { name: 'Skip', exact: true }).click();
  

 
});