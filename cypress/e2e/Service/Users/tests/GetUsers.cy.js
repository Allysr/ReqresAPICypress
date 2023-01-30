import * as getUsers from "../requests/GETUsers.request";

describe("GET all users", () => {
  it("Listar todos os usuarios", () => {
    getUsers.allUsers().then((response) => {
      cy.log(response.status);
      cy.log(response.statusText);
      cy.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null
    });
  });
});
