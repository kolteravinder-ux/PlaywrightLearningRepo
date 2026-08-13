import { test , expect} from '@playwright/test'
import path from 'path'
import { fileURLToPath } from 'url'

const URL = 'https://app.thetestingacademy.com/student/settings'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test.describe('File Upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
  })

  test('File Upload test', async ({ page }) => {
    const filepath = path.join(__dirname, 'testdata.txt')
    console.log('File Path: ', filepath)

    await page.setInputFiles('#file-upload', filepath)
    await page.locator('#file-submit').click()

    await page.pause()


  })
})