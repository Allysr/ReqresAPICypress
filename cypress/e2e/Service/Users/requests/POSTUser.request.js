/// <reference types="cypress" />

const payloadsUser = require("../payloads/createUser.json");

function createUsers() {
  return cy.request({
    method: "POST",
    url: "users/",
    body: payloadsUser,
  });
}

export {createUsers}