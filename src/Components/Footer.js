// second way of doing css in react 
import '../assets/css/Footer.css'
import React from 'react'
// first way to do css in react 
export const Footer = () => {
    let footerStyle = {
        position: 'absolute',
        // top: '91.3vh',
        width: '100%'
    }
    return (

        <footer className='bg-dark text-light' style={footerStyle}>
            <p className='py-2 my-3 text-center'>
                Copyright &copy;2022 | Made with &hearts; by Bhavya Tyagi
            </p>

        </footer>
    )
}
