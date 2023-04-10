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
        subjectOption: () => cy.get('.subjects-auto-complete__option'),
        hobbies: () => cy.get('#hobbiesWrapper :nth-child(2) .custom-control-label'),
        picture: () => cy.get('#uploadPicture'),
        state: () => cy.get('#state'),
        submit: () => cy.get('#submit'),
        stateOption: () => cy.get('[id^="react-select-3"]'),
        city: () => cy.get('#city'),
        cityOption: () => cy.get('[id^="react-select-4"]')

    }


    submitForm () {
        this.elements.submit().click();
    }

    textInput (firstName, lastName, email, number, address) {
        this.elements.firstName().type(firstName);
        this.elements.lastName().type(lastName);
        this.elements.userEmail().type(email);
        this.elements.userNumber().type(number);
        this.elements.currentAddress().type(address);  
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