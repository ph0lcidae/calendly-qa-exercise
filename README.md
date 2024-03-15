# Tic-Tac-Toe Test Suite

### Links to Manual Reports and Screencast

[Loom screencast](https://www.loom.com/share/8b7ee8a5fc2a4da6a45322a7a18b14bf?sid=fc2772cc-38b9-48ba-bdb2-67743ec65f42)

[Bug report spreadsheet](https://docs.google.com/spreadsheets/d/1KfQQykLgc3dmk2b3uq1AXINas8EsMhZ44D4eWQT4UEo/edit?usp=sharing)

### Setup

You'll need Node.js version 18 or higher, and the latest version of either Chrome or Firefox (or both).

These tests depend on [Cypress](https://www.cypress.io). You can install it with the following command:
```
npm install cypress --save-dev
```

### Running the tests

You can either use the Cypress GUI (see [here](https://docs.cypress.io/guides/getting-started/opening-the-app) for instructions) or use the following commands at the command line:

###### Run all tests
```
npm run cy:run
```

###### Run a specific test suite
```
npm run cy:run -- --spec "path/to/test/file"
```

###### Run tests on Chrome

```
npm run cy:run:chrome
```

###### Run tests on Firefox

```
npm run cy:run:firefox
```

### Adding tests

If you'd like to add tests, you can add a new spec in `cypress/e2e` with the format `TestSuiteName.cy.js`.

---

# Notes

This is a pretty simple test suite for a pretty simple app, and I made a few decisions that merit pointing out as I might have done them differently in a more complex situation:

1. I opted to leave some hard-coded selectors in as they were only used once. In most situations I'd avoid hard-coding as much as possible, but in this case it was a readability tradeoff and made it easier to see what the test is doing.

2. The tic-tac-toe board cells each have their own IDs, but I opted to select on row and column for similar reasons - it made for much more readable test code and much more consistent helper functions.

3. The division of cases into suites is a little contrived, but mostly done to illustrate division of concerns. I figured the app has 3 overarching functions: board generation, board interaction, and gameplay. 

Given more time and a real-world app, I would probably have also written some automation to deal with XSS and CSRF testing, as well as trying to automate a few simple accessibility cases. I would also have probably written a small performance or load test suite with a tool like [Artillery](https://www.artillery.io/).