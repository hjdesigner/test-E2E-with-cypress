describe('My Fir4st Test', function() {
	it('Get title', function() {
		cy.visit('http://localhost:3000/adicionar-noticia')
		cy.get('input[name="title"]')
			.type('Harry Potter One')
			.should('have.value', 'Harry Potter One')
	})
})
