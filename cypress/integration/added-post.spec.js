describe("Added new post", () => {
	

	it("Should be able to create a new article: admin", () => {
		cy.visit("http://localhost:3000/adicionar-noticia")
		cy.get('input[name="title"]')
			.type("Harry Potter e a pedra filosofal")
			.should("have.value", "Harry Potter e a pedra filosofal")
		cy.get('input[name="author"]')
			.type("J. K. Rowling")
			.should("have.value", "J. K. Rowling")
		cy.get('textarea[name="description"]')
			.type("Conheça Harry Potter, um menino que soube em seu aniversário de onze anos que é filho órfão de dois bruxos e possui poderes mágicos únicos. De filho indesejado, passa a ser um estudante de Hogwarts, uma escola inglesa para bruxos. Lá ele conhece vários amigos que o ajudam a descobrir a verdade sobre as mortes misteriosas de seus pais.")
			.should("have.value", "Conheça Harry Potter, um menino que soube em seu aniversário de onze anos que é filho órfão de dois bruxos e possui poderes mágicos únicos. De filho indesejado, passa a ser um estudante de Hogwarts, uma escola inglesa para bruxos. Lá ele conhece vários amigos que o ajudam a descobrir a verdade sobre as mortes misteriosas de seus pais.")
		cy.get("#submit").click();
	});

})
