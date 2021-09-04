import user from '../fixtures/user.json'

describe("Cas de tests passants de l'inscription directe d'un client", () => {

    beforeEach(() => {
        //visite du site
        cy.visit('https://www.mavillemonshopping.fr/')
        cy.url()
            .should('eq', "https://www.mavillemonshopping.fr/fr")
    })

    it("Inscription sans newsletter", () => {
        //clic sur je suis un client
        cy.get('[class="dropdown-sign-up"]')
            .contains('Je suis un client')
                .click({force:true})
        //vérification qu'on est sur la page d'inscription
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users/sign_up')

        cy.get('[id="user_email_sign_up"]')
            .type(user.email)
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwd)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwd)
        cy.get('[id="user_policy_rule_privacy_terms"]')
            .check()
                .should('be.checked')
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'on est plus sur l'inscription
        cy.wait(100)
        cy.url()
            .should('not.eq', 'https://www.mavillemonshopping.fr/fr/users/sign_up')
            .should('not.eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec newsletter", () => {
        //clic sur je suis un client
        cy.get('[class="dropdown-sign-up"]')
            .contains('Je suis un client')
                .click({force:true})
        //vérification qu'on est sur la page d'inscription
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users/sign_up')

        cy.get('[id="user_email_sign_up"]')
            .type(user.email2)
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwd)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwd)
        cy.get('[id="user_policy_rule_privacy_terms"]')
            .check()
                .should('be.checked')
        cy.get('[id="sign_up_customer]')
            .check()
                .should('be.checked')
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'on est plus sur l'inscription
        cy.wait(100)
        cy.url()
            .should('not.eq', 'https://www.mavillemonshopping.fr/fr/users/sign_up')
            .should('not.eq', 'https://www.mavillemonshopping.fr/fr/users')
    })
})