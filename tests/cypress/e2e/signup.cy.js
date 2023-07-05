import SignupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('Deve cadastrar um novo usuário', ()=> {

        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'pwd123'
        }
        cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => {
            cy.log(res);
        });//comando do banco de dados usando o yarn

        SignupPage.go()
        SignupPage.form(user)
        SignupPage.submit()

        SignupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })


})