/// <reference types="cypress" />

export const allBooks = () => {
    return cy.request({
        method: "GET",
        url: 'users/'
    })
}

