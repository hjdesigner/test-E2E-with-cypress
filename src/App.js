import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header'
import Home from './view/home'
import AddNews from "./view/addNews"
import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Header />
					<Route path='/' exact component={Home}></Route>
					<Route path='/adicionar-noticia' component={AddNews}></Route>
				</div>
			</Router>
		);
  }
}

export default App;
