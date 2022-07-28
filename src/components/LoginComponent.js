import axios from 'axios'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'


const BASE_URL = 'user/login';
function LoginComponent() {
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')

    const handleSubmit = () => {
        axios.post(BASE_URL, { email: email, password: pass })
            .then(res => {
                console.log(res)
            })
    }
    return (
        <div class=' w-screen h-screen '>
            <h1 className="mt-10 mb-2 text-4xl  text-sky-500 text-center">
                Log In
            </h1>

            <hr class='w-1/5 mx-auto' />

            <div class='grid grid-cols-1 justify-items-center mt-6'>
                <div class='flex-col justify-center items-center w-2/12 max-w-2xl min-w-fit' >
                    <div class='rounded-xl shadow-lg w-full border border-sky-100 p-3 px-2 py-3 pt-3 flex flex-col justify-center items-center'>
                        <input class='form-control block w-full px-3 my-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' />
                        <input type='password' class='form-control px-3 my-1 py-1.5 block w-full  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={pass} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
                        <button class='px-2 py-1 mt-3 text-lg bg-sky-500 rounded-lg text-white' onClick={handleSubmit} > Login </button>
                    </div>
                    <Link to="/register" class='flex justify-end mt-3 text-sm'>
                        <p>Don't have an account?</p>
                    </Link>
                </div>


            </div>

        </div>
    )
}

export default LoginComponent