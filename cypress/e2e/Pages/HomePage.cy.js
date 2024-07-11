class homePage{
    constructor(){
        this.Filter='#filters-items';
        this.VerifyFilter='.selectedfilters';
        this.GalaxyA14 = '[data-id="14932"]';
        this.SelectProduct = '.product-item'
    }

    filtrar =(item) =>{
        cy.get(this.Filter).contains(item).click();
    }
    FiltroVerificacion = (filtro)=>{
        cy.get(this.VerifyFilter).should('contains.text',filtro);
    }
    SamsungGalaxyA14 = () =>{
        cy.get(this.GalaxyA14).click();
    }
    SeleccionarPorOrden = (orden) =>{
        cy.get(this.SelectProduct).eq(orden).click();
    }

}

export default new homePage();