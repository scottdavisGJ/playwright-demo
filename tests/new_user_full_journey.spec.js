import { test } from '@playwright/test';
import { ProductsPage } from '../page-objects/ProductsPage.js';
import { Navigation } from '../page-objects/Navigation.js';

test.only('New user full end-to-end test journey', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.visit();
  await productsPage.addProductToBasket(0);
  await productsPage.addProductToBasket(1);
  await productsPage.addProductToBasket(2);
  const navigation = new Navigation(page);
  await navigation.goToCheckout();
  await page.pause();
});
