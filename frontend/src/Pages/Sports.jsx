import React, { useState, useEffect } from 'react';
////import JsonData from 'http://127.0.0.1:5000/api/Sports';
//let JsonData;

//const getData = async () => {
//  const response = await fetch("http://127.0.0.1:5000/api/Sports");
//  const data = await response.json();
//  JsonData = data;
//  return data;
//};
function Sports() {
    //const [columns, setColumns] = useState([]);
    //const [records, setRecords] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/api/Sports");
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const displayData = jsonData.map((info, index) => (
        <tr key={index}>
            <td>{info}</td>
        </tr>
    ));

    return (
        <div>
            <h2>These are the Games which played in IITGN</h2>
            <table className='table1'>
                <thead>
                    <tr>
                        <th>Sports</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.length > 0 ? displayData : <tr><td>Loading...</td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default Sports;
