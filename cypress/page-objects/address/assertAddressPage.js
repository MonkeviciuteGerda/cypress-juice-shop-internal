import AssertAddressForm from './assertAddressForm';

class AssertAddressPage {
    get assertAddressForm() {
        return new AssertAddressForm();
    }

    assertAddressTableLastRow(details) {
        this.assertAddressForm.assertAddressTableLastRow(details);
    }
}

export default AssertAddressPage;