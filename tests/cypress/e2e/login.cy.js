
describe('Login', () => {

  it('Deve logar com sucesso', () => {
    const user = {
      name: 'LaryTeste',
      instagram: '@LaryMortis',
      password: '1234'
    }
    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('Não deve logar com senha incorreta', () => {
    const user = {
      instagram: '@LaryMortis',
      password: 'ERRO'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('Não deve logar com Instagram inexistente', () => {
    const user = {
      instagram: '@LaryMortis',
      password: 'ERRO'
    }
    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })
})


