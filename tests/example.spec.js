// @ts-check

import { test, expect } from '@playwright/test';
import {login} from '../tests/pages/loginPage';


test('test', async ({ page }) => {
await login(page)
});