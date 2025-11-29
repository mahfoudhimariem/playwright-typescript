import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {    

const baseURL = 'https://qatraining.fr/pages/features/login.html';

test('should succesfully with valid credentiels', async ({ page }) => {
await page.goto(baseURL);
await page.fill('#username', 'mariem');
await page.fill('#password', 'mariem123');
await page.click('//button[normalize-space()="Se connecter"]');

    });






});