import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Bani chat</span>
        <div className="user">
            <img src="https://ih1.redbubble.net/image.3932232020.1739/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" />
            <span>Himanshu</span>
            <button>logout</button>
        </div>
    </div>
  )
}
