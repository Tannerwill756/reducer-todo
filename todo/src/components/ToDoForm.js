import React, { useState } from 'react';
import reducer from '../reducers/reducer';


function ToDoForm (props) {





    return(
        <div>
                  
            <form onSubmit={props.submitHandler}>
                
                <input type='text' value={props.inputText} name="inputText" onChange={props.changeHandler}/>
                <button type='submit'>add</button> 
                             
            </form>
            <button onClick={props.clear}>clear</button>  
        </div>
    )

}



export default ToDoForm;