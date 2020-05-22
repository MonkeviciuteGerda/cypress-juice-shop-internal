class AssertHomePage {
    getProduct(nth) {
        return cy.get('[data-cy="productCard"]').eq(nth);
    }

    getProductSoldOutLabel(nth) {
        return this.getProduct(nth).find('.ribbon-sold');
    }

    assertSoldOutLabelIsVisible(nth) {
        this.getProductSoldOutLabel(nth).should('be.visible');
    }
}

export default AssertHomePage;