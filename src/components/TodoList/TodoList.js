import React, {Component} from "react";
import TodoItem from "../TodoItem";

class TodoList extends Component{
    render(){
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                key={todo.id}
                done={todo.done}
                onRemove={()=> onRemove(todo.id)}
                onToggle={()=> onToggle(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        )
        return (
            <div>
                {todoList}
            </div>
        )
    }
}


export default TodoList;