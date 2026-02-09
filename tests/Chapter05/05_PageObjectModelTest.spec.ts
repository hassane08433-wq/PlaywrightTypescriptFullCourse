import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Page object Model Test Playwright', async ({ page }) => {

    console.log('Test execution started');

    // // creat object of HomePage

    const homePage = new HomePage(page);

    await homePage.goToURL();
    await homePage.searchwithkeywords(`${process.env.SEARCH_KEYWORDS}`);


    // //creat page object for ResultPage
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    await homePage.clickOnSkip();
    await homePage.clickOnNoThanks();
    // //creat page object for PlaylistPage

    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`);


}

);