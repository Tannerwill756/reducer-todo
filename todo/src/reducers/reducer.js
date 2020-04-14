import React from 'react';


export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'task number 2',
            completed: false,
            id:25912412
        }
    ]
}
console.log(initialState)

export const reducer = ( state, action) => {

    switch(action.type) {

        
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                  ...state.todos,
                  {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                  },
                ],
              };
        
        case "TOGGLE_ITEM": 
            // console.log(action.payload)
            return {
                ...state,
                todos: state.todos.map(item => 
                item.id === action.payload ? {...item, completed: !item.completed } : item    
                )
            }
        
            case "CLEAR_COMPLETED":
                return{
                    ...state,
                    todos: state.todos.filter(item => item.completed === false)
                }

        default:
            return state;
    }
}
