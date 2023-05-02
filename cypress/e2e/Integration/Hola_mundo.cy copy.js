describe("Bienvenido al curso de cypress seccion 1", () => {


    it("Mi primer Test -> Hola mundo", () =>{
        cy.log("Hola fucking mundo")
        cy.wait(3000)
    })

    it("Segundo test -> campo name", () =>{
        cy.visit("https://demoqa.com/text-box")
        
        cy.get("#userName").type("Martin")
        cy.wait(1000)

    })


})//Cierre de describe