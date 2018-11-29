import React from 'react'
import { Link } from "react-router-dom";
import './listNews.css'

const ListNews = ({ list }) => {
	
	function titleEmpty(element) {
		let newUrl = element.replace(/ /g, '-');
		return `/${newUrl}`;
	}

	return (
		<ul className="list-news">
			{list.length === 0 && <p className='post-empty'>Nenhum post cadastrado.</p>}
			{list.map((item, index) =>
				<li key={index}>
					<Link to={`${titleEmpty(item.title)}`}>
						<h2>{item.title}</h2>
						<small>{item.author}</small>
					</Link>
				</li>
			)}
		</ul>
	)
}

export default ListNews
