import { test, expect } from '@playwright/test';

test('Get text and get attribute value in Playwright', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');

// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
// await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  const name = await page.locator('[itemprop= "name"]').textContent();
  console.log(name);
  console.log(typeof name);
  console.log('name is: ' + name);
  const finalname = name?.trim();
  console.log('final name is:' + finalname);
  expect(finalname).toBe('Testers Talk');
  const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
  console.log('Attribute value is:' + attributeValue);
 // expect(attributeValue).toBe('repo_repositories repo_packages repo_projects repo_packages');
  // console.log('Attribute value is:' + attributeValue);
  // console.log(typeof attributeValue);
  

})