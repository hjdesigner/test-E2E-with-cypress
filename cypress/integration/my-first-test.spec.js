describe('My First Test', function() {
	it('Created New Post', function() {
		cy.visit('http://localhost:3000/adicionar-noticia')
		cy.get('input[name="title"]')
			.type('Harry Potter One')
			.should('have.value', 'Harry Potter One')
		cy.get('input[name="author"]')
			.type('J. K. Rowling')
			.should('have.value', 'J. K. Rowling')
	})
})
