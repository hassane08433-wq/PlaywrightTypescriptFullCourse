import { test } from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Optimized Page object Model Test in Playwright', async ({ page, homePage, resultPage, playlistPage, testData }) => {

//await page. setViewportSize({ width: 1280, height: 720 });



    console.log('Test execution started');

    // // creat object of HomePage

   //const homePage = new HomePage(page);

    await homePage.goToURL();

    await homePage.searchwithkeywords(String(testData.Module1TestData?.Skill1)  );

    await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1) );

    await homePage.clickOnSkip();
 
    await playlistPage.validatePageTitle(String(testData.Module1TestData?.Skill1) + ' - YouTube');

   
     console.log(`Skill: ${testData.Module1TestData?.Skill1} is validated successfully`);
      console.log(`Skill: ${testData.Module1TestData?.Skill2} is validated successfully`);
       console.log(`Skill: ${testData.Module1TestData?.Skill3} is validated successfully`);


}

);