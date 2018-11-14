import React from 'react';
import { Container, Row, Col  } from 'reactstrap';
import ListNews from '../../components/listNews';

const Home = () => (
	<Container>
		<Row>
			<Col>
					<ListNews />
			</Col>
		</Row>
	</Container>
)

export default Home
