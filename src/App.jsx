import React from "react";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experiences } from "./components/experiences";
import "./App.css";

const App = () => {
	return (
		<div>
			<Navigation />
			<div className="wrapper">
				<div className="main-grid">
					<About />
					<Skills />
					<Experiences />
				</div>
			</div>
		</div>
	);
}

export default App;
