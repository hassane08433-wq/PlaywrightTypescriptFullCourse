import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";
import { PlaylistPage } from "../pages/PlaylistPage";


export const test = base.extend<{

    savelogs: void;
    homePage: HomePage;
    resultPage: ResultPage;
    playlistPage: PlaylistPage;
}>({
    savelogs: [async ({ }, use) => {
        // before test
        console.log("Global Before is running");
        await use();
        console.log("Global AfterEach is running");

    },
    { auto: true }],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    resultPage: async ({ page }, use) => {
        const resultPage = new ResultPage(page);
        await use(resultPage);
    },
    playlistPage: async ({ page }, use) => {
        const playlistPage = new PlaylistPage(page);
        await use(playlistPage);
    },

});

export { expect } from "@playwright/test";
