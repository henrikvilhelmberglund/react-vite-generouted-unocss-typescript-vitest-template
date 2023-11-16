Syntax

    test('going to Duck Painting detail page', async () => {
    	const link = page.getByText('Duck painting');
    	await link.click();
    });

    test('that we are in /product/1', async () => {
    	await page.waitForNavigation();
    	const url = page.url();
    	expect(url).toContain('/products/1');
    });

    test('clicking add to cart button twice', async () => {
    	const addToCartButton = page.getByText('Add to cart');
    	expect(addToCartButton).toBeTruthy(); // Check if the button is found
    	for (let i = 0; i < 2; i++) {
    		await addToCartButton.click();
    	}
    });
    test('clicking view cart', async () => {
    	const main = page.getByRole('main');
    	const viewCartLink = main.getByText('View cart');
    	await viewCartLink.click();
    });

    test('that we are in /cart', async () => {
    	await page.waitForNavigation();
    	const url = page.url();
    	expect(url).toContain('/cart');
    });

    test('that Duck Painting is in the cart', async () => {
    	const article = page.getByRole('article');
    	const name = article.getByRole('heading', { name: 'Duck painting', level: 3 });
    	expect(name).toBeVisible(); // Check if the button is found
    });

    test('that amount of Duck painting is 2', async () => {
    	const amount = await page.locator('id=Duck-painting-amount').textContent();
    	expect(amount).toBe('2'); // Check if the button is found
    });

    test('clicking + once', async () => {
    	const plus = page.getByText('+');
    	await plus.click();
    });

    test('that amount of Duck painting is 3', async () => {
    	const amount = await page.locator('id=Duck-painting-amount').textContent();
    	expect(amount).toBe('3'); // Check if the button is found
    });
