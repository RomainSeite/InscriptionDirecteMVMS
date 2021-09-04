import user from '../fixtures/user.json'

describe("Cas de tests non passants de l'inscription à cause de l'email", () => {

    beforeEach(() => {
        //visite de la page d'inscription
        cy.visit('https://www.mavillemonshopping.fr/fr/users/sign_up')
        cy.url()
            .should('eq', "https://www.mavillemonshopping.fr/fr/users/sign_up")

        //remplissage des champs hors email
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwd)
        cy.get('[id="user_password_confirmation"')
            .type(user.pwd)
        cy.get('[id="user_policy_rule_privacy_terms"]')
            .check()
                .should('be.checked')
    })

    /*******************
    **Début cas de tests
    ********************/
    it("Inscription avec un email déjà utilisé", () => { //cas 1
        cy.get('[id="user_email_sign_up"]')
            .type(user.emailAlreadyUsed)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un email au mauvais format", () => { //cas 2
        cy.get('[id="user_email_sign_up"]')
            .type(user.emailBadFormat)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un email qui contiendrait un caractère spécial interdit", () => { //cas 3
        cy.get('[id="user_email_sign_up"]')
            .type(user.emailSpecialCharacter)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })
})