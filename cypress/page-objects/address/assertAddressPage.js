class AssertAddressPage {
    getLastRowNameColumn() { 
        return cy.get('[data-cy="addressTableRow"]').last().get('[data-cy="addressName"]'); 
    }

    getLastRowAddressColumn() { 
        return cy.get('[data-cy="addressTableRow"]').last().get('[data-cy="fullAddress"]'); 
    }

    getLastRowCountryColumn() { 
        return cy.get('[data-cy="addressTableRow"]').last().get('[data-cy="country"]'); 
    }

    getLastRowEditColumn() { 
        return cy.get('[data-cy="addressTableRow"]').last().get('[data-cy="editAddressButton"]'); 
    }
    
    getLastRowDeleteColumn() { 
        return cy.get('[data-cy="addressTableRow"]').last().get('[data-cy="deleteAddressButton"]'); 
    }
 
    assertAddressTableLastRow(details) {
        this.getLastRowNameColumn().should('contain.text', details.name);
        this.getLastRowAddressColumn().should('contain.text', details.address);
        this.getLastRowCountryColumn().should('contain.text', details.country);
        this.getLastRowEditColumn().should('be.visible');
        this.getLastRowDeleteColumn().should('be.visible');
    }
}

export default AssertAddressPage;