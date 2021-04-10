const { createElement, useState } = React;
const render = ReactDOM.render;
const html = htm.bind(createElement);
import {Saludo, Contador} from './MiComponente.js';
import OnsenApp from './Onsen.js';
console.log("En main Saludo es",Saludo);

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

render(html`<${OnsenApp}/>`, document.getElementById("App"));

