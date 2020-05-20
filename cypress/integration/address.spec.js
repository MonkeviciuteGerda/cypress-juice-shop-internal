const addressName = `Cypress random address name ${Math.floor(Math.random() * 10000000)}`;

describe('Address page', () => {
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.visit('/#/address/saved');
    });

    it('should be able to create new address', () => {
        cy.get('[data-cy="addNewAddressButton"]').click();
        cy.get('#address-form').within(() => {
            cy.get('input').eq(0).type('Country');
            cy.get('input').eq(1).type(addressName);
            cy.get('input').eq(2).type('1234567890');
            cy.get('input').eq(3).type('12345');
            cy.get('textarea').type('Address');
            cy.get('input').eq(4).type('City');
            cy.get('input').eq(5).type('State');
        });
        cy.get('[data-cy="addressSubmitButton"]').click();

        cy.get('[data-cy="addressTableRow"]').last().within(() => {
            cy.get('[data-cy="addressName"]').should('contain.text', addressName);
            cy.get('[data-cy="fullAddress"]').should('contain.text', 'Address, City, State, 12345');
            cy.get('[data-cy="country"]').should('contain.text', 'Country');
            cy.get('[data-cy="editAddressButton"]').should('be.visible');
            cy.get('[data-cy="deleteAddressButton"]').should('be.visible');
        });
    });
});