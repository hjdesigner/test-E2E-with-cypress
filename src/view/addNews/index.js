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

const AddNews = () => (
	<Container className='addNews'>
		<Row>
			<Col>
				<h1>Adicionar uma nova notícia</h1>
			</Col>
		</Row>
		<Row>
			<Col xs={12}>
				<Form>
					<FormGroup>
						<Label for='title'>Titulo</Label>
						<Input type='text' name='title' id='title' />
					</FormGroup>
				</Form>
			</Col>
			<Col xs={12}>
				<Form>
					<FormGroup>
						<Label for='author'>Autor</Label>
						<Input type='text' name='author' id='author' />
					</FormGroup>
				</Form>
			</Col>
			<Col xs={12}>
				<Form>
					<FormGroup>
						<Label for='description'>Descrição</Label>
						<Input type='textarea' name='description' id='description' />
					</FormGroup>
				</Form>
			</Col>
			<Col xs={12}>
				<Button color="primary">Cadastrar</Button>
			</Col>
		</Row>
	</Container>
)

export default AddNews
