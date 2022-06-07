import React, { useState, useEffect, useRef } from 'react';

function ToDoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        //do not refresh page
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //draw id
            text: input
        });

        setInput('');
    };
    
  return (
    <form className="to-do_form" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input 
            type="text"
            placeholder="Update your item" 
            value={input} 
            onChange={handleChange}
            name="text" 
            ref={inputRef}
            className="to-do_input edit"           
            />
            <button onClick={handleSubmit} className="to-do_button edit">
                Update
            </button> 
            </>
            ) : (
            <>
            <input 
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='to-do_input'
            ref={inputRef} 
            />
            <button onClick={handleSubmit} className="to-do_button">
                Add to do
            </button>
            </>
            )
        }      
    </form>
  );
}

export default ToDoForm;