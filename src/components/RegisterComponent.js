import { React, useState } from 'react'


function RegisterComponent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')
    return (
        <div class=' w-screen h-screen '>
            <h1 className="mt-10 mb-2 text-4xl  text-sky-500 text-center">
                Register
            </h1>

            <hr class='w-1/5 mx-auto' />
            <div class='grid grid-cols-1 justify-items-center mt-6 '>
                <div class='rounded-xl shadow-lg w-4/12 border border-sky-100 p-3'>
                    <div class='px-2 py-3 pt-3 flex-col justify-center items-center'>
                        <input class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name' />
                        <input class='form-control block w-full my-1 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Name' />
                        <input type='password' class='form-control my-3 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out duration-500 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none' value={pass} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
                        <button class='px-6 py-2 pb-2 text-xl bg-sky-500 rounded-lg text-white'> Register </button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default RegisterComponent