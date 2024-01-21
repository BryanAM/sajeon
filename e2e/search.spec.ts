import { test, expect, } from '@playwright/test';

test('should do nothing when search is empty and we attempt to search an item', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL('http://localhost:8080')
});

test('should properly update search endpoint when submit fires study', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('searchbox').fill('study');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/study')
  await expect(page).toHaveTitle('Korean Dictionary Search Results For "study"');
});

test('should properly update search endpoint when submit fires 공부하다', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('searchbox').fill('공부하다');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL('http://localhost:8080/search/공부하다');
  await expect(page).toHaveTitle('Korean Dictionary Search Results For "공부하다"');
});


test('should load input when link is shared with endpoint 공부하다', async ({ page }) => {
  await page.goto('http://localhost:8080/search/공부하다');
  await expect(page.getByRole('searchbox')).toHaveValue('공부하다')
});

test('should load new input after link is shared with endpoint 공부하다 and searched to new endpoint "study"', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.getByRole('searchbox')).toHaveValue('');

  // navigate to new page with new search
  await page.getByRole('searchbox').fill('test');
  await expect(page.getByRole('searchbox')).toHaveValue('test')

  await Promise.all([
    page.getByTestId('search-desktop').waitFor(),
    page.getByTestId('search-desktop').click({force: true})
  ]);

  await page.keyboard.press('Enter');

  await expect(page).toHaveURL('http://localhost:8080/search/test')

  // input should also update
  await expect(page.getByRole('searchbox')).toHaveValue('test')

});
