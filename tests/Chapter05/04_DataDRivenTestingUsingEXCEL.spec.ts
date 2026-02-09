import { test, expect } from '@playwright/test';

import path from 'path';

import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');

const records = readExcelFile(filePath);
/**
 * *Author Testers Talk
 */


for (const record of records) {
    // const skill = record;


    test('Data Driven Testing Using Excel File in playwright : ' + record.Skill1, async ({ page }) => {
        await page.goto(`https://www.youtube.com`);
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        await page.getByRole('link', { name: record.Skill1 }).first().click();

    });


    test('Test2' + record.Skill2, async ({ page }) => {
        await page.goto(`https://www.youtube.com`);


        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill2);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        await page.getByRole('link', { name: record.Skill2 }).first().click();

    });
}