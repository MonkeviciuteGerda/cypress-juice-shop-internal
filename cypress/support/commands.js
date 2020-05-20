Cypress.Commands.add("login", (email, password) => {
    const body = {
        email,
        password
      }

    cy.request({
        method: 'POST',
        url: '/rest/user/login',
        body,
    }).then((response) => {
        window.localStorage.setItem('token', response.body.authentication.token);
        cy.setCookie('token', response.body.authentication.token);
        cy.setCookie('cookieconsent_status', 'dismiss');
        cy.setCookie('welcomebanner_status', 'dismiss');
    });
})