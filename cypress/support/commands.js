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
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});