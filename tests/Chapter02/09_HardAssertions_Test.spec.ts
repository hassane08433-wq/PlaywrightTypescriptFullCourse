// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Hard Assertions in Playwright', async ({ page }) => {


    //goto url
    await page.goto('https://www.youtube.com/');

    // Hard Assertions: Visible or not, editable or not, empty or not
    // await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
    // await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
    // await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
    // await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();

    //Soft Assertions: Verify URL, text, count
    await page.getByPlaceholder('Search', { exact: true }).first().click();
    await page.getByPlaceholder('Search', { exact: true }).first().fill('Playwright by Tester talk');
    await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+Tester+talk');



    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toHaveText('Playwright by Testers Talk ✅');


    await expect(page.locator('a[aria-label="Interview for playwright Automation Testing 2025 1 hour"]')).toHaveText('Interview for playwright Automation Testing 2025');
    //await expect(page.locator('a[aria-label="Interview for playwright Automation Testing 2025 1 hour"]')).toHaveCount(4);
   // await expect(page.locator('a[aria-label="Interview for playwright Automation Testing 2025 1 hour"]')).toBeDisabled();

}); 