import { test, expect } from '@playwright/test';

// test('Popups in Playwright Test', async ({ page }) => {
//     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

//     page.once('dialog', async (dialog) => {
//         await dialog.accept();
//         console.log(`Alert Message: ${dialog.message()}`);
//     });

//     //await page.getByRole('link', { name: 'See an example alert', exact: true }).click({button: 'left'});
//     //something wron with this page

//     await page.click('text=See an example alert');
// });

test('Popups in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.dismiss();
        console.log(`Alert Message: ${dialog.message()}`);
    });

    await page.getByText('See an example alert', { exact: true }).click({ button: 'left' });
    //something wron with this page

   // await page.click('text=See an example alert');
});
