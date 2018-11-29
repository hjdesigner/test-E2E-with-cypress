import React from 'react'
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button } from 'reactstrap';

const AddNews = ({ handleNewsPost }) => (
	<Container className='addNews'>
		<Row>
			<Col>
				<h1>Adicionar uma nova notícia</h1>
			</Col>
		</Row>
		<Row>
			<Form action="/" onSubmit={handleNewsPost}>
				<Col xs={12}>
					<FormGroup>
						<Label for='title'>Titulo</Label>
						<Input type='text' name='title' id='title' />
					</FormGroup>
				</Col>
				<Col xs={12}>
					<FormGroup>
						<Label for='author'>Autor</Label>
						<Input type='text' name='author' id='author' />
					</FormGroup>
				</Col>
				<Col xs={12}>
					<FormGroup>
						<Label for='description'>Descrição</Label>
						<Input type='textarea' name='description' id='description' />
					</FormGroup>
				</Col>
				<Col xs={12}>
					<Button color="primary" id="submit">Cadastrar</Button>
				</Col>
			</Form>
		</Row>
	</Container>
)

export default AddNews
