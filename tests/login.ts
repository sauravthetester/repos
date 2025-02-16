import { test, expect, type Page,chromium, firefox } from '@playwright/test';

export class LoginPage {


    public static async getPage() : Promise<Page> {
        const browser = await firefox.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        return page;
    }

}