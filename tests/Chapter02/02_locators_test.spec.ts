// import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('locators in playwright', async ({ page }) => {


    //goto url
    //await page.goto('https://github.com/BakkappaN');
    // getbyrole
    //await page.getByRole('link',{name: 'Sign in'}).click()

    //getbylabel
    //await page.getByLabel('Homepage',{exact : true}).first().click();

    //getbyalttext
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //getbytestid
    //await page.getByTestId("Repositories").first().click();
    //await page.getByTestId("projects").first().click();

    //getbytext
    //await page.getByText("Sign up").click();

    // getbyplaceholder,xpath, cssselectors
   // await page.goto('https://www.youtube.com/@testerstalk');
    //await page.getByPlaceholder('Search').fill('Testers talk');
    //await page.locator('//input[@name="search_query"]').fill('testers talk');
    //await page.locator('input[name="search_query"]').first().fill('testers talk');
    await page.goto('https://www.google.com/');
    await page.getByTitle('Search').fill('playwright by tester tyalk');
});