// describe('Internet Banking Application Tests', () => {
//     it('should fetch and use data from CBS', () => {
//       cy.fetchDataFromDatabase('SELECT * FROM users WHERE id = 1').then((userData) => {
//         const user = userData[0];
//         cy.visit('https://your-internet-banking-app.com/login');
  
//         cy.get('#username').type(user.username);
//         cy.get('#password').type(user.password);
//         cy.get('#loginButton').click();
  
//         // Perform additional checks after logging in
//         cy.url().should('include', '/dashboard');
//         cy.contains('Welcome, ' + user.username).should('be.visible');
//       });
//     });
//   });
  