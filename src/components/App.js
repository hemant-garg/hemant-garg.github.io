import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Link className="header-link" to="/"><span>&lt;</span> H<span>G</span> <i className="fas fa-guitar"></i>&gt;</Link>
					<Route exact path="/" component={Home} />
					<Route exact path="/projects" component={Projects} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
