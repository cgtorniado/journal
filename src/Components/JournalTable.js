import React from 'react'

const JournalTable = (props) => {


    return (
        <>

            <div className="bg-light p-4">
                <div className="row pt-3">
                    <div className="col-2">
                        Mood
                    </div>

                    <div className="col-6">
                        Thoughts
                    </div>

                    <div className="col-2">
                        Edit            
                    </div>

                    <div className="col-2">
                        Remove
                    </div>
                </div>

                {props.lists.map((row, index) => (
                    <div className="row pt-3" key={index}>
                        <div className="col-2" name={row.id}>
                            {row.type}
                        </div>

                        <div className="col-6">
                            {row.body}
                        </div>

                        
                        <div className="col-2">
                            <button className="btn btn-light shadow-sm" onClick={props.editFunc} value={row.id}>
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div>

                        <div className="col-2">
                            <button className="btn btn-light shadow-sm" onClick={props.delFunc} value={row.id}>
                            <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>

))}

            </div>
        </>
    )
}

export default JournalTable