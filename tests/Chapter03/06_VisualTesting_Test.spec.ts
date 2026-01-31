import { test, expect } from '@playwright/test';

// test('Page comparison in Playwright', async ({ page }) => {

//     await page.goto('https://github.com/login');

//     await expect(page).toHaveScreenshot('gitHubloginpage.png');

//    // await page.locator('[class="form-control js-login-field"]').fill('Tester123');
//    //await page.locator('#login_field').fill('Tester123');


//     await expect(page).toHaveScreenshot('gitHubloginpage.png');
// })


test('Element comparison in Playwright', async ({ page }) => {

    await page.goto('https://github.com/login');
    
    //const element= page.locator('[class="form-control js-login-field"]',{ name: 'Login' }, {type: 'text'});

     const element = page.locator('[id="login_field"]');

   // const element = page.getByRole('textbox', { name: 'Username or email address' });
    await expect(page).toHaveScreenshot('GitHubLoginForm.png');


    await element.fill('Tester123');
 
    await expect(element).toHaveScreenshot('GitHubLoginForm.png');

});
