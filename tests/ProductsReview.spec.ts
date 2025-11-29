import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductReviewPage } from '../pages/ProductReviewPage';

test('Add review on product', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const productReviewPage = new ProductReviewPage(page);

  await homePage.goto();
  await homePage.clickProducts();
  await productsPage.clickViewProductButton();
  await productReviewPage.isWriteReviewVisible();

  
  await productReviewPage.submitReview('Test User','Test@yahoo.fr','Product OK');

  await productReviewPage.expectReviewSuccess();
});
