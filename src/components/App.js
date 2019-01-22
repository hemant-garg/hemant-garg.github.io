import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
				<a href="/" className="header-link"><span>&lt;</span> H<span>G</span> /&gt;</a>
					<Route exact path="/" component={Home} />
					<Route exact path="/projects" component={Projects} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
