import homePage from '../Pages/HomePage.cy';
import phonePage from '../Pages/PhonePage.cy';

beforeEach (function(){
    cy.viewport(1920,1080);
    cy.visit('https://tiendaonline.movistar.com.ar');
    cy.url().should('include', 'tiendaonline.movistar.com.ar');
})

describe ('Casos de prueba en la pagina https://tiendaonline.movistar.com.ar',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message)
        return false;
      });
    it ('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A14',function(){
        
        //No tiene buscador la pagina//
        cy.log('La pagina no tiene buscador');
        
        //Fitramos por samsung y comprobamos que el filtro arroje como resultado "Samsung".//
        homePage.filtrar('Samsung');
        homePage.FiltroVerificacion('Samsung');
       
        //Ingresamos en el equipo Samsung Galaxy A14 y comprobamos que sea el equipo seleccionado.//
        homePage.SamsungGalaxyA14();
        cy.get('.items > .product').should('contain.text','Samsung Galaxy A14');

        //Corroboramos que tenga 12 cuotas sin interes.//
        cy.get('.price-content > .financing').should('contain.text','12 cuotas sin interés');
    })

    it ('CP002 - Aplicar filtro de equipos -Memoria Interna.128GB -Precio Entre 250Ky500K',function(){

        //Aplicamos filtro de equipos, memoria interna de 128GB//
        cy.get('.memory > .filter-title').click();
       homePage.filtrar('128GB');

        //Aplicamos filtro entre 250 y 500k//
        homePage.filtrar('$ 250.000 - $ 500.000');

        //comprobamos que sean los filtros correctos//
        homePage.FiltroVerificacion('128GB');
        homePage.FiltroVerificacion('250.000');

        //Comprobamos que se muestre al menos un equipo e informamos la cantidad mostrada"//
        cy.get('.total-products > p').should('have.length.greaterThan', 0);
        cy.get('.total-products > p').should('contain.text','12');
    })

    it ('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa ',function(){
        
        //Dentro de la pagina, entramos al tercer producto de la lista//
        cy.get('.product-item').eq(2).click();

        //Seleccionamos el calculo de cuotas, luego banco credicoop y tarjeta visa. Calculamos las cuotas//
        cy.get('#open-installments-modal').click();
        phonePage.Credicoop();
        phonePage.Visa();
        cy.get('#calculate_btn > .btn-primary').click();

        //Que no exista un medio de pago con 60 cuotas //
        cy.get('#bodyTable').contains('60 cuotas').should('not.exist');
    })

    it ('Validar envío gratis-Motorola con cámara de 50MP + 2MP -orden por el mas económico de la lista y seleccionarlo- segundo color del producto.',function(){
        
        //Filtarmos por Motorola y camara de 50 MP + 2MP y verificamos que se apliquen los filtros//
        homePage.filtrar('Motorola');
        homePage.filtrar('50 MP + 2 MP');
        homePage.FiltroVerificacion('Motorola');
        homePage.FiltroVerificacion('50 MP + 2 MP');

        //Odenamos de menor precio a mayor precio//
        cy.get('#sortQL').select('Precio - Menor a Mayor');

        //Seleccionas el producto mas economico y seleccionamos segundo color disponible//
        homePage.SeleccionarPorOrden(0);
        cy.get('.swatch-option.color').eq(1).click();

        //validamos que el envio sea gratis//
        cy.get(':nth-child(1) > [data-role="collapsible"] > .title > span').click();
        cy.get('.shipping > b').should('contain.text','gratis');
    })

        









})