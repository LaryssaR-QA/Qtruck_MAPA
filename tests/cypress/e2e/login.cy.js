import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {

  it('Deve logar com sucesso', () => {
    const user = {
      name: 'LaryTeste',
      instagram: '@LaryMortis',
      password: '1234'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggeUser(user.name)
  })

  it('Não deve logar com senha incorreta', () => {
    const user = {
      instagram: '@LaryMortis',
      password: 'ERRO'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Não deve logar com Instagram inexistente', () => {
    const user = {
      instagram: '@LaryMortis',
      password: 'ERRO'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () =>{
    const user = {
      password: '1234'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatório', () =>{
    const user = {
      instagram: '@LaryMortis'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos devem ser obrigatório', () =>{
    const user = {}

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

})


