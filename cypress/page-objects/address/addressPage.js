import AddressForm from './addressForm';

class AddressPage {
    get addressForm() {
        return new AddressForm();
    }

    getAddNewAddressButton() {
        return cy.get('[data-cy="addNewAddressButton"]');
    }

    getSubmitAddressButton() {
        return cy.get('[data-cy="addressSubmitButton"]');
    }

    getLastRowEditButton() {
        return cy.get('[data-cy="addressTableRow"]').last().find('[data-cy="editAddressButton"]');
    }

    openAddressPage() {
        cy.visit('/#/address/saved');
    }

    openAddressForm() {
        this.getAddNewAddressButton().click();
    }

    fillInAddressForm(details) {
        this.addressForm.fillInAddressForm(details);
    }

    submitAddressForm() {
        this.getSubmitAddressButton().click();
    }

    openLastAddressToEdit() {
        this.getLastRowEditButton().click();
    }
}

export default AddressPage;