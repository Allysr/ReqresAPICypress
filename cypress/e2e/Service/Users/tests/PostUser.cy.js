import * as postUser from "../requests/POSTUser.request";

describe("Post User", () => {
  it("Deve criar um novo usuário", () => {
    postUser.createUsers().then((response) => {
      cy.log(response.status);
      cy.log(response.body);
      expect(response.body.name).to.eq("morpheus");
    });
  });
});
