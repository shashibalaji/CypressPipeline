describe('User', () => {
    it('should be able to navigate', () => {
        cy.visit('/');
        cy.title().should('eq', 'Software Test Academy');
    });

    it('should be able to open automation category', () => {
        cy.visit('/category/test-automation/');
        cy.title().should('eq', 'Test Automation Archives');
    });
});
