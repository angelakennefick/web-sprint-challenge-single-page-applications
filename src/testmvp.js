describe("Pizza app", () => {
  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const orderButton = () => cy.get('button[id="order-button"]');
  
  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); // not strict (==)
    expect({}).to.eql({}); // strict (===)
  });

  it("the proper elements are showing on the screen", () => {
    nameInput().should("exist");
    cy.get('input[name="foobar"]').should("not.exist");
    emailInput().should("exist");
    orderBtn().should("exist");
    cy.contains("Add to Order");
    cy.contains(/Add to Order/i);
  });

  it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Jane Doe")
      .should("have.value", "Jane Doe");

    emailInput()
      .should("have.value", "")
      .type("foo@bar.com")
      .should("have.value", "foo@bar.com");
  });

  it("submit button is disabled until both inputs are filled out", () => {
    orderBtn().should("be.disabled");
    nameInput().type("name input");
    orderBtn().should("be.disabled");
    nameInput().clear();
    emailInput().type("email input");
    submitBtn().should("be.disabled");
    nameInput().type("name input");
    orderBtn().should("not.be.disabled");
  });


  it("can submit a new order", () => {
    cy.contains("Pee Pee (poop@poop.com)").should("not.exist");
    nameInput().type("Pee Pee");
    emailInput().type("poop@poop.com");
    submitBtn().click();
    cy.contains("Pee Pee (poop@poop.com)").should("exist");
  });
});
