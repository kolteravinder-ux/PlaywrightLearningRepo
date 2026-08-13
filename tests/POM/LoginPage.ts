import {type Page,type Locator,expect} from '@playwright/test';

export class LoginPage{

   readonly page:Page;
   readonly emailInput:Locator;
   readonly passwordInput:Locator;
   readonly loginButton:Locator;


   constructor(page:Page){
      this.page=page;
      this.emailInput=page.getByTestId("username")
                          .or(page.getByRole("textbox", { name: "Username" }))
                          .or(page.locator("#user-name"))
                          
      this.passwordInput=page.getByTestId("password")
                             .or(page.getByRole("textbox", { name: "Password" }))
                             .or(page.locator("#password"))

      this.loginButton=page.getByTestId("login-button")
                           .or(page.getByRole("button", { name: "Login" }))
                           .or(page.locator("#login-button"));
   }


 async goto(){
    await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
 }

 async login(username:string,password:string){
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
 }  


}