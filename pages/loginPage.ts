import { Page,Locator } from "@playwright/test";
export default class loginPage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly profile:Locator;

    constructor(page:Page){
        this.page=page
        this.username=this.page.locator('//input[@id="session_key"]')
        //this.username=this.page.getByPlaceholder('session_key');
        this.password = this.page.locator('//input[@id="session_password"]')
        this.loginButton=this.page.locator('//button[@type="submit"]')
        //this.loginButton = this.page.getByRole('button', { name: 'Sign in' })
        this.profile=this.page.getByText("baba");
    }

    async enterUsername(strUser:string){
        await this.username.fill(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.password.fill(strPwd)
    }
    async clickLoginBtn() {
        await this.loginButton.click()
     }
     async verifyLogin(){
        await this.profile.getByTitle('Arun Wakekar')
     }
    // async validLogin(strUser: string, strPwd: string) {
    //     await this.enterUsername(strUser)
    //     await this.enterPassword(strPwd)
    //     await this.clickLoginBtn();
    // }
}
