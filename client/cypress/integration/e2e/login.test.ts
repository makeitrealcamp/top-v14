import fixtures from '../../fixtures/example.json';

describe('login ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('navigates to login page', () => {
    cy.contains('Login').click();
    cy.get('form').should('be.visible');
  });

  describe('login fail', () => {
    beforeEach(() => {
      cy.contains('Login').click();
    });
    it('should render the validation message for email and password when the user click login button ...', () => {
      cy.get('[type=submit]').click();
      cy.contains(`${fixtures.login.validationMessages.invalidEmail}`).should(
        'be.visible'
      );
      cy.contains(
        `${fixtures.login.validationMessages.invalidPassword}`
      ).should('be.visible');
    });
    it('should render the validation message for  password only  when the user click login button and there is a valid email', () => {
      cy.get('input[type=email]').type(`${fixtures.login.email}{enter}`);
      cy.contains(
        `${fixtures.login.validationMessages.invalidPassword}`
      ).should('be.visible');
    });
    it('should render the validation message for wrong password only  when the user click login button and there is a valid email but invalid password', () => {
      cy.get('input[type=email]').type(`${fixtures.login.email}{enter}`);
      cy.get('input[type=password]').type(
        `${fixtures.login.invalidPassword}{enter}`
      );
      cy.contains(
        `${fixtures.login.validationMessages.invalidPasswordLength}`
      ).should('be.visible');
    });
    it('should render the error message for wrong credentials  when the user click login button and there is a valid email and valid password but wrong user credentials', () => {
      cy.get('input[type=email]').type(`${fixtures.login.invalidEmail}{enter}`);
      cy.get('input[type=password]').type(
        `${fixtures.login.validPassword}{enter}`
      );
      cy.contains(
        `${fixtures.login.validationMessages.invalidCredentials}`
      ).should('be.visible');
    });
  });

  describe('login success', () => {
    beforeEach(() => {
      cy.contains('Login').click();
    });
    it('should redirect to dashboard when user credentials correct', () => {
      cy.get('input[type=email]').type(`${fixtures.login.email}{enter}`);
      cy.get('input[type=password]').type(
        `${fixtures.login.validPassword}{enter}`
      );
      cy.location().should((location) => {
        expect(location.hash).to.be.empty;
        expect(location.href).to.eq('http://localhost:3000/dashboard');
      });
    });
  });
});
