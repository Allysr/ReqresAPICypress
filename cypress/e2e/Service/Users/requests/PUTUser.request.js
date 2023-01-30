/// <reference types="cypress"/>

const updateUser = require("../payloads/updateUser.json");

const changeUser = (userId) => {
  return cy.request({
    method: "PUT",
    url: `users/${userId}`,
    body: updateUser
  });
};

export {changeUser}
