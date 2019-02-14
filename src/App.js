import React, { Component } from 'react';
// Here we import stuff from react Router that is instaled by npm with 'npm i react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing 'Header' component from 'components/layout' folder
import Header from './components/layout/Header';
// Importing 'Todos' component from 'components' folder 
import Todos from './components/Todos';
// Importing 'AddTodo' component from 'components' folder 
import AddTodo from './components/AddTodo';
// Importing 'About' component from 'components/pages' folder 
import About from './components/pages/About';
// Importing option of uuid that is instaled with npm option 'npm i uuid'
// import uuid from 'uuid';
// We import axios that is used to make 'http' request - instaled with 'npm i axios'  
import axios from 'axios';

import './App.css';

// This is main React component and it's class based component
class App extends Component {

  // Way of creating state like array of objects
  // In 'id' property we use 'uuid:v4()' to generate automaticly new id
  state = {

    todos: [
      /*
      // This is todo list that is hard-coded to file and after we will use JSONPlaceholder 
     {
       id: uuid.v4(),
       title: 'Program with React',
       completed: false
     },

     {
       id: uuid.v4(),
       title: 'Complete D3 projects for freeCodeCamp',
       completed: false
     },

     {
       id: uuid.v4(),
       title: 'Running or other exercise',
       completed: false
     }
   */
    ]
  }


  // Life cycle method "componentDidMounth()" runs after component mounted
  componentDidMount() {
    // With axios we send request to use JSONPlaceholder link with todos in it
    // '?_limit=10' we limit shown todos to 10
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      // With 'then' we add a promise to show those todos in app after mounting
      // We 'setState' and display in todos
      .then(res => this.setState({ todos: res.data }))
  }


  // Here we create 'markComplete' method
  markComplete = (id) => {
    // console.log('We are finally there!');

    // Wen we click on todo checkbox the id of is consoled
    // console.log(id);

    // Changing state with 'setState'
    // We are chacking if selected if is qqual to id in state 
    // If it is then we change completed property of state to oposite value ( 'todo.completed = !todo.completed' )
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }


  // Here we create 'delTodo' method
  delTodo = (id) => {

    // axios request to delete todo from app 
    // Beside JSONPlaceholder link of todos we need to add it's id with '${id}'
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // After that we add a promise to delete todo on server and uprade app
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));

    // When we click on 'x' button we console log id of todo
    // console.log(id);

    // We use 'setState' to delete one todo
    // with spread operator '...' we access the state and with filter method we delete todo
    // For deleting we do the matching with the id that is clicked and id that is in state
    /*
    // This is how we delete todo without using axios options
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    */
  }

  // Adding this function that will add text that is entered into input tag to todo list as new todo
  addTodo = (title) => {
    // This displays in console text that is entered as title
    // console.log(title);

    // Here we declare this 'newTodo' as variable
    // It adds properties of todo (id, title and completed)
    // title of todo is equal that 'title' that is entered in input field and declared in 'addTodo' component
    // In 'id' property we use 'uuid:v4()' to generate automaticly new id
    /*
    // This code we use when we add data (todo) to app without 'post' request
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    */

    // Using 'axios' and we make post request to this link
    // It doesn't make that request and add data it just simulate that (first parameter)
    // Second parameter is title that is equal typed value and completed status
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false

      // We use 'setState' to add inputed text as todo to state
      // With spread operator '...' we copy content of state and with 'newTodo' variable we add new todo to state
      // 'res.data' gives back new todo
    }).then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }));

    // This is used when we add todo without post request
    /*
    // We use 'setState' to add inputed text as todo to state
    // With spread operator '...' we copy content of state and with 'newTodo' variable we add new todo to state 
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    */
  }


  // Render method is most important method in this app
  // Inside render there is return that returns JSX (looks like HTML)
  render() {
    return (
      // If we use Router we want to wrap all content of app in this <Router> tag
      <Router>
        <div className="App">

          <div className="container">

            {/* Adding 'Header' component to the app <div> */}
            <Header />

            {/* When we added this route tag we put all content in this route that will be displayed in home page */}
            {/* Adding 'exact' option means that it will show only content inside this Route bellow */}
            <Route exact path="/" render={props => (

              <React.Fragment>

                {/* Adding 'AddTodo' component to the app <div> */}
                {/* On this component we add also 'addTodo' prop and declare function above */}
                <AddTodo addTodo={this.addTodo} />

                {/* Using tag like bellow we add component to out main App.js component */}
                {/* todos={this.state.todos} - We are taking state 'todos' and adding it to 'Todos' component as a prop */}
                {/* We are now at the top of chain and we can access state and change it with this 'markComplete' method */}
                {/* Path was from 'TodoItem.js' to 'Todo.js' to 'App.js' */}
                {/* The same way of using 'delTodo' is like with 'markComplete' */}
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

              </React.Fragment>

            )} />

            {/* Adding new 'Route' to connect to about page */}
            <Route path="/about" component={About} />

          </div>

        </div>
      </Router>

    );
  }
}

export default App;
