import React from 'react';

function ToDoList (props) {

    return(
        <div>
            {props.todoList.todos.map( item => (
                <div key={item.id}>
                    <ul>
                        <li>
                           {item.item} 
                        </li>
                    </ul>                    
                </div>
            ))}
            
        </div>
    )
}

export default ToDoList;