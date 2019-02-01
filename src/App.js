import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //omit .js added by build automatically
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
	state = {
		persons: [
			{name:"bob", age:22},
			{name:"george", age:25},
			{name:"jhon", age:27}
		],
		username:"Matty"
	};

	switchNameHandler = (name) =>{
		this.setState({persons: [
			{name:name, age:22},
			{name:"george", age:25},
			{name:"jhon", age:29}
		]});
	}

	nameChangedHandler = (event) =>{
		this.setState({persons: [
			{name:"bob the builder", age:22},
			{name:event.target.value, age:25},
			{name:"jhon", age:27}
		]});
	}

	userInputChangeHandler = (event) => {
		this.setState({username:event.target.value})
	}

  render() {
    return (
      <div className="App">
        <h1>Killing It 101</h1>
        <button onClick={this.switchNameHandler.bind(this,'bob can\'t build')}>Switch Name</button>
        
        <Person name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>
        
        <Person name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'Can bob build')} 
         change={this.nameChangedHandler}>I love reading</Person>
        
        <Person name={this.state.persons[2].name}
         age={this.state.persons[2].age}/>


         <UserInput changed={this.userInputChangeHandler} currentName={this.state.username}/>
         <UserOutput username={this.state.username}/>
         <UserOutput  username="shorty"/>
         <UserOutput username="gould"/>

      </div>

    );
  }
}

export default App;
