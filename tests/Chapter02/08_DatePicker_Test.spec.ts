// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Selecting date value in Playwright', async ({ page }) => {


    //goto url
    await page.goto('https://jqueryui.com/datepicker/');
    //hardcoded date
    const iframe = page.frameLocator('[class="demo-frame"]');
    // await iframe.locator('[id="datepicker"]').fill('12/15/2024');

    //selecting dynamic date
    //await iframe.locator('[id="datepicker"]').click();
    //await iframe.locator('.ui-datepicker-today').click();

    //selecting past date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="15"').click();

    //selecting future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();


}); 
