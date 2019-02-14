import React, { Component } from 'react';
// Importing TodoItem.js component
import TodoItem from './TodoItem';
// We importing stuff that is needed to define type of properties
import PropTypes from 'prop-types';

// This is also class based component
class Todos extends Component {

    render() {
        // this.props.todos  - We use it to access 'todos' state as a props 
        // We use 'map()' to loop trought state 'todos' and outpu each todo 
        return this.props.todos.map((todo) => (
            // We output here new component 'TodoItem.js'
            // 'todo' is prop of TodoItem component
            // Every prop must have unique key so we add property 'id' from 'todos' state 
            // Here we by using props access method 'markComplete' method from 'TodoItem.js' component
            // Because we use props we must go to 'App.js' component to access that state we want to manipulate
            // We do the same patht with 'delTodo' event
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

// This is how we are inspecting the type of props = 'todos' props
// In this case props are array (array of objects) and function
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;