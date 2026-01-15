import { test, expect } from '@playwright/test';

test('Record Test', async ({ page }) => {

await test.step('Navigating to url', async()=>{

  await page.goto('https://github.com/');
  
});
await test.step('Entering Username', async()=>{
await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  
  
});

await test.step('Entering Password', async()=>{

   await page.getByRole('textbox', { name: 'Password' }).fill('test123');
 
});

await test.step('Press Sign in', async()=>{
 await page.getByRole('button', { name: 'Sign in', exact: true }).click();
 
  
});

await test.step('Expecting', async()=>{
await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  
});




  
  
});