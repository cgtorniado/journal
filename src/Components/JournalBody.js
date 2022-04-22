import React, { useRef, useState } from 'react'
import JournalTable from './JournalTable';


const entryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [];

const JournalBody = () => {

    const [entryList, setEntryList] = useState(entryInfo);

    const entryTypeRef = useRef();
    const entryBodyRef = useRef();

    const clearAll = () => {
        localStorage.clear();
        window.location.reload(false)
        console.log("clearclicked")
    }

    const onFormSubmit = (event) => {

        event.preventDefault();

        const entryObject = {
            id: Date.now(),
            type: entryTypeRef.current.value,
            body: entryBodyRef.current.value
        }

        setEntryList([...entryList, entryObject]);
        localStorage.setItem("entryDetails", JSON.stringify(entryList));
        console.log(entryList)

        entryTypeRef.current.value = "";
        entryBodyRef.current.value = "";
    }



    const handleDel = (e) => {
        
        console.log(entryList)


        const clickedId=e.currentTarget.value
        console.log(clickedId)

        const result = entryList.filter(
         entry => entry.id != clickedId
         )

         localStorage.setItem("entryDetails", JSON.stringify(result));
         window.location.reload(false);
        console.log(result)
    }


    const handleEdit = (e) => {
        
        console.log(entryList)


        const clickedId=e.currentTarget.value
        console.log(clickedId)

        const newType = prompt("please input new mood 😄 😔 😱 💖 ")
        const newBody = prompt("please input new thought")
        

        const newObject = {
            id:clickedId,
            type:newType,
            body:newBody
        }

        const result = entryList.filter(
         entry => entry.id != clickedId
         )

         const addedResult= [...result,newObject]

         localStorage.setItem("entryDetails", JSON.stringify(addedResult));
         window.location.reload(false);
        console.log(addedResult)
    }

    return (
        <>
            <div className="container container-fluid p-3 mb-5">

                <form onSubmit={onFormSubmit}>
                    <div className="row bg-light p-3">
                        <div className="col-12 col-lg-3">
                            <label>Mood</label>
                            <select className="form-select" aria-label="Default select example" value="How are you feeling?"  ref={entryTypeRef} readOnly required>
                                <option value="😄">😄</option>
                                <option value="😔">😔</option>
                                <option value="😱">😱</option>
                                <option value="💖 ">💖</option>
                            </select>         
                        </div>

                        <div className="col-12 col-lg-8">
                            <label>Thoughts</label>
                            <input type="text" className="form-control" ref={entryBodyRef} placeholder="What's on your mind?" required />
                        </div>

                        <div className="col-12 col-lg-1 align-self-end">
                            <input type="submit" className="btn btn-primary shadow-sm" value="Submit" />
                        </div>
                    </div>
                </form>

                <div className='row justify-content-center'>
                    <h3 className="text-center pt-4 p-2">Thoughts List</h3>

                </div>

                <JournalTable lists={entryList} editFunc={handleEdit} delFunc={handleDel}/>

                <div className='row justify-content-center m-3'>
                <button className="btn btn-primary col-6 col-lg-3 shadow-sm" onClick={clearAll}> Clear All Thoughts</button>
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

export default JournalBody