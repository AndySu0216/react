class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			name: 'world'
		};
	}

	//Lifecycle method
	//It's called whenever this React component is rendered to the DOM for the first time.
	//This is called 'mounting' in React.
	componentDidMount(){
		this.timeId = setInterval(
			() => this.tick(), 
			1000
		);
	}

	//Lifecycle method
	//It's called whenever the DOM produced by the Clock is removed.
	//This is called 'unmounting' in React.
	componentWillMount(){
		clearInterval(this.timeId);
	}

	//While this.props is set up by React itself and this.state has a special meaning, 
	//you are free to add additional fields to the class manually 
	//  if you need to store something that is not used for the visual output.
    //If you don't use something in render(), it shouldn't be in the state.
	tick(){
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

const clocks = (
	<div>
		<Clock name="Andy"/>
		<Clock name="Angel"/>
	</div>
);

ReactDOM.render(
	clocks,
	document.getElementById('root')
);