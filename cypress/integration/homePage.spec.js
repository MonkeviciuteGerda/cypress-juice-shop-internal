import HomePage from '../page-objects/homePage/homePage';

const homePage = new HomePage();

describe('Home Page', () => {
    it('should be able to visit home page', () => {
        cy.visit('/');
        cy.url().should('include', '#/');
    });

    it.skip('should be able to visit home page as logged in user', () => {
        cy.visit('/');
        cy.get('[data-cy="accountButton"]').click();
        cy.get('#navbarLoginButton').click();
        cy.get('#email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#loginButton').click();

        cy.get('[data-cy="accountButton"]').click();
        cy.get('[data-cy="userProfileButton"] span').should('contain.text', Cypress.env('email'));
    });

    it('should be able to login without UI', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'));

        cy.visit('/');
        cy.get('[data-cy="accountButton"]').click();
        cy.get('[data-cy="userProfileButton"] span').should('contain.text', Cypress.env('email'));
    });

    it('should be able to go to the second page', () => {
        let firstPagePaginatorText;
        let secondPagePaginatorText;

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.visit('/');

        homePage.getPaginationElement().then(($elem) => {
            firstPagePaginatorText = $elem.text();
        });

        homePage.openNextPage();

        homePage.getPaginationElement().should(($elem2) => {
            secondPagePaginatorText = $elem2.text();

            expect(firstPagePaginatorText).not.to.eq(secondPagePaginatorText);
            expect($elem2).to.contain.text('13 – 24 of');
        });
    });
});