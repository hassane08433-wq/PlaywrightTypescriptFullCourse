import { test, expect } from '@playwright/test';

test('Handling Popups in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
         console.log('dialog type is: ${dialog.type()}');
       dialog.accept('playwright');
        console.log(`Alert Message is: ${dialog.message()}`);
    });

    //await page.getByRole('link', { name: 'See an example alert', exact: true }).click({button: 'left'});
    //something wron with this page

    await page.click('text=See an example alert');
    await page.getByText('See an example alert ', { exact: true }).click({ button: 'left' });
});

test('confirmPopups in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        console.log('dialog type is: ${dialog.type()}');
        //await dialog.accept();
       //dialog.dismiss is for pressing cancel button on screen
        //and dialog.accept is for clicking ok button on screen
        dialog.dismiss();
        console.log(`Alert Message: ${dialog.message()}`);
    });

    await page.getByText('See a sample confirm', { exact: true }).click({ button: 'left' });
    //something wron with this page

    // await page.click('text=See an example alert');
});

test('HandlingPrompts pop ups in Playwright Test', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {

        //asyn is used here to return some text value on browser
        
        console.log(`Alert Message: ${dialog.message()}`);
        await dialog.accept('playwright');  
        console.log('dialog type is: ${dialog.type()}');

    });

    await page.getByText('See a sample prompt', { exact: true }).click({ button: 'left' });
    //dialog .type dont work correctly here in this code

   
});
