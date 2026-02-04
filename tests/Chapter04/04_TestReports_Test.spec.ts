// import playwright module
import { test, expect } from '@playwright/test';

test.describe('regression testing', () => {
    //write a tes
    test('Test1', async ({ page }) => {

        console.log('Test Execution Started..')
        //goto url
        await page.goto('https://github.com/');

        //click signin
        await page.getByRole('link', { name: 'Sign in' }).click();

        //enter username & password
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
        await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

        //enter sign in
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('Incorrect username or')).toHaveText('Incorrect username or password.');

    })

    test('Test2', async ({ page }) => {

        console.log('Test Execution Started..')
        //goto url
        await page.goto('https://github.com/');

        //click signin
        await page.getByRole('link', { name: 'Sign in' }).click();

        //enter username & password
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
        await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

        //enter sign in
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('Incorrect username or')).toHaveText('Incorrect username or password.');

    })

})

test.describe('smoke testing', () => {
    test('Test3', async ({ page }) => {

        console.log('Test Execution Started..')
        //goto url
        await page.goto('https://github.com/');

        //click signin
        await page.getByRole('link', { name: 'Sign in' }).click();

        //enter username & password
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
        await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

        //enter sign in
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('Incorrect username or')).toHaveText('Incorrect username or password.');

    })

    test('Test2', async ({ page }) => {

        console.log('Test Execution Started..')
        //goto url
        await page.goto('https://github.com/');

        //click signin
        await page.getByRole('link', { name: 'Sign in' }).click();

        //enter username & password
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
        await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
        await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

        //enter sign in
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('Incorrect username or')).toHaveText('Incorrect username or password.');

    })


})