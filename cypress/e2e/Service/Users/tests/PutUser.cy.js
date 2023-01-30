import * as putUser from "../requests/PUTUser.request";
import * as getUser from "../requests/GETUsers.request";

describe("Put user ", () => {
  it("Deve atualizar a informação de um usuario", () => {
    getUser.allUsers().then((resAllUser) => {
      putUser.changeUser(resAllUser.body.data[0].id).should((teste) => {
        expect(teste.status).to.be.eq(200)
      })
      });
    });
  });

