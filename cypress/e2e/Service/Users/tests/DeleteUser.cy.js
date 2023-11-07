import * as deleteUser from "../requests/DELETEUser.request";
import * as getUser from "../requests/GETUsers.request";
import * as postUser from "../requests/POSTUser.request";

describe("Delete User", () => {
  it("Deve deletar o usuário com o id correspondente", () => {
    getUser.allUsers().then((resAllUser) => {
      deleteUser.deleteUser(resAllUser.body.data[0].id).should((response) => {
        expect(response.status).to.be.eq(204);
      });
    });
  });

  it("Criar e excluir um usuario", () => {
    postUser.createUsers().then((resAddUser) => {
      deleteUser.deleteUser(resAddUser.body.id).should((resDeleteUser) => {
        expect(resDeleteUser.status).to.eq(204);
      });
    });
  });
});
