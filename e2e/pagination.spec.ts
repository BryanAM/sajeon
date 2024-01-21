import { test, expect } from '@playwright/test';
import { dataMock } from '@/__mocks__/dataMock';
test('Should display 10 results on first page', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await page.getByRole('searchbox').fill('study');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.route('*/**/api/words', async route => {
    const json = dataMock
    await route.fulfill({ json });
  });


  await expect(page).toHaveURL('http://localhost:8080/search/study')

  const articles = await page.getByRole('article').all()
  expect(articles.length).toBe(10);
});

test.skip('Should advance to next page when clicking Next pagination button', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('searchbox').fill('study');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.route('*/**/api/words', async route => {
    const json = dataMock
    await route.fulfill({ json });
  });


  await expect(page).toHaveURL('http://localhost:8080/search/study')


  await page.getByRole('link', { name: 'Go to next page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=2')
  const pageTwoLink = page.getByRole('link', { name: '2' })
  const ariaCurrentValue = await pageTwoLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");
});

test.skip('Should advance twice when clicking Next pagination button', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('searchbox').fill('study');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.route('*/**/api/words', async route => {
    const json = dataMock
    await route.fulfill({ json });
  });

  await expect(page).toHaveURL('http://localhost:8080/search/study')


  await page.getByRole('link', { name: 'Go to next page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=2')
  await page.getByRole('link', { name: 'Go to next page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=3')

  const pageThreeLink = page.getByRole('link', { name: '3' })
  const ariaCurrentValue = await pageThreeLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");
});


test.skip('Should advance directly to a specific page if we enter a unique URL', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('searchbox').fill('study');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.route(`${process.env.MONGODB_URI}`, async route => {
    const json = dataMock
    await route.fulfill({ json });
  });

  await expect(page).toHaveURL('http://localhost:8080/search/study')

  await page.goto('http://localhost:8080/search/study?page=7');

  const pageSevenLink = page.getByRole('link', { name: '7' })
  const ariaCurrentValue = await pageSevenLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");
});

test.skip('Should go back if we click the previous button N times', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('searchbox').fill('study');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study')

  await page.goto('http://localhost:8080/search/study?page=7');

  await page.getByRole('link', { name: 'Go to previous page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=6')
  const pageSixLink = page.getByRole('link', { name: '6' })
  let ariaCurrentValue = await pageSixLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");

  await page.getByRole('link', { name: 'Go to previous page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=5')
  const pageFiveLink = page.getByRole('link', { name: '5' })
  ariaCurrentValue = await pageFiveLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");

  await page.getByRole('link', { name: 'Go to previous page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=4')
  const pageFourLink = page.getByRole('link', { name: '4' })
  ariaCurrentValue = await pageFourLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");


  await page.getByRole('link', { name: 'Go to previous page' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study?page=3')
  const pageThreeLink = page.getByRole('link', { name: '3' })
  ariaCurrentValue = await pageThreeLink.getAttribute('aria-current');
  expect(ariaCurrentValue).toBe("page");
});