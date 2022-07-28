import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }, [navigate])


    return (
        <div class='w-screen h-screen flex justify-center items-center text-sky-600 text-6xl'>NotFound: 404</div>
    )
}

export default NotFound