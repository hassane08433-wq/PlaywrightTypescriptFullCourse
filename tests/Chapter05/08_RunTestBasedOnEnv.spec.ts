import { test } from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

 test('Optimized Page object Model Test in Playwright', async ({ page, homePage, resultPage, playlistPage, testData }) => {





  console.log('Test execution started');

//     // // creat object of HomePage

//    //const homePage = new HomePage(page);

 await homePage.goToURL();

 await homePage.searchwithkeywords(String(testData.Module1TestData?.Skill1)  );

 await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1) );

 await homePage.clickOnSkip();
 
 await playlistPage.validatePageTitle(String(testData.Module1TestData?.Skill1) );

   
 console.log(`Skill: ${String(testData.Module1TestData?.Skill1)}`);
  console.log(`Skill: ${String(testData.Module1TestData?.Skill2)}`);
   console.log(`Skill: ${String(testData.Module1TestData?.Skill3)}`);


}
 );