export default class AssertProductModal {
    getLastCommentText() {
        return cy.get('.comment p').last();
    }

    assertLastCommentText(text) {
        this.getLastCommentText().should('have.text', text);
    }
}