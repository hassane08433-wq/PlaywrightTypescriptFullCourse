import { test, expect } from '@playwright/test';

test('Get text and get attribute value in Playwright', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');

// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

 // const repositorylinks = await page.locator('.repo');
 const repositorylinks = await page.$$('.repo');
for( const repositorylink of repositorylinks){
  const linktext = await repositorylink.textContent();
  console.log('Repository link text 1st loop is: ' + linktext);
}


console.log('===========================================================');

for(let i=0; i< await repositorylinks.length; i++){
    const linktext = await repositorylinks[i].textContent();
    console.log('Repository link text using 2nd for loop is: ' + linktext);
}


// console.log('===========================================================');

// for(let i=0; i< repositorylinks.length; i++){
//     const linktext = await repositorylinks.nth(i).textContent();
//     console.log('Repository link text using 3rd for loop is: ' + linktext);
// }
//   nth loop is not working

})