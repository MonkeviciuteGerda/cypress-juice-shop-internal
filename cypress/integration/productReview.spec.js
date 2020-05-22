import ServerRequests from '../utils/serverRequests';
import HomePage from '../page-objects/homePage/homePage';
import AssertHomePage from '../page-objects/homePage/assertHomePage';

const serverRequests = new ServerRequests();
const homePage = new HomePage();
const assertHomePage = new AssertHomePage();

const reviewText = `Cypress random review text ${Math.floor(Math.random() * 10000000)}`;

describe('Product Reviews', () => {
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce('token');
        Cypress.Cookies.preserveOnce('cookieconsent_status');
        Cypress.Cookies.preserveOnce('welcomebanner_status');
    });

    it('should be able to see product review written by another user', () => {
        serverRequests.postProductReview(Cypress.env('buyerUsername'), Cypress.env('buyerPassword'), reviewText, 1);
        cy.visit('/');

        homePage.openProduct(0);
        homePage.expandProductReviews();
        assertHomePage.assertLastCommentText(reviewText);
        homePage.closeProductModal();
    });
});