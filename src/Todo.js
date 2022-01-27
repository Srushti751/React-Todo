import React, { Component } from 'react'

export class Todo extends Component {

   
    render() {
        return (
            <>
           
             <div className="form-group form-style">
             <label htmlFor="title" className="title-style">Title:</label>
             <input id="taskinput" type="text" value={this.props.itemValue} onChange={this.props.changed} /> 

             <label htmlFor="desc" className="title-style mar">Body:</label>
             <input id="taskinput" type="text" value={this.props.itemBody} onChange={this.props.changedBody} />

         </div>
         </>
        )
    }
}

export default Todo
