// Cách bắt element: bắt = DOM, 
import formPage from '../pages/formPage'
// Test suite/scenrario
describe('template spec', () => {
//Để ko phải visit mỗi lần chạy 1 test case
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })
// Do trang web này có nhiều error uncaught, nên xài code để ignore:
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

  // Test case 01
  it('TC01', () => {

  // cy: cypress
  // visit: direct to link
    // cy.visit('https://demoqa.com/automation-practice-form')
  // Get div,  id thì dấu #, class là dấu .
    // cy.get('#firstName').type('Ngan').should('have.value', 'Ngan')
    // cy.get('#lastName').type('Vong').should('have.value', 'Vong')
    formPage.typeName ()


  })
  })

    // cy.get('#userName-wrapper').type('Ngan');
    // cy.wait(1000) //1000 là 1s, wait khi thực hiện xong 1 bước
    // cy.contains('Date of Birth').should('be.visible') //selector là text thì sử dụng contain này
    // cy.get('#lastName').type('Vong')
    // cy.viewport(1824, 1200)

// viết testcase và viết automation test:
// - Deadline test case: Friday
// - Deadline test script: 12pm Sunday.

//page o