import { test } from '@playwright/test';
import { ProductPage } from './page-objects/ProductPage';

test.only('New user full end-to-end test journey', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  productsPage.visit();
});
