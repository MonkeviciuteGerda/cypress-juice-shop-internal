const addressName = `Cypress random address name ${Math.floor(Math.random() * 10000000)}`;
const editAddressName = `Cypress random edit address name ${Math.floor(Math.random() * 10000000)}`;


describe('Address page', () => {
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.visit('/#/address/saved');
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce('token');
        Cypress.Cookies.preserveOnce('cookieconsent_status');
        Cypress.Cookies.preserveOnce('welcomebanner_status');
    });

    it('should be able to create new address', () => {
        cy.get('[data-cy="addNewAddressButton"]').click();
        cy.get('#address-form').within(() => {
            cy.get('input').eq(0).type('Country');
            cy.get('input').eq(1).type(addressName);
            cy.get('input').eq(2).type('1111111111');
            cy.get('input').eq(3).type('11111');
            cy.get('textarea').type('Address');
            cy.get('input').eq(4).type('City');
            cy.get('input').eq(5).type('State');
        });
        cy.get('[data-cy="addressSubmitButton"]').click();

        cy.get('[data-cy="addressTableRow"]').last().within(() => {
            cy.get('[data-cy="addressName"]').should('contain.text', addressName);
            cy.get('[data-cy="fullAddress"]').should('contain.text', 'Address, City, State, 11111');
            cy.get('[data-cy="country"]').should('contain.text', 'Country');
            cy.get('[data-cy="editAddressButton"]').should('be.visible');
            cy.get('[data-cy="deleteAddressButton"]').should('be.visible');
        });
    });

    it('should be able to edit existing address', () => {
        const token = window.localStorage.getItem('token');
        const body = {
            country: 'Country',
            fullName: addressName,
            mobileNum: 2222222222,
            zipCode: '22222',
            streetAddress: 'Address',
            city: 'City',
            state: 'State'
          }

        cy.request({
            method: 'POST',
            url: '/api/Addresss/',
            body,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        cy.reload();

        cy.get('[data-cy="addressTableRow"]').last().find('[data-cy="editAddressButton"]').click();
        cy.get('#address-form').within(() => {
            cy.get('input').eq(0).clear().type('Country');
            cy.get('input').eq(1).clear().type(editAddressName);
            cy.get('input').eq(2).clear().type('1111111111');
            cy.get('input').eq(3).clear().type('11111');
            cy.get('textarea').clear().type('Address');
            cy.get('input').eq(4).clear().type('City');
            cy.get('input').eq(5).clear().type('State');
        });
        cy.get('[data-cy="addressSubmitButton"]').click();

        cy.get('[data-cy="addressTableRow"]').last().within(() => {
            cy.get('[data-cy="addressName"]').should('contain.text', editAddressName);
            cy.get('[data-cy="fullAddress"]').should('contain.text', 'Address, City, State, 11111');
            cy.get('[data-cy="country"]').should('contain.text', 'Country');
            cy.get('[data-cy="editAddressButton"]').should('be.visible');
            cy.get('[data-cy="deleteAddressButton"]').should('be.visible');
        });
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });
});