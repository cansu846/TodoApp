import React, { useState } from 'react'
import "../css/TodoCreate.css"

export default function TodoCreate(props) {

    const [todoContent, setTodoContent] = useState("");

    const clearTodoInput = () => {
        setTodoContent("");
    }

    const createRequest = () => {
        if (!todoContent) return;
        const request = {
            id: Math.floor(Math.random() * 999999),
            content: todoContent
        }
        props.onCreateTodo(request);
        clearTodoInput();
    }


    return (

        <div className='container todo'>
            <div className="input input-group input-group-lg">
                <input type="text" classname="form-control" placeholder='Pleace enter todo' value={todoContent} onChange={(e) => { setTodoContent(e.target.value) }}></input>
            </div>
            <div className='button'>
                <button className='btn btn-primary d-flex justify-content-end' onClick={() => { createRequest() }}>Add Todo</button>
            </div>
        </div>

    )
}
