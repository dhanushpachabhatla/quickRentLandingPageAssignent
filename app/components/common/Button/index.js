import React from 'react'
import "./styles.css"
const Button = ({ text }) => {
    return (
        <div className='btn'>
            <button className='button'>{text}</button>
        </div>
    )
}

export default Button
