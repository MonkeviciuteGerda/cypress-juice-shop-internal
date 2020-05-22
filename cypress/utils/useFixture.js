export default class UseFixture {
    itemSoldOut() {
        cy.server();
        cy.route('/api/Quantitys/', 'fixture:itemSoldOut.json').as('itemSoldOut');
    }
}