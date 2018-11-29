import React from 'react';
import { Container, Row, Col  } from 'reactstrap';
import ListNews from '../../components/listNews';

const Home = ({ list }) => (
	<Container>
		<Row>
			<Col>
					<ListNews list={list} />
			</Col>
		</Row>
	</Container>
)

export default Home
