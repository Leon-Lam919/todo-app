import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    // variable that can be called again from render
    this.state = {
      message: "Hello string", 
      newTodo: ""
    };
  }

  newTodoChanged(event){
    console.log(event.target.value);
  }

  formSubmitted(event){
    event.preventDeault();
    console.log('form submitted');
  }
  // renders all components to wewbsite
  render(){
    return(
      // works like html
      <div className = "App">
        <h3>{this.state.message}</h3>
        {/* form and input for form */}
        <form onSubmit={this.formSubmitted}>
          <label for ="newTodo">New Todo</label>
          <input onChange={this.newTodoChanged} id="newTodo" name = "newTodo"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default App;
