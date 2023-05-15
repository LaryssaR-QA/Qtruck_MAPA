import modal from '../components/Modal'

class LoginPage {

    constructor(){
        this.modal = modal
    }
    go(){
        cy.visit('/') 
    }
    form(user){
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password)cy.get('input[name=password]').type(user.password)
    }
    submit(){
        cy.contains('button','Entrar').click()
    }
}

class modalHaveText{
    go(){}
    form(){}
    submit(){}
}

export default new LoginPage() //class com funções poo