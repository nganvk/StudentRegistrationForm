import formPage from '../pages/formPage'
describe('template spec', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
      })
      it('TC01', () => {
        formPage.typeName ('Ngan', 'Vong')
  })

  
  it.only('test', () => {
    formPage.elements.inputDOB().click()
    formPage.elements.dateDOB().each((element) => {
      let dateName = element.text()
      if (dateName == '1') {
        cy.get(':nth-child(1) > .react-datepicker__day--001').click()
      }
    })
    cy.get('#state').click()
  })
})