// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
import uuid from 'uuid';
import {createStore} from 'redux';

const addItem = ({name = '', age = '',} = {}) => ({
  type: "ADD_ITEM",
  item: {
    id: uuid(),
    name,
    age
  }
})

const getItems = () => ({
  type: "GET_ITEMS"
});

const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id
})

const itemReducerDefaultState = [
  {id: uuid(), name: "king", age: 30},
  {id: uuid(), name: "kong", age: 20},
]

const itemReducer = (state = itemReducerDefaultState, action) => {
  switch(action.type) {
    case "GET_ITEMS":
      return state;
    case "REMOVE_ITEM":
    const newstate = state.filter(item => item.id !== action.id)
      return newstate
    case "ADD_ITEM":
      return [...state, {...action.item}]
    default:
      return state  
  }
}

const store = createStore(itemReducer);



store.subscribe(() => {console.log(store.getState())})  

store.dispatch(getItems())
// store.dispatch(removeItem(itemReducerDefaultState[0].id))

store.dispatch(addItem({name: "test", age: 666}))