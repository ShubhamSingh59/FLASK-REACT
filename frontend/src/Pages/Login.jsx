import React, { useState, useEffect } from 'react';
import Submit from './Submit';
import { Navigate, Router, Routes, redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        if (!username || !password) {
            alert('Please enter both name and password.');
            return;
        }
        else {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
                const data = await response.json();

                if (data.success) {
                    navigate('/login/submit', { tables: data.tables })
                }
                else {
                    setError(data.error);
                }
            }
            catch (error) {
                console.error('Login error:', error);
                setError('Failed to authenticate.');
            }
        };
        //navigate('/login/submit');
    }
    return (
        <>
            <div className='loginform'>
                <form method='POST' onSubmit={handleSubmit}>
                    <label for="input1">Username:</label>
                    <input type="text" id="input1" name="input1" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>

                    <label for="input2">Password:</label>
                    <input type="password" id="input2" name="input2" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>

                    <button type="submit">

                        Submit


                    </button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </>
    );


} 
export default Login
