export default class ProductModal {
    getExpandReviewsElement() {
        return cy.get('[aria-label="Expand for Reviews"]');
    }

    getCloseProductModalButton() {
        return cy.get('[aria-label="Close Dialog"]');
    }

    expandProductReviews() {
        this.getExpandReviewsElement().click();
    }

    closeProductModal() {
        this.getCloseProductModalButton().click();
    }
}