import React from 'react'
import actionTypes from '../reducer/actionTypes';


const todoReducer = (state,action) => {
  switch(action.type){
    case actionTypes.create: 

    const newTodo= {id: new Date().getTime(), text: action.payload};

    const updated = state.todos.concat(newTodo);

    return {...state,todos: updated};
    case actionTypes.delete:
      const filtred =  state.todos.filter((i)=>i.id !=action.payload);
        return {...state, todos: filtred};

case actionTypes.toggle:
    return {...state,isAdmin:!state.isAdmin};

  }
}

export default todoReducer
