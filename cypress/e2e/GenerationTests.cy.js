beforeEach(() => {
  cy.fixture("constants").then((constants) => {
    cy.visit(constants.BASE_URL);
  });
});

afterEach(() => {
  cy.reload();
});

describe("Tic-tac-toe board generation tests", () => {
  it("generates a 3x3 board", () => {
    cy.generateBoard("3");
    cy.get("table").find("tr").its("length").should("eq", 3);
    cy.get("table").find("tr").find("td").its("length").should("eq", 9);
  });

  it("generates a board larger than 3x3", () => {
    cy.generateBoard("5");
    cy.get("table").find("tr").its("length").should("eq", 5);
    cy.get("table").find("tr").find("td").its("length").should("eq", 25);
  });

  it("provides an error message for non-numeric input", () => {
    cy.generateBoard("to boldly split infinitives where no infinitives have been split before");
    cy.contains("Please enter a whole number.").should("exist");
  });

  it("provides an error message for no input", () => {
    cy.generateBoard(" ");
    cy.contains("Please enter a whole number.").should("exist");
  })

  it("implements a maximum input length", () => {
    cy.get("input[id=number]").invoke("attr", "maxlength").should("exist");
  });

  it("only generates a board once", () => {
    cy.fixture("constants").then((constants) => {
        cy.generateBoard("3");
        cy.contains(constants.GENERATE_BUTTON).click();
        cy.get("table").find("tr").its("length").should("eq", 3);
    });
  });

  it("clears the screen on reload", () => {
    // this is a little redundant but for consistency's sake

    cy.generateBoard("3");
    cy.reload();
    cy.get("table").find("tr").should("not.exist");
  })
});
