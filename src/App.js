import React from 'react'
import './index.css';
import 'tachyons';
import Cardlist from './Cardlist'
import Searchbox from './SearchBox'
import {Robots} from './Robot' 
import Scroll from './Scroll'
import './App.css'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots:[],
			searchfields:''
		}

		this.onSearchChange = this.onSearchChange.bind(this);

	};

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users') //fetch is tool for us to make request to server
		.then(response => response.json())
		.then(users => this.setState({ robots: users}))
	}

	onSearchChange = (event) =>{
		this.setState({ searchfields : event.target.value})
	}
	render(){

		const {searchfields,robots} = this.state;
			const filteredRobots =  robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfields.toLowerCase())
		})

			if(!robots.length){
				return <h1>Loading</h1>
			}
			else{
	return(
	  <div className='tc'>
	  <h1 id="head">Robofriend</h1>
	  <Searchbox Searchchange={this.onSearchChange}/>
	  <Scroll>
	  <Cardlist robots={filteredRobots}/>
	  </Scroll>
	  </div>
	)}
}
}
export default App  