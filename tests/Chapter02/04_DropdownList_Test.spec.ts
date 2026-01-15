// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Handling Dropdown List in Playwright', async ({ page }) => {


    //goto url
    await page.goto('https://www.facebook.com/');

    //Select Dropdown using value
    await page.getByRole('button', { name: 'Create new account' }).click();

    await page.getByLabel('Month').selectOption('3');
    //Select Dropdown using visible text
    await page.getByLabel('Month').selectOption('Oct');
    //Validate all the options using cssselector

    await expect(page.locator('#month > Option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
});
