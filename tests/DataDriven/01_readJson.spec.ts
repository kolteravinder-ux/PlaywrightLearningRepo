import {test,expect} from '@playwright/test'
import userData from './Sample.json' with {type:'json'}

test.describe("Read Json data",()=>{

test('Read Json data',async({page})=>{

    console.log(userData.id)
    console.log(userData.name)
    console.log(userData.roles[0])
    console.log(userData.address.city)

})

})