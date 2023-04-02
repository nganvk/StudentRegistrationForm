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
    })

    it('TC-02', () => {
        cy.fixture('inputData.json').then((data) => {
          formPage.textInput(data.firstName, data.lastName, data.email, data.number, data.address)
          formPage.elements.gender().contains(data.gender).click()
          formPage.elements.inputDOB().click()
          formPage.elements.datePicker().should('be.visible')
          formPage.dob(data.yearDOB, data.monthDOB, data.dateDOB)
          formPage.elements.inputDOB().should('have.value', 0+data.dateDOB.concat(" ", (data.monthDOB).slice(0,3), " ", data.yearDOB))
          formPage.subject(data.subject[0])
          formPage.subject(data.subject[1])
        })
        formPage.checkboxes.hobbies().click({multiple:true})
        formPage.submitForm()
      })
})

