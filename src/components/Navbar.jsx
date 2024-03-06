import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Lama Chat</span>
        <div className='user'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGTIZTyuhaT-Z0szf_VAQlkihHDHfHnWOAw&usqp=CAU" alt="profile" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar