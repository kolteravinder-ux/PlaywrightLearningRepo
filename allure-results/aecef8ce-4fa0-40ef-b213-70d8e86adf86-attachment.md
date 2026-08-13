# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FileUpload\02_FUTask.spec.ts >> File Upload >> File Upload test
- Location: tests\FileUpload\02_FUTask.spec.ts:14:3

# Error details

```
Error: page.setInputFiles: Target page, context or browser has been closed
Call log:
  - waiting for locator('#file-upload')

```

# Test source

```ts
  1  | import { test , expect} from '@playwright/test'
  2  | import path from 'path'
  3  | import { fileURLToPath } from 'url'
  4  | 
  5  | const URL = 'https://app.thetestingacademy.com/student/settings'
  6  | const __filename = fileURLToPath(import.meta.url)
  7  | const __dirname = path.dirname(__filename)
  8  | 
  9  | test.describe('File Upload', () => {
  10 |   test.beforeEach(async ({ page }) => {
  11 |     await page.goto(URL)
  12 |   })
  13 | 
  14 |   test('File Upload test', async ({ page }) => {
  15 |     const filepath = path.join(__dirname, 'testdata.txt')
  16 |     console.log('File Path: ', filepath)
  17 | 
> 18 |     await page.setInputFiles('#file-upload', filepath)
     |     ^ Error: page.setInputFiles: Target page, context or browser has been closed
  19 |     await page.locator('#file-submit').click()
  20 | 
  21 |     await page.pause()
  22 |   })
  23 | })
```