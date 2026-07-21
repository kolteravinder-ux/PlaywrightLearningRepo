import{test, expect} from '@playwright/test'

test('Verify Select Dropdown', async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")

await page.pause()
await page.getByTestId('dropdown-language').click()
await page.getByRole('option', { name: 'JavaScript' }).click()

await page.getByTestId('framework-trigger').click()
await page.getByRole('option', { name: 'Vue' }).click()


await page.getByTestId('experience-trigger').click()
await page.getByRole('option', { name: 'Mid-level (4-6 years)' }).click()


})