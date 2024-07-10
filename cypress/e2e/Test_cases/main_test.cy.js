import HomePage from '../Pages/HomePage.cy';

beforeEach (function(){
    cy.viewport(1920,1080);
    HomePage.visitar();
})

describe ('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A14',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message)
        return false;
      });
    it ('Debe permitir ingresar a la pagina, acceder al equipo A14 y que se pueda pagar en 12 cuotas sin interes.',function(){
        
        //No tiene buscador la pagina//
        cy.log('La pagina no tiene buscador');
        
        //Fitramos por samsung y comprobamos que el filtro arroje como resultado "Samsung".//
        HomePage.filtrar();
        cy.get('.clearfilter').should('contains.text','Samsung');
       
        //Clickeamos el Samsung Galaxy A14 y comprobamos que sea el equipo seleccionado.//
        cy.get('[data-id="14932"]').click();
        cy.get('.items > .product').should('contain.text','Samsung Galaxy A14');

        //Corroboramos que tenga 12 cuotas sin interes.//
        cy.get('.price-content > .financing').should('contain.text','12 cuotas sin interés');




    })




})