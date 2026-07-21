import{test, expect} from '@playwright/test'

test('TC#1: Verify App.vwo login is not working and providing error', async({page})=>{
await page.goto('https://app.vwo.com/#login')


//Default Locators
//id, name, className, tag, custom locators (via CSS selector)

//CSS
// ID :  #id value
//classname: .classNamevalue
//name : [name="value"]
//tag => [tag]
const usernameInputbox= page.locator('#login-username')
const signinbutton= page.locator('#js-login-btn')
await usernameInputbox.fill('abcd@snbd.com')
await signinbutton.click()

const errormessage= page.locator('#js-notification-box-msg')

await expect (errormessage).toContainText('Your email, password, IP address or location did not match')


})




