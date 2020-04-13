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

        // case 'TOGGLE_COMPLETE':
        //     return{
                
        //     }
        
        case 'ADD_TODO':
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        // case 'CLEAR_COMPLETED':
        //     return{

        //     }
        case 'UPDATE_TODO':
            return{
                ...state,
                    item: action.payload
            }        

        default:
            return state;
    }
}
