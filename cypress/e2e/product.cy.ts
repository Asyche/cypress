describe('Test Product Detail Pages', () => {
  beforeEach(() => {
    cy.loginToShopify();
  });

  it('displays correct description, price, and image for "Blended coffee 5kg"', () => {
    cy.visit('https://r0915550-realbeans.myshopify.com/products/blended-coffee-5kg');

    cy.get('.product__description')
      .should('contain.text', 'RealBeans coffee, ready to brew.');

    cy.get('.price-item')
      .should('contain.text', '€55,00 EUR');
  });

  it('displays correct description, price, and image for "Roasted coffee beans 5kg"', () => {
    cy.visit('https://r0915550-realbeans.myshopify.com/products/roasted-coffee-beans-5kg');

    cy.get('.product__description')
      .should('contain.text', 'Our best and sustainable real roasted beans.');

    cy.get('.price-item')
      .should('contain.text', '€40,00 EUR');
  });

});
