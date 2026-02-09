import { Locator, Page } from "@playwright/test";

export class HomePage{

    readonly page: Page;
    readonly searchTextbox : Locator;
        readonly skip: Locator;
        readonly nothanks: Locator;

    constructor(page: Page) {
        this.page = page;

        this.searchTextbox = page.getByRole('combobox', { name: 'Search' });

         this.skip = page.getByRole('button', { name: 'Skip', exact: true });


         this.nothanks = page.getByRole('button', { name: 'No thanks' });


    }

    async goToURL(){
        await this.page.goto(`${process.env.YOUTUBE_URL}`);
    }

async searchwithkeywords(keyword: string){
   await this.searchTextbox.click();
    await this.searchTextbox.fill(keyword);
    await this.searchTextbox.press('Enter');

}

async clickOnSkip(){
    await this.skip.click();
}

async clickOnNoThanks(){
    await this.nothanks.click();    
}
}