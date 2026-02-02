import { test, expect } from '@playwright/test';

test('Popups in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
         console.log('dialog type is: ${dialog.type()}');
        
        console.log(`Alert Message: ${dialog.message()}`);
        await dialog.accept('playwright');  
    });

    //await page.getByRole('link', { name: 'See an example alert', exact: true }).click({button: 'left'});
    //something wron with this page

    await page.click('text=See an example alert');
});

test('confirmPopups in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
         console.log('dialog type is: ${dialog.type()}');
        dialog.dismiss();
        console.log(`Alert Message: ${dialog.message()}`);
    });

    await page.getByText('See a sample confirm', { exact: true }).click({ button: 'left' });
    //something wron with this page

   // await page.click('text=See an example alert');
});

test('Prompts in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
         console.log('dialog type is: ${dialog.type()}');
        dialog.dismiss();
        console.log(`Alert Message: ${dialog.message()}`);
       
    });

    await page.getByText('See a sample prompt', { exact: true }).click({ button: 'left' });
    //something wron with this page

   // await page.click('text=See an example alert');
});
