class formPage {
    elements = {
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        userEmail: () => cy.get('#userEmail'),
        userNumber: () => cy.get('#userNumber'),
        currentAddress: () => cy.get('#currentAddress'),
        gender: () => cy.get('#genterWrapper .col-md-9 .custom-control-label'),
        inputDOB: () => cy.get('#dateOfBirthInput'),
        datePicker: () => cy.get('.react-datepicker'),
        yearDOB: () => cy.get('.react-datepicker__year-select'),
        monthDOB: () => cy.get('.react-datepicker__month-select'),
        dateDOB: () => cy.get('.react-datepicker__day'),
        subject: () => cy.get('.subjects-auto-complete__value-container'),
        subjectOption: () => cy.get('.subjects-auto-complete__option')

    }

    checkboxes = {
        hobbies: () => cy.get('#hobbiesWrapper :nth-child(2) .custom-control-label'),
    }

    buttons = {
        submit: () => cy.get('#submit'),
    }

    submitForm () {
        this.buttons.submit().click();
    }

    textInput (firstName, lastName, email, number, address) {
        this.elements.firstName().type(firstName).should('have.value', firstName);
        this.elements.lastName().type(lastName).should('have.value', lastName);
        this.elements.userEmail().type(email).should('have.value', email);
        this.elements.userNumber().type(number).should('have.value', number);
        this.elements.currentAddress().type(address).should('have.value', address);  
    }

    dob (year, month, date) {
        this.elements.yearDOB().select(year)
        this.elements.monthDOB().select(month)
        this.elements.dateDOB().contains(date).click()
    }

    subject (subject) {
        this.elements.subject().type(subject)
        this.elements.subjectOption().click()
    }
}

module.exports = new formPage