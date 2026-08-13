import {test, expect} from '@playwright/test';
import {LoginPage} from './LoginPage';

test.describe('POM Test Suite', ()=>{
let LP:LoginPage;

test.beforeEach('Before Each Test',async({page})=>{
LP = new LoginPage(page);

})

test('Login through POM', async({page})=>{

    await LP.goto();
    await LP.login("standard_user","tta_secret");

})


})
