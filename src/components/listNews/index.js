import React from 'react'
import { Link } from "react-router-dom";
import './listNews.css'

const ListNews = () => (
	<ul className="list-news">
		<li>
			<Link to="/">
				<h2>Titulo noticia</h2>
				<small>Autor</small>
			</Link>
		</li>
		<li>
			<Link to="/">
				<h2>Titulo noticia</h2>
				<small>Autor</small>
			</Link>
		</li>
	</ul>
)

export default ListNews
