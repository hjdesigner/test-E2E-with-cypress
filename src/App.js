import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header'
import Home from './view/home'
import AddNews from "./view/addNews"
import './App.css';

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			news: []
		}
		this.handleNewsPost = (e) => {
			e.preventDefault();
			const allPosts = localStorage.getItem('cyprass') !== null ? JSON.parse(localStorage.getItem('cyprass')) : [];
			const newPost = {
				title: e.target.title.value,
				author: e.target.author.value,
				description: e.target.description.value
			};
			allPosts.push(newPost);
			localStorage.setItem('cyprass', JSON.stringify(allPosts));
			this.setState({
				news: allPosts
			})
		}
	}
	componentDidMount() {		
		const allPosts = localStorage.getItem('cyprass') !== null ? JSON.parse(localStorage.getItem('cyprass')) : [];
		this.setState({
			news: allPosts
		})
  }
	render() {		
    return (
			<Router>
				<div>
					<Header />
					<Route path='/' exact render={(...props) => <Home list={this.state.news} />} />
					<Route path='/adicionar-noticia' render={(...props) => <AddNews
							handleNewsPost={this.handleNewsPost} />} />
				</div>
			</Router>
		);
  }
}

export default App;
