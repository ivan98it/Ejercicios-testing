class homePage{
    constructor(){
        this.URL='https://tiendaonline.movistar.com.ar';
        this.FiltroSamsung='[data-value="49"] > a';
    }
    
    
    visitar=()=>{
            cy.visit(this.URL);
            cy.url().should('include', 'tiendaonline.movistar.com.ar');
    }
    

    filtrar =() =>{
        cy.get(this.FiltroSamsung).click();
    }

}

export default new homePage();