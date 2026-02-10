import { test } from '../../src/fixture/TestFixture';
import { PlaylistPage } from '../../src/pages/PlaylistPage';
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Page object Model Test Playwright', async ({ page, homePage, resultPage, playlistPage }) => {

//await page. setViewportSize({ width: 1280, height: 720 });



    console.log('Test execution started');

    // // creat object of HomePage

   //const homePage = new HomePage(page);

    await homePage.goToURL();

    await homePage.searchwithkeywords(`${process.env.SEARCH_KEYWORDS}`);

    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    await homePage.clickOnSkip();
 
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`);


}

);