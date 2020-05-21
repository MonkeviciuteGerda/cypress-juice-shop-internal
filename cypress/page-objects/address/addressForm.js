export default class AddressForm {
    getCountryInput() { 
        return cy.get('#address-form input').eq(0); 
    }

    getNameInput() { 
        return cy.get('#address-form input').eq(1); 
    }

    getMobileNumberInput() { 
        return cy.get('#address-form input').eq(2); 
    }

    getZipCodeInput() { 
        return cy.get('#address-form input').eq(3); 
    }

    getAddressTextarea() { 
        return cy.get('#address-form textarea').eq(0); 
    }

    getCityInput() { 
        return cy.get('#address-form input').eq(4); 
    }

    getStateInput() { 
        return cy.get('#address-form input').eq(5); 
    }

    fillInAddressForm(details) {
        this.getCountryInput().clear().type(details.country);
        this.getNameInput().clear().type(details.addressName);
        this.getMobileNumberInput().clear().type(details.mobileNumber);
        this.getZipCodeInput().clear().type(details.zipCode);
        this.getAddressTextarea().clear().type(details.address);
        this.getCityInput().clear().type(details.city);
        this.getStateInput().clear().type(details.state);
    }
}