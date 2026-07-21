import{test, expect} from '@playwright/test'

test('Task for Select Dropdown', async({page})=>{

await page.goto("https://www.makemytrip.com/flights/?cmp=SEM|D|DF|G|Brand|Brand-BrandExact_DT|B_M_Makemytrip_Search_Exact|RSA&gad_source=1&gad_campaignid=13978388&gbraid=0AAAAAD5Az1T2OCujrUsYNBmmFtbG7osIl&gclid=CjwKCAjwsfzSBhB5EiwAOGyqSWx82lQieaZToOzmVMeYx-Ubzh9AjCeA3Erg61LSKf47flDmEANOmRoCcngQAvD_BwE")
await page.pause()

await page.getByText('Flights Flights').click()




})