
import {test, expect} from '@playwright/test'

test.describe("Handling SVG for MAP",()=>{




test.beforeEach("Before Test Case", async({page})=>{
console.log('Before Each test Block')
await page.goto('https://simplemaps.com/svg/country/in')



})

test('Fetching State Name and Clicking', async({page})=>{
const MapAbb={
    "INAN": "Andaman and Nicobar", 
    "INAP": "Andhra Pradesh", 
    "INAR": "Arunachal Pradesh", 
    "INAS": "Assam", 
    "INBR": "Bihar", 
    "INCH": "Chandigarh", 
    "INCT": "Chhattisgarh", 
    "INDH": "Dādra and Nagar Haveli and Damān and Diu", 
    "INDL": "Delhi", 
    "INGA": "Goa", 
    "INGJ": "Gujarat", 
    "INHP": "Himachal Pradesh", 
    "INHR": "Haryana", 
    "INJH": "Jharkhand", 
    "INJK": "Jammu and Kashmir", 
    "INKA": "Karnataka", 
    "INKL": "Kerala", 
    "INLA": "Ladakh", 
    "INLD": "Lakshadweep", 
    "INMH": "Maharashtra", 
    "INML": "Meghalaya", 
    "INMN": "Manipur", 
    "INMP": "Madhya Pradesh", 
    "INMZ": "Mizoram", 
    "INNL": "Nagaland", 
    "INOR": "Orissa", 
    "INPB": "Punjab", 
    "INPY": "Puducherry", 
    "INRJ": "Rajasthan", 
    "INSK": "Sikkim", 
    "INTG": "Telangana", 
    "INTN": "Tamil Nadu", 
    "INTR": "Tripura", 
    "INUP": "Uttar Pradesh", 
    "INUT": "Uttaranchal", 
    "INWB": "West Bengal"
}

let stateLocators = await page.locator("[class*='sm_state']").all()
let i=0
let StateClassValue :string| null =""
for(const stateClass of stateLocators){
 StateClassValue=   await stateClass.getAttribute('class')
    console.log(`State Class: ${StateClassValue}`)
   if(StateClassValue?.includes('INSK')){
    await stateClass.click()
    break
    }

}
//class="sm_state sm_state_INSK"

let StateSplitName = StateClassValue?.split(' ')

console.log('After Spliting:', StateSplitName?.[1])

console.log('After Spliting More :',StateSplitName?.[1]?.split('_')[2])

let StateAbb = StateSplitName?.[1]?.split('_')[2]
console.log("Actual State Abb value-",MapAbb['INSK'])

if (StateAbb) {
  console.log(MapAbb[StateAbb as keyof typeof MapAbb])
} else {
  console.log('State abbreviation not found')
}


})


})






