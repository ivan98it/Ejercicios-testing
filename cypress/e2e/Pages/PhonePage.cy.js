class phonePage{
    constructor(){
        this.CredicoopType='#inputbank';
        this.CredicoopButton= '#ui-id-21';
        this.VisaType='#inputCard';
        this.VisaButton='[data-card="Visa"] > span';
        }

    Credicoop =() =>{
        cy.get(this.CredicoopType).click().type('Credicoop');
        cy.get(this.CredicoopButton).click();
    }
    Visa =() =>{
        cy.get(this.VisaType).click().type('Visa');
        cy.get(this.VisaButton).click();
    }

}

export default new phonePage();