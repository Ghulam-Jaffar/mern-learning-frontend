import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const BASE_URL = 'user/register';
function RegisterComponent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')

    const handleSubmit = () => {
        axios.post(BASE_URL, { name: name, email: email, password: pass }).then(res => {
            console.log(res)
        })
    }
    return (
        <div class=' w-screen h-screen '>
            <h1 className="mt-10 mb-2 text-4xl  text-sky-500 text-center">
                Register
            </h1>

            <hr class='w-1/5 mx-auto' />

            <div class=' grid grid-cols-1 justify-items-center mt-6 '>
                <div class='flex-col justify-center items-center w-2/12 max-w-4xl min-w-fit'>
                    <div class='rounded-xl shadow-lg w-full border border-sky-100 p-3 px-2 py-3 pt-3 flex flex-col justify-center items-center'>
                        <input class='form-control block w-full px-3 my-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name' />
                        <input class='form-control block w-full px-3 my-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' />
                        <input type='password' class='form-control px-3 my-1 py-1.5 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={pass} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
                        <button class='px-2 py-1 mt-3  text-lg bg-sky-500 rounded-lg text-white' onClick={handleSubmit}> Register </button>
                    </div>

                    <Link to="/login" class='flex justify-end mt-3 text-sm'>
                        <p>Already Registered?</p>
                    </Link>
                </div>

            </div>


        </div>
    )
}

export default RegisterComponent