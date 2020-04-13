import React from 'react';

function ToDoList (props) {

    return(
        <div>
            {props.todoList.todos.map( item => (
                <div key={item.id}>
                    <ol>
                        <li>
                           {item.item} 
                        </li>
                    </ol>                    
                </div>
            ))}
            
        </div>
    )
}

export default ToDoList;