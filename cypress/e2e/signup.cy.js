describe('SignUp', () => {
  it('Launch App and Sign Up ', () => {
    cy.visit('http://192.168.0.3:4200/#/Signup')
    cy.get("input[placeholder='Enter Your CNIC']").type('1234567891055')
    cy.get("input[placeholder='Enter Your Mobile Number").type('+923172618578')
    cy.get("input[placeholder='Enter Your Account No").type('zanbeel-b3b63bb')
    cy.get("div > button").click()

    cy.get("button[class='col-lg-12 btn btn-primary TrnBtn']").click()

    // cy.intercept('POST', '/api/send-otp', (req) => {
    //   req.reply({
    //     statusCode: 200,input[id='customer.firstName']
    //     body: { otp: '123456' } // Mock OTP value
    //   });
    // });

    // cy.get("div[class='otp-field'] input:nth-child(1)").type("1")
    // cy.get("input:nth-child(2)").type("2")
    // cy.get("input:nth-child(3)").type("3")
    // cy.get("input:nth-child(4)").type("4")
    // cy.get("input:nth-child(5)").type("5")


 //   cy.get('div.otp-field input[type="text"][maxlength="1"]').input('12345')

    cy.get('div.otp-field input[type="text"]').each(($input, index, $list) => {
      // Example: Type '1', '2', '3', etc. into each input
      cy.wrap($input).type((index + 1), {force: true});
    });
  

    cy.get("button[class='col-lg-12 btn btn-primary TrnBtn']").click()
  
  })
})