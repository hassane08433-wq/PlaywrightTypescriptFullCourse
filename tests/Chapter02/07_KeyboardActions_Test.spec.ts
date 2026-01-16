// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Keyboard Actions in the playwright', async ({ page }) => {


  //goto url
  await page.goto('https://www.youtube.com/');

  //You can use both getbyrole or get by placeholder
  //await page.getByRole('combobox', { name: 'Search' }).getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('tester stalk');

  // await page.getByRole('combobox', { name: 'Search' }).fill('tester stalk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Tester talk');
  
  //Page.keyboard is new command
  await page.keyboard.press('Control+a');
  await page.keyboard.press('Delete');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');



  //click signin 

});
