export default class WaitForRequests {
    waitForProductsList() {
        cy.server();
        cy.route('/rest/products/search?q=').as('productsList');
    }
}