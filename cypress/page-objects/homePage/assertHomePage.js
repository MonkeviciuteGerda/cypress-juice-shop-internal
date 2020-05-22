import AssertProductModal from './assertProductModal';

class AssertHomePage {
    get assertProductModal() {
        return new AssertProductModal();
    }

    getProduct(nth) {
        return cy.get('[data-cy="productCard"]').eq(nth);
    }

    getProductSoldOutLabel(nth) {
        return this.getProduct(nth).find('.ribbon-sold');
    }

    assertSoldOutLabelIsVisible(nth) {
        this.getProductSoldOutLabel(nth).should('be.visible');
    }

    assertLastCommentText(text) {
        this.assertProductModal.assertLastCommentText(text);
    }
}

export default AssertHomePage;