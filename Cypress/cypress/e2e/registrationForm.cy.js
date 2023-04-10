import formPage from "../pages/formPage"

// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

describe('Verify Student Registration Form', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.viewport(1200, 1100)
      })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('TC-01', () => {
        formPage.submitForm ()
        formPage.elements.firstName().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        formPage.elements.lastName().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        formPage.elements.userNumber().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        formPage.elements.gender().should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.wait(2000)
    })
        
    it.only ('TC-02', () => {
        cy.fixture('inputData.json').then((data) => {
          formPage.textInput(data.firstName, data.lastName, data.email, data.number, data.address)
          formPage.elements.firstName().should('have.value', data.firstName)
          formPage.elements.lastName().should('have.value', data.lastName)
          formPage.elements.userEmail().should('have.value', data.email)
          formPage.elements.userNumber().should('have.value', data.number)
          formPage.elements.currentAddress().should('have.value', data.address)
          formPage.elements.gender().contains(data.gender).click()
          formPage.elements.inputDOB().click()
          formPage.elements.datePicker().should('be.visible')
          formPage.dob(data.yearDOB, data.monthDOB, data.dateDOB)
          formPage.subject(data.subject[0])
          formPage.subject(data.subject[1])
          formPage.elements.state().click()
          formPage.elements.stateOption().contains('Haryana').click({force:true})
          formPage.elements.city().click()
          formPage.elements.cityOption().contains('Karnal').click({force:true})
          formPage.elements.hobbies().click({multiple:true})
          formPage.elements.picture().selectFile('dogbutterfly.jpg', {force:true})
          formPage.submitForm()
          cy.get('.table-responsive').should('be.visible')
          cy.get('.table-responsive').contains(data.firstName + " " + data.lastName)
        })
        
      })

      it.only ('TC', () => {
        formPage.elements.picture().selectFile('dogbutterfly.jpg', {force:true})
      })
})



