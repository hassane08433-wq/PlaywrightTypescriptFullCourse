//import { test, expect } from '@playwright/test';

import { test } from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Implementing Fixture in Playwright', async ({ page }) => {

    //await page. setViewportSize({ width: 1280, height: 720 });



    console.log('Test execution started');

    // // creat object of HomePage

    const homePage = new HomePage(page);

    await homePage.goToURL();
    await homePage.searchwithkeywords(`${process.env.SEARCH_KEYWORDS}`);


    // //creat page object for ResultPage
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    await homePage.clickOnSkip();
   // await homePage.clickOnNoThanks();
    // //creat page object for PlaylistPage

    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`);

    console.log('Test execution ended');

});