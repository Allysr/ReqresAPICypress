/// <reference types="cypress" />

const allBooks = () => {
    return cy.request({
        method: "GET",
        url: 'users/'
    })
}

export {allBooks}
