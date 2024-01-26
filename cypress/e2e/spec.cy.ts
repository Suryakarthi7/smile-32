 
/*it('threelinepass', () =>{
  cy.get("[data-cy='report-intro']").click();
})*/ 
describe('template spec', () => {
it('urlpass', () =>{
  cy.visit('http://localhost:3000/');
  cy.wait(5000);
 // cy.get("[data-cy='report-intro']").click();
 cy.get("[data-cy='title']").should('contain', 'Smile 32 Dental Care');
 cy.wait(10000);
 cy.get("[data-cy='form']").click();
 cy.get("[data-cy='name']").type('surya');
 cy.get("[data-cy='phoneNumber']").type('1234567890');
 cy.get("[data-cy='email']").type('www.google.com');
 cy.get("[data-cy='submit']").click();
 cy.wait(5000);
 cy.scrollTo('bottom');
 cy.get("[data-cy='address']").should('contain', 'Address');
})
  
})