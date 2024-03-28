import React, { useState, useEffect } from 'react';

function Login() {
    return (
        <>
            <div className='loginform'>
                <form action="/submit" method="post">
                    <label for="input1">User Name</label>
                    <input type="text" id="input1" name="input1" /><br></br>

                    <label for="input2">Password</label>
                    <input type="text" id="input2" name="input2" /><br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default Login