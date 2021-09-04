import user from '../fixtures/user.json'

describe("Cas de tests non passants de l'inscription à cause du mot de passe", () => {

    beforeEach(() => {
        //visite de la page d'inscription et mise en mémoire des ID des différents éléments du DOM pour utilisation
        cy.visit('https://www.mavillemonshopping.fr/fr/users/sign_up')
        cy.url()
            .should('eq', "https://www.mavillemonshopping.fr/fr/users/sign_up")

        //remplissage des champs hors mot de passe
        cy.get('[id="user_email_sign_up"]')
            .type(user.email)
        cy.get('[id="user_policy_rule_privacy_terms"]')
            .check()
                .should('be.checked')
    })

    /*******************
    **Début cas de tests
    ********************/
    it("Inscription avec un mot de passe trop court (<8)", () => { //cas 1
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwdTooShort)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwdTooShort)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un mot de passe trop long (>70)", () => { //cas 2
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwdTooLong)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwdTooLong)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un mot de passe sans majuscule", () => { //cas 3
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwdNoCaps)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwdNoCaps)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un mot de passe sans minuscule", () => { //cas 4
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwdNoLowerCase)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwdNoLowerCase)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un mot de passe sans chiffre", () => { //cas 5
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwdNoNumber)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwdNoNumber)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec un mot de passe sans caractère spécial", () => { //cas 6
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwdNoSpecial)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwdNoSpecial)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })

    it("Inscription avec une mauvaise confirmation", () => { //cas 7
        cy.get('[id="user_password_sign_up"]')
            .type(user.pwd)
        cy.get('[id="user_password_confirmation"]')
            .type(user.pwd2)
        cy.get('[id="new_user"]')
            .submit()
        //vérification qu'il y a eu un problème
        cy.wait(100)
        cy.url()
            .should('eq', 'https://www.mavillemonshopping.fr/fr/users')
    })
})