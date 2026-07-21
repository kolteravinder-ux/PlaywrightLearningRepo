import{test, expect} from '@playwright/test'
//test and expect is interface


test('Verify the title', async({page})=>{
await page.goto('https://app.vwo.com/')
await expect(page).toHaveTitle('Login - Wingify')
//page= Fixture(Injected by playwright)
})


test.skip('Skipped Test', async({page})=>{
//This test is skipped
})

//only run the test case
test.only('focused test', async({page})=>{
//only this test is run
})

//Mark fail this test case
test.fail('expected to fail', async({page})=>{
//test case will marked failed
})

//slow test(3X timeout)
test.slow('slow test', async({page})=>{
//has extended timeout
})

//Conditional skip
test('conditonal', async({page})=>{
test.skip(browserName==='firefox', 'Not supported in firefox')
})