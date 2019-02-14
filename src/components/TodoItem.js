import React, { Component } from 'react'
// We importing stuff that is needed to define type of properties
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    // Here we define method for styling <div>
    getStyle = () => {
        /*
        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
        */

        // This is shorter way to do the same thing with ternary operator 
        // We added here some aditional styling
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {

        // We can use destructuring to make easy acces to some props like bellow
        const { id, title } = this.props.todo;

        return (
            // Adding inline styling is done with style tag and atributes like in CSS
            // Commands are the same except we use CamelCase style
            // EX: '<div style={{ backgroundColor: '#f4f4f4' }}>'
            // We can also add a method to do styling
            <div style={this.getStyle()}>
                {/* The way of accessing the todo props and displaying data from it */}
                {/* When we call variables for styling we use only one '{}' */}
                <p style={itemStyle}>
                    {/* On input tag we add event that will trigger some method (in this case 'mark complete') */}
                    {/* Because we use props we must go to 'Todos.js' component to access that props we want to manipulate */}
                    {/* We use 'bind' method to access 'id' of state */}
                    {/* Bellow is longer way of accessing some of props */}
                    {/*<input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> */}

                    {/* With use of destructuring we can acces props without 'this.props.todo.id' */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}

                    {/* Bellow is longer way of accessing some other props */}
                    {/* {this.props.todo.title} */}
                    {/* With use of destructuring we can acces props without 'this.props.todo.title' */}
                    {title}

                    {/* Button that will be used to delete todo - styling is used with variable */}
                    {/* We use the same system like with 'markComplete' to get to the 'App.js' state */}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// This is how we are inspecting the type of props = 'todo' props
// In this case props are object
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


// We can add variables to do styling also
const itemStyle = {
    color: 'darkred'
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
