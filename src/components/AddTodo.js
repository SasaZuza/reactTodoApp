import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

    // Here we create state and adding value for title as empty
    state = {
        title: ''
    }

    // This is method that is activated after adding content to input form
    // With 'e' we target value stribute of input form and add make it equal to title in state
    // [e.target.name] - we connects to 'name' atribute of input field so when name is the same we can use it for many other input filds
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    // This is method that is activated after submiting a form
    onSubmit = (e) => {
        // With this we preventing submiting the whole document by default
        e.preventDefault();
        // We add as new todo text that we enter into input  
        this.props.addTodo(this.state.title);
        // After inputing text and submiting we want to clear the form 
        this.setState({ title: '' });
    }


    render() {
        return (
            // Adding some form to this component with some basic styling
            // We are adding 'onSubmit' event to the whole form and not to the Submit button
            // This event is triggering some method (in this case it's 'onSubmit') 
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >

                {/* As a value for this input form we connect to 'state.title' */}
                {/* We add 'onChange' method to change state title after typing in input field */}
                <input
                    type="text"
                    name="title"
                    placeholder="Add todo..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />

            </form>
        )
    }
}

// This is how we are inspecting the type of props = 'todos' props
// In this case props are function
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo 
