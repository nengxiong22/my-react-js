import React, { useState, useEffect } from 'react';

function Members() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4><b>Members table</b></h4>
      
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
          <tr>
            <td key={item.id}>{item.id}</td>
            <td key={item.id}>{item.name}</td>
            <td key={item.id}>{item.username}</td>
            <td key={item.id}>{item.email}</td>
            <td key={item.id}>{item.phone}</td>
            <td key={item.id}>{item.website}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Members;