import React from 'react';
import Login from './Login';
function Submit({ tables }) {
  return (
    <div>
      <h2>Tables</h2>
      {tables && tables.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Table Name</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table, index) => (
              <tr key={index}>
                <td>{table}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!tables && <p>No tables received yet.</p>}
    </div>
  );
}


export default Submit;