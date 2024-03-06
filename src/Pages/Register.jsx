import React, { useState } from 'react'
import Add from "../img/addAvatar.png"


const Register = () => {
    

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input style={{ display: 'none' }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={Add} alt="addAvatar" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>

                    {/* {err && <span>Something went wrong</span>} */}
                </form>
                <p>Do You have an account? Login</p>
            </div>
        </div>
    )
}

export default Register
