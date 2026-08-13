import { test, expect } from '@playwright/test';
import userdata from './01_JsonFile.json' with { type: 'json' };
//or
//const userdata = require('./01_JsonFile.json');



test('read user data from JSON', async () => {


  expect(userdata).toBeDefined();
  expect(typeof userdata).toBe('object');
});
