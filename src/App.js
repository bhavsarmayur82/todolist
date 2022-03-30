import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const[InputList,setInputList] = useState();
  const[Items,setItems] = useState([]);
  const itemEvent = (e)=>{
    setInputList(e.target.value);
  }
  const listItems = ()=>{
   setItems((olditems)=>{
     return [...olditems,InputList];
   });
   setInputList("");
  }
  const deleteItems = (id) =>{
  setItems((olditems)=>{
    return olditems.filter((arrelem,index)=>{
      return index!==id;
    })
  })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/> 
          <input type='text' placeholder='Add a Item' onChange={itemEvent} value={InputList}/>
          <button onClick={listItems}> + </button>
           <ol>
            {Items.map((itemval,index)=>{
            return <ToDoList text={itemval} key={index} id={index} onSelect = {deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
