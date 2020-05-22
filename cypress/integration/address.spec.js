import AddressPage from '../page-objects/address/addressPage';
import AssertAddressPage from '../page-objects/address/assertAddressPage';
import ApiRequests from '../utils/apiRequests';

const addressPage = new AddressPage();
const assertAddressPage = new AssertAddressPage();
const apiRequests = new ApiRequests();

const addressName = `Cypress random address name ${Math.floor(Math.random() * 10000000)}`;
const editAddressName = `Cypress random edit address name ${Math.floor(Math.random() * 10000000)}`;
const addressDetails = {
    country: 'Country',
    addressName: addressName,
    mobileNumber: '1111111111',
    zipCode: '11111',
    address: 'Address',
    city: 'City',
    state: 'State'
};

const addressDetailsInTable = {
    name: addressDetails.addressName,
    address: `${addressDetails.address}, ${addressDetails.city}, ${addressDetails.state}, ${addressDetails.zipCode}`,
    country: addressDetails.country
};

const editAddressDetails = {
    country: 'Country 2',
    addressName: editAddressName,
    mobileNumber: '2222222222',
    zipCode: '22222',
    address: 'Address 2',
    city: 'City 2',
    state: 'State 2'
};

const editedAddressDetailsInTable = {
    name: editAddressDetails.addressName,
    address: `${editAddressDetails.address}, ${editAddressDetails.city}, ${editAddressDetails.state}, ${editAddressDetails.zipCode}`,
    country: editAddressDetails.country
};

describe('Address page', () => {
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        addressPage.openAddressPage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce('token');
        Cypress.Cookies.preserveOnce('cookieconsent_status');
        Cypress.Cookies.preserveOnce('welcomebanner_status');
    });

    it('should be able to create new address', () => {
        addressPage.openAddressForm();
        addressPage.fillInAddressForm(addressDetails);
        addressPage.submitAddressForm();

        assertAddressPage.assertAddressTableLastRow(addressDetailsInTable);
    });

    it('should be able to edit existing address', () => {
        apiRequests.createAddress(addressDetails);
        cy.reload();

        addressPage.openLastAddressToEdit();
        cy.screenshot();
        addressPage.fillInAddressForm(editAddressDetails);
        addressPage.submitAddressForm();

        assertAddressPage.assertAddressTableLastRow(editedAddressDetailsInTable);
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });
});