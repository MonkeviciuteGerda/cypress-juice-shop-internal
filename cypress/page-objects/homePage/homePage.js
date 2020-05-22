import ProductModal from './productModal';

class HomePage {
    get productModal() {
        return new ProductModal();
    };

    getPaginationElement() {
        return cy.get('div.mat-paginator-range-label');
    }

    getNextPageButton() {
        return cy.get('button[aria-label="Next page"]');
    }

    getProduct(nth) {
        return cy.get('[data-cy="productCard"]').eq(nth);
    }

    openNextPage() {
        this.getNextPageButton().click();
    }

    openProduct(nth) {
        this.getProduct(nth).click();
    }

    expandProductReviews() {
        this.productModal.expandProductReviews();
    }

    closeProductModal() {
        this.productModal.closeProductModal();
    }
}

export default HomePage;