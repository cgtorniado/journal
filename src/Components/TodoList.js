import React from 'react'

const TodoList = (props) => {

    return (
        <>

            <div className="bg-light p-4">
                <div className="row pt-3">
                    <div className="col-6">
                        To-do
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
                        <div className="col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label">
                                    {row.body}
                                    </label>
                            </div>
                          
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

export default TodoList