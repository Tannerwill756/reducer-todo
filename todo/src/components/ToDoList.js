import React from 'react';

function ToDoList (props) {

    return(
        <div>
            {props.todoList.todos.map( item => (

                <div 
                    key={item.id}
                    toggleItem={props.toggleItem} 
                    onClick={() => props.toggleItem(item.id)}
                    className={item.completed ? 'completed' : 'notCompleted'}
                >
                    
                    {item.item}

                </div>
            ))}
            
        </div>
    )
}

export default ToDoList;