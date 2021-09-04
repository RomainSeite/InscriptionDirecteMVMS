import user from '../fixtures/user.json'

describe("Cas de tests non passants de l'inscription car police de vie privée du site non cochée", () => {

    beforeEach(() => {
        //visite de la page d'inscription
        cy.visit('https://www.mavillemonshopping.fr/fr/users/sign_up')
        cy.url()
            .should('eq', "https://www.mavillemonshopping.fr/fr/users/sign_up")
    })

    /*******************
    **Début cas de tests
    ********************/
    it("Inscription sans avoir coché ", () => {
        cy.get('[id="user_email_sign_up"]')
            .type(user.email)
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwd)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwd)
        cy.get('[id="user_cityletter_acceptance"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })
})