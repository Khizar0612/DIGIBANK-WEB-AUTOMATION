describe('Login', ()=>{
    it('Login Function', ()=>{
        cy.visit('http://192.168.0.3:4200/#/login')
        cy.get("input[placeholder='Enter Your User Name']").type('khizarSaeed')
        cy.get("input[placeholder='Enter Your Password']").type('aassdd12345')
        cy.get(".fa.fa-bicycle").click()
//      cy.get("").click()

    })
}) 


