import React, { useEffect, useState } from 'react';
import '../component/Listening.css';
import axios from 'axios';

export default function Listening() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://backend-bbi9.onrender.com/listings")
      .then((response) => {
        setLists(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div className='Listening-container'>
      <input placeholder='Search' className='search-input' />
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Reason</th>
              <th>Type</th>
              <th>Division</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Dept.</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="10">Loading...</td>
              </tr>
            ) : (
              lists.map((item, index) => (
                <tr key={index}>
                  <td>{item.project_name}</td>
                  <td>{item.reason}</td>
                  <td>{item.type}</td>
                  <td>{item.division}</td>
                  <td>{item.category}</td>
                  <td>{item.proiority}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                  <td>{item.status}</td>
                  <td><button className='td-btn1'>Start</button></td>
                  <td><button className='td-btn'>Close</button></td>
                  <td><button className='td-btn'>Cancel</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
