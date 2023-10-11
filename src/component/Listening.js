import React, { useEffect, useState } from 'react';
import '../component/Listening.css';
import axios from 'axios';

export default function Listening() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [maxPage, setMaxPage] = useState(1);



  useEffect(() => {
    axios.get(`https://backend-bbi9.onrender.com/listings?page=${page}&limit=${limit}`)
      .then((response) => {
        setLists(response.data.data);
        setMaxPage(response.data.totalPages);
        console.log(response);
        setLoading(false); // Set loading to false once data is fetched
      })
      
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [page]);

  const  handleStatus =  async (status, id) => {
    try {
      const response = await axios.put("https://backend-bbi9.onrender.com/listings/status", { status, id });
      if (response.status === 200) {
        const updatedDocument = response.data; // Updated document received from the API
  
        // Find the index of the document to update in the 'lists' array
        const indexToUpdate = lists.findIndex(item => item._id === updatedDocument._id);
  
        if (indexToUpdate !== -1) {
          // If the document is found, replace it in the 'lists' array
          const updatedLists = [...lists];
          updatedLists[indexToUpdate] = updatedDocument;
          setLists(updatedLists); // Update the state with the updated 'lists' array
        }
      }
    }catch(err){

    }
    
  }



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
                  <td>{item.priority}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                  <td>{item.status}</td>
                  <td><button className='td-btn1' onClick={() => handleStatus("Running", item._id)}>Start</button></td>
                  <td><button className='td-btn' onClick={() => handleStatus("Closed", item._id)}>Close</button></td>
                  <td><button className='td-btn' onClick={() => handleStatus("Cancelled", item._id)}>Cancel</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <button onClick={() => setPage((prev) => prev < maxPage ? prev + 1 : maxPage)}>Next</button>
      <button onClick={() => setPage((prev) => prev > 0 ? prev - 1 : 1)}>Prev</button>

    </div>
  );
}
