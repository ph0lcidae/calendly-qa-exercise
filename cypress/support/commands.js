// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("generateBoard", (size) => {
  cy.fixture("constants").then((constants) => {
    const boardSize = size;

    cy.get("input[id=number]").type(boardSize);
    cy.contains(constants.GENERATE_BUTTON).click();
  });
});

// borrowed from https://stackoverflow.com/questions/58593525/how-to-trigger-a-click-outside-event
Cypress.Commands.add("clickOutside", () => {
  return cy.get("body").click(0, 0); //0,0 here are the x and y coordinates
});

Cypress.Commands.add("clickCell", (x,y) => {
    cy.get(`[data-column=${y}][data-row=${x}]`).click();
});

Cypress.Commands.add("getCellValue", (x,y) => {
    return cy.get(`[data-column=${y}][data-row=${x}]`).invoke("text");
})

Cypress.Commands.add("playWinningXGame", () => {
    // left-to-right diagonal win for X
    cy.clickCell(1,1);
    cy.clickCell(0,2);
    cy.clickCell(0,0);
    cy.clickCell(2,0);
    cy.clickCell(2,2);
});

Cypress.Commands.add("playWinningOGame", () => {
    // middle column win for O
    cy.clickCell(0,0);
    cy.clickCell(0,1);
    cy.clickCell(0,2);
    cy.clickCell(1,1);
    cy.clickCell(1,0);
    cy.clickCell(2,1);

});

Cypress.Commands.add("playTieGame", () => {
    cy.clickCell(0,0);
    cy.clickCell(0,1);
    cy.clickCell(0,2);
    cy.clickCell(1,1);
    cy.clickCell(1,2);
    cy.clickCell(1,0);
    cy.clickCell(2,0);
    cy.clickCell(2,2);
    cy.clickCell(2,1);
});
