import React, { useState, useEffect } from 'react';
import Submit from './Submit';
import { Navigate, Router, Routes, redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [password, setPassword] = useState('');
    const [userTables, setUserTables] = useState([]);
    const [error, setError] = useState(null);
    const [redirectToOtherPage, setRedirectToOtherPage] = useState(false);
    //const handleSubmit = async (e) => {
    //    e.preventDefault();
    //    try {
    //        const response = await fetch('http://127.0.0.1:5000/api/login', {
    //            method : 'POST',
    //            headers: {
    //                'Content-Type': 'application/json',
    //            },
    //            body: JSON.stringify({ username, password }),
    //        });
    //        const result = await response.json();
    //        if (result.success) {

    //            history.push('/home');
    //            setError(null);
    //        } else {
    //            setError(result.message);
    //            setUserTables([]);
    //        }
    //    } catch (error) {
    //        console.error('Error:', error);
    //        setError('An error occurred, please try again later.');
    //    }
    //}
    //onSubmit={handleSubmit}/
    //useEffect(() => {
    //    const fetchData = async () => {
    //        try {
    //            const response = await fetch("http://127.0.0.1:5000/api/login");
    //            const data = await response.json();
    //            setJsonData(data);
    //        } catch (error) {
    //            console.error('Error fetching JSON data:', error);
    //        }
    //    };

    //    fetchData();
    //}, []);
    //const displayData = () => {

    //        <Submit/>

    //}

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior

        //const dataToSubmit = {
        //    ...formData // Any additional form data object here
        //};

        // Call any necessary submission methods here
        redirect('/login/submit');
    }
    //if (redirectToOtherPage) {
    //    <Router>
    //        <Routes path="/login/submit">

    //            <Submit/>

    //        </Routes>
    //    </Router>
    //}
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
                {/*{userTables.length > 0 && (
                    <div>
                        <h2>Welcome, {username}!</h2>
                        <p>You have access to the following data tables:</p>
                        <ul>
                            {userTables.map((tableName, index) => (
                                <li key={index}>{tableName}</li>
                            ))}
                        </ul>
                    </div>
                )}*/}
            </div>
        </>
    );


} export default Login