describe('Test Home Page', () => {
  beforeEach(() => {
    cy.loginToShopify();
    cy.visit('https://r0915550-realbeans.myshopify.com');
  });

  it('displays the intro text', () => {
    cy.get('.banner__heading em')
      .should('contain.text', "Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care.");
  });
  

  it('displays the product list', () => {
    cy.get("#Slider-template--25405942432092__featured_collection").within(() => {
      cy.get("li").eq(0).find("h3.card__heading a").should("contain.text", "Blended coffee 5kg")
      cy.get("li").eq(1).find("h3.card__heading a").should("contain.text", "Roasted coffee beans 5kg")
    })
  });
});
