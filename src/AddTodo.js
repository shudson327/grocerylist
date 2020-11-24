import React,{ Component } from 'react';

class AddTodo extends Component{
    state = {
        content: " "
    }

    handleChange =(e) =>{
        this.setState({
            content: e.target.value
        })
        //console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target)
        this.props.addTodo(this.state)
        this.setState({
            content:" "
        })
    }

    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label className="label">Add New Groceries to list:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        </div>
    )
}
}


export default AddTodo;
