import { expect, test, type Page, type BrowserContext } from '@playwright/test';

// just testing Playwright, run with npm run test:playwright

test.describe('Template happy path', async () => {
	test.describe.configure({ mode: 'serial' });
	test.beforeEach(() => test.setTimeout(10000));
	let context: BrowserContext;
	let page: Page;
	test.beforeAll(async ({ browser }) => {
		// Create a shared context and page for the entire test suite
		context = await browser.newContext();
		page = await context.newPage();
	});

	test('going to index', async () => {
		await page.goto('/');
	});

	test('that index page has expected h1', async () => {
		await expect(page.getByRole('heading', { name: 'React+Vite template', level: 1 })).toBeVisible();
  });
  
  test('that index page has expected h2', async () => {
		await expect(page.getByRole('heading', { name: 'This is a template that includes Generouted, UnoCSS, Typescript, Redux, Jotai, Vitest and Playwright.', level: 2 })).toBeVisible();
	});

});
