beforeEach(() => {
  cy.fixture("constants").then((constants) => {
    cy.visit(constants.BASE_URL);
    cy.generateBoard(constants.DEFAULT_BOARD_SIZE);
  });
});

afterEach(() => {
  cy.reload();
});

describe("Tic-tac-toe board gameplay tests", () => {
  it("identifies when player X wins and shows the appropriate dialog", () => {
    const winningPlayer = "X";

    cy.playWinningXGame();

    cy.get("[id=endgame]").should("be.visible");

    cy.fixture("constants").then((constants) => {
      cy.get("[id=endgame]")
        .invoke("text")
        .should(
          "eq",
          constants.WIN_MESSAGE_PREFIX +
            winningPlayer +
            constants.WIN_MESSAGE_SUFFIX
        );
    });
  });

  it("identifies when player O wins and shows the appropriate dialog", () => {
    const winningPlayer = "O";

    cy.playWinningOGame();

    cy.get("[id=endgame]").should("be.visible");

    cy.fixture("constants").then((constants) => {
      cy.get("[id=endgame]")
        .invoke("text")
        .should(
          "eq",
          constants.WIN_MESSAGE_PREFIX +
            winningPlayer +
            constants.WIN_MESSAGE_SUFFIX
        );
    });
  });

  it("shows the appropriate dialog for a tie game", () => {
    cy.playTieGame();

    cy.get("[id=endgame]").should("be.visible");

    cy.get("[id=endgame]").invoke("text").should("eq", "It's a tie! Refresh to play again.");
  });
});
