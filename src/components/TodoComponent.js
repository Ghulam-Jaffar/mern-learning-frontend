import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.modules.css';

const BASE_URL = 'http://localhost:5000/api';
function TodoComponent() {
    const [todos, setTodos] = useState(null);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => { getTodos() }, [todos]);

    const getTodos = () => {
        axios
            .get(`${BASE_URL}/todos`).then((res) => setTodos(res.data))
            .catch((err) => console.error(err));
    }

    const addTodo = () => {
        axios.post(`${BASE_URL}/todo/new`, {
            title: newTodo,
        })
            .then((res) => {
                setTodos([...newTodo, res.data])
                setNewTodo("")
            }).catch((err) => console.error(err));
    }

    const deleteTodo = (id) => {
        axios.delete(`${BASE_URL}/todo/delete/${id}`)
            .then((res) => {
                setTodos(todos.filter(todo => todo._id !== res.data._id))
                console.log(todos.filter(todo => todo._id !== res.data._id))
            }).catch((err) => console.error(err));
    }

    const todoClick = (id) => {
        axios.put(`${BASE_URL}/todo/toggleStatus/${id}`)
            .then((res) => { getTodos() }).catch((err) => console.error(err));

    }
    return (
        <div class=' w-screen h-screen '>
            <h1 className="mt-10 mb-2 text-4xl  text-sky-500 text-center">
                Hello User!
            </h1>

            <hr class='w-1/5 mx-auto' />
            <div class='grid grid-cols-1 justify-items-center mt-6 '>
                <div class='rounded-xl shadow-lg max-w-lg border border-sky-100 p-3'>
                    <div class='px-6 py-3 pt-3 flex justify-center items-center'>
                        <input class='form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} placeholder='add a new todo' />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 ml-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={addTodo}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        {/* <span class=' text-green-600 text-2xl ml-3 cursor-pointer' onClick={addTodo}>+</span> */}
                    </div>
                    <div class='px-6 py-2 pb-2 text-xl'>
                        {!todos || !todos.length ?
                            <div class='flex justify-center items-center'>No Todos</div> :
                            todos.map((todo, index) => (
                                <div key={todo._id} class='flex justify-center items-center border-b-2 border-opacity-10 border-sky-500 my-3' >
                                    <p onClick={() => todoClick(todo._id)} class={todo.complete ? 'break-all decoration-green-600 line-through  w-11/12' : 'break-all  w-11/12'} id='todo-title'>{`${index + 1}. ${todo.title}`}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => { deleteTodo(todo._id) }}>
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => { deleteTodo(todo._id) }}>
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg> */}
                                    {/* <p class=' text-4xl text-red-600 cursor-pointer' onClick={() => { deleteTodo(todo._id) }}> -</p> */}
                                </div>
                            ))}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default TodoComponent