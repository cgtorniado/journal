import React, { useRef, useState } from 'react'
import TodoList from './TodoList';

const todoInfo = (localStorage.getItem("todoDetails")) ? JSON.parse(localStorage.getItem("todoDetails")) : [];


const TodoBody = () => {

  const [todoList, setTodoList] = useState(todoInfo);

  const todoBodyRef = useRef();


  const clearAll = () => {
    localStorage.clear();
    window.location.reload(false)
    console.log("clearclicked")
  }


  const onFormSubmit = (event) => {

    event.preventDefault();
    console.log("clicked the fn is working form submitted");

    const entryObject = {
      id: Date.now(),
      body: todoBodyRef.current.value
    }

    setTodoList([...todoList, entryObject]);
    localStorage.setItem("todoDetails", JSON.stringify(todoList));
    console.log(todoList)

    todoBodyRef.current.value = "";
  }

  const handleDel = (e) => {
        
    console.log(todoList)


    const clickedId=e.currentTarget.value
    console.log(clickedId)

    const result = todoList.filter(
     entry => entry.id != clickedId
     )

     localStorage.setItem("todoDetails", JSON.stringify(result));
     window.location.reload(false);
    console.log(result)
}


const handleEdit = (e) => {
    
    console.log(todoList)


    const clickedId=e.currentTarget.value
    console.log(clickedId)
   
    const newBody = prompt("please input edited task")
    

    const newObject = {
        id:clickedId,
        body:newBody
    }

    const result = todoList.filter(
     entry => entry.id != clickedId
     )

     const addedResult= [...result,newObject]

     localStorage.setItem("todoDetails", JSON.stringify(addedResult));
     window.location.reload(false);
    console.log(addedResult)
}



  return (
    <>
      <div className="container container-fluid p-5 mb-5">

        <form onSubmit={onFormSubmit}>
          <div className="row bg-light p-3">
            <div className="col-12 col-lg-8">
              <label>To-Do</label>
              <input type="text" className="form-control" ref={todoBodyRef} placeholder="Let's get this over with" />
            </div>

            <div className="col-12 col-lg-1 align-self-end">
              <input type="submit" className="btn btn-primary shadow-sm" value="Submit" />
            </div>
          </div>
        </form>

        <div className='row justify-content-center'>
          <h3 className="text-center pt-4 p-2">To do List</h3>
        </div>

        <TodoList lists={todoList} editFunc={handleEdit} delFunc={handleDel}/>

        <div className='row justify-content-center m-3'>
          <button className="btn btn-primary col-6 col-lg-3 shadow-sm" onClick={clearAll}> Clear All Tasks</button>
        </div>

        <section className="sticky">
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </section>

      </div>



    </>
  )
}

export default TodoBody