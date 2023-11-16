import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		// default config to run build and run preview, but slow so using dev instead 😇
		// command: 'npm run build && npm run preview',
		// port: 4173
		command: 'npm run dev',
		port: 5173,
		reuseExistingServer: !process.env.CI,
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
		{
			name: 'desktop',
			use: {
				headless: false,
			},
		},
	],
};

export default config;
