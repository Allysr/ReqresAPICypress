import * as getBooks from "../requests/GETBooks.request";

describe("GET Books", () => {
  it("Listar todos os livros", () => {
    getBooks.allBooks().then((response) => {
      cy.log(response.status);
      cy.log(response.statusText);
      cy.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null
    });
  });
});
