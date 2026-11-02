import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  use: { baseURL: 'http://127.0.0.1:4173', browserName: 'chromium', launchOptions: { ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] } },
  webServer: { command: 'python3 -m http.server 4173 --directory out', url: 'http://127.0.0.1:4173', reuseExistingServer: false, timeout: 30000 },
});
