class HomePage {
    getPaginationElement() {
        return cy.get('div.mat-paginator-range-label');
    }

    getNextPageButton() {
        return cy.get('button[aria-label="Next page"]');
    }

    openNextPage() {
        this.getNextPageButton().click();
    }
}

export default HomePage;