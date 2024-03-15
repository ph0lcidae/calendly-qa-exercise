beforeEach(() => {
  cy.fixture("constants").then((constants) => {
    cy.visit(constants.BASE_URL);
    cy.generateBoard(constants.DEFAULT_BOARD_SIZE);
  });
});

afterEach(() => {
  cy.reload();
});

describe("Tic-tac-toe board interaction tests", () => {
  it("places a symbol in a box on click", () => {
    cy.clickCell(0,0);
    cy.getCellValue(0,0).should("eq", "X");
  });

  it("does not place a symbol in a box on click outside the game board", () => {
    cy.get("table").clickOutside();
  });

  it("alternates between turns for players X and O", () => {
    cy.clickCell(0,0);
    cy.getCellValue(0,0).should("eq", "X");

    cy.clickCell(0,1);
    cy.getCellValue(0,1).should("eq", "O");

    cy.clickCell(0,2);
    cy.getCellValue(0,2).should("eq", "X");
  });

  it("does not allow a symbol to be changed once it is placed", () => {
    cy.clickCell(0,0);
    cy.getCellValue(0,0).should("eq", "X");

    // just do it twice!
    cy.clickCell(0,0);
    cy.getCellValue(0,0).should("eq", "X");
  });
});
