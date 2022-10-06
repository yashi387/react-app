import { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const {title,completed,handleDelete,handleEdit,handleComplete} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
               <h6>{completed ? <del> {title} </del> : title}</h6> 
               <div className="todo-icon">
               <span className="mx-2 text-success" onClick={handleComplete}>
                       <i className="fas fa-check"></i>
                   </span>
                   <span className="mx-2 text-warning" onClick={handleEdit}>
                       <i className="fas fa-pen"></i>
                   </span>
                   <span className="mx-2 text-danger" onClick={handleDelete}>
                       <i className="fas fa-trash"></i>
                   </span>
               </div>
               
            </li> 
        )
    }
}