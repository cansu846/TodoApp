import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

export default function Todo(props) {

    const { id, content } = props.todo
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    const updateTodo = ()=>{
        const request = {
            id: id,
            content: newTodo
        }
        props.onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div className='container todo d-flex flex-md-row align-item-center justify-content-between border p-3'>
           
            <div>
                {
                    editable ? 
                    <input type="text" classname="form-control" style={{border:"0px"}} value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }}></input>
                    :
                    content
                }
            </div>

            <div className='d-flex flex-md-row justify-content-md-between'>

                {
                    editable ?
                      <span className='me-2'>
                          <FaCheck onClick={updateTodo}/>
                          
                      </span>
                        :
                        <span className='me-2'>
                            <CiEdit onClick={() => {setEditable(true)}} />
                        </span>
                }
                <span className='me-2'>
                    <FaTrashCanArrowUp onClick={() => { props.removeTodo(id) }} />
                </span>

            </div>
        </div>

    )
}
