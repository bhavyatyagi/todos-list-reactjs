import React from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Please fill all fields');
            return;
        }
        addTodo(title, desc);
    }
    return (
        <div className='container my-3'>
            <h3 className='text-center'>
                Add a Todo today :)
            </h3>
            < form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo-Title</label>
                    <input type="text" value={title} onChange={(event) => {
                        setTitle(event.target.value)
                    }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" onChange={(event) => {
                        setDesc(event.target.value)
                    }} value={desc} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form >
        </div>
    )
}