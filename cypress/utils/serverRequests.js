export default class ServerRequests {
    postProductReview(username, password, text, productId) {
        cy.request(`http://localhost:8081/connect?username=${username}&password=${password}`);
        cy.request(`http://localhost:8081/postProductReview?username=${username}&text=${text}&productId=${productId}`);
        cy.request('http://localhost:8081/disconnect');
    }
}