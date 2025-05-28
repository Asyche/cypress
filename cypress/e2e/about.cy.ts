describe('Test About Page', () => {
  beforeEach(() => {
    cy.loginToShopify();
    cy.visit('https://r0915550-realbeans.myshopify.com/pages/about');
  });

  it('displays the history paragraph', () => {
    cy.get('#shopify-section-template--25405942530396__main div p')
      .should('contain.text', "From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent.");
  });
});
