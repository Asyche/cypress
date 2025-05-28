describe('Test Product Catalog Page', () => {
  beforeEach(() => {
    cy.loginToShopify();
    cy.visit('https://r0915550-realbeans.myshopify.com/collections/all');
  });

  it('displays the correct product items', () => {
    cy.get("#product-grid").within(() => {
      cy.get("li").eq(0).find("h3.card__heading a").should("contain.text", "Blended coffee 5kg")
      cy.get("li").eq(1).find("h3.card__heading a").should("contain.text", "Roasted coffee beans 5kg")
    })
  });

  it('sorts products by price (low to high)', () => {
    cy.get('#SortBy').select('price-ascending');
    cy.wait(1000);
    cy.get("#product-grid li")
    .first()
    .find("h3.card__heading a")
    .should("contain.text", "Roasted coffee beans 5kg");
  });
});
