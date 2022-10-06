import  { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit,handleComplete}=this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo List </h3> 
                {items.map(item =>{
                    return <TodoItem 
                    key={item.id} 
                    title={item.name}
                    completed={item.completed}
                    handleDelete={()=>handleDelete(item.id)}
                    handleEdit={()=>handleEdit(item.id)}
                    handleComplete={()=>handleComplete(item.id)}
                    />;   

                })}

                <button type="submit" className="btn btn-danger btn-block text-capitalize mt-5" 
                onClick={clearList}>Clear List</button>
            </ul>
        )
    }
}