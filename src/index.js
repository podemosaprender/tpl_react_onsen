//INFO: este es el punto de entrada a nuestra aplicacion, de aqui en mas usanmos import
const { createElement, useState } = React;
const render = ReactDOM.render;
const html = htm.bind(createElement);
//A: definimos las funciones de react como requiere este runtime

import OnsenApp from './onsen.js'; //A: importo de mis archivos, etc.

//S: ejemplo FUNCIONAL + htm
function ClickCounter() {
	const [count, setCount] = useState(0);

	return html`
			 <div>
				 <button onClick=${() => setCount(count + 1)}>
					 Clicked ${count} times
				 </button>
			 </div>
		 `;
}

//S: ejemplo class
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	setCount(val) {
		this.setState({count: val});
	}
	render() {
		return html`
				 <div>
					 <button onClick=${() => this.setCount(this.state.count + 1)}>
						 Clicked ${this.state.count} times
					 </button>
				 </div>
			 `;
	}
}

//S: conectar la aplicacion al dom
render(html`<${OnsenApp}/>`, document.getElementById("App"));

