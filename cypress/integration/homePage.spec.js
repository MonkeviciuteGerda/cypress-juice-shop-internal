describe('Home Page', () => {
    it('should be able to visit home page', () => {
        cy.visit('/');
        cy.url().should('include', '#/');
    });

    it('should be able to visit home page as logged in user', () => {
        cy.visit('/');
        cy.get('[data-cy="accountButton"]').click();
        cy.get('#navbarLoginButton').click();
        cy.get('#email').type('jane.doe@test.com');
        cy.get('#password').type('jane.doe');
        cy.get('#loginButton').click();

        cy.get('[data-cy="accountButton"]').click();
        cy.get('[data-cy="userProfileButton"] span').should('contain.text', 'jane.doe@test.com');
    });
});