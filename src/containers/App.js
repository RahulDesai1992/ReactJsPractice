import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Radium ,{StyleRoot} from 'radium'
class App extends Component {
  state = {
    persons: [
      {id: 'ddsd', name: 'Max', age: 28},
      {id: 'qwqw', name: 'Rahul', age: 26},
      {id: 'asas', name: 'Anand', age: 30}

    ],
    otherState: 'some other value',
//showPersons: true

  }



  switchNameHandler1 = (newName) => {

    //this.state.persons[0].name =
     this.setState ({persons:[       //action on clicked
       {name: 'slsl', age: 28},
       {name: newName, age: 26},
       {name: 'Anand', age: 40}  
 
     ]})
   }

   deletePersonHandler = (personIndex) => {
     const persons = [...this.state.persons];
     persons.splice(personIndex, 1); //removes element from array
     this.setState({persons: persons})
   }

  nameChangedHandler = (event, id) => { // on changing middle content
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

     this.setState({persons: persons })
  }

  togglePersonsHandler= () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: ! doesShow});


  }


  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />

          })}
    </div> 

        
      )
   
    btnClass= classes.Red;
    
    }

    const assignedclasses = [];
    
    return (
     
      <div className="App">
       <h1>Rahul Desai</h1>
       <p  >This is really working</p>
       <button
       className = {btnClass}
      
    onClick={this.togglePersonsHandler}>Switch Button</button>


     {persons}
  
  
      </div>
     

    );
   // return React.createElement('div', {className : 'App'}, 'Hello Rahul');
  }
}

export default Radium(App);
  