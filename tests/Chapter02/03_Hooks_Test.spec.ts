// import playwright module
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Running before all test');
});
test.beforeEach(async ({page}) => {
    console.log('Running before each test');
    await page.goto('https://github.com/');
});

test.afterEach(async () => {
    console.log('Running after each test');
});

test.afterAll(async () => {
    console.log('Running after all tests...');
});

//write a test
test('Test 1', async ({ page }) => {
 console.log('Test1 Execution Started');

    //goto url
   // await page.goto('https://github.com/');

    //click signin
    await page.getByRole('link', { name: 'Sign in' }).click();

    //enter username & password
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
    await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

    //enter sign in
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Incorrect username or').click();
});

test('Test 2', async ({ page }) => {

console.log('Test2 Execution Started');
    //goto url
    //await page.goto('https://github.com/');

    //click signin
    await page.getByRole('link', { name: 'Sign in' }).click();

    //enter username & password
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
    await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('tester123');

    //enter sign in
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Incorrect username or').click();
});
