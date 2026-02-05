import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string,
        Skill3: string
    },
    TestDataSet2: {
        Skill1: string,
        //usually ppl make comma mistake in env and typetestdata files
        Skill2: string,
        Skill3: string
    }
}
const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];


    test('Data Driven Testing Using JSON File in playwright : ' + skill.Skill1, async ({ page }) => {
        await page.goto(`https://www.youtube.com`);
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        await page.getByRole('link', { name: skill.Skill1 }).click();
    
    });

    test('Data Driven Testing Using JSON File  : ' + skill.Skill2, async ({ page }) => {
        await page.goto(`https://www.youtube.com`);


        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill2);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        await page.getByRole('link', { name: skill.Skill2 }).click();
    }

    );


}