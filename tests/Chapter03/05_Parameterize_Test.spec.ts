import { test, expect } from '@playwright/test';

const searchkeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk'];
for (const searchkeyword of searchkeywords) {

    test(`Parameterize Test in playwright ${searchkeyword}`, async ({ page }) => {
        await page.goto('https://www.youtube.com/');

        await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
        await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(searchkeyword);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        await page.getByRole('tab', { name: 'Playlists' }).click();
        await page.getByRole('link', { name: searchkeyword }).first().click();
        //await page.getByRole('button', { name: 'Skip', exact: true }).click();
        //   await page.getByRole('button', { name: 'No thanks' }).click();
        //   await page.getByRole('button', { name: 'Pause keyboard shortcut k' }).click();
    })
};