import React, { useEffect, useState } from 'react';
import '../component/Listening.css';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';
import { FcGenericSortingDesc } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';



export default function Listening() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [maxPage, setMaxPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filteredLists, setFilteredLists] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [showSort, setShowSort] = useState(false);
  const navigate = useNavigate();


 
  useEffect(() => {
    const token =  localStorage.getItem('token');
    const headerValue = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    axios.get(`https://backend-bbi9.onrender.com/listings?page=${page}&limit=${limit}`,{headers:headerValue})
      .then((response) => {
        setLists(response.data.data);
        setMaxPage(response.data.totalPages);
        setLoading(false);
        filterAndSortLists(response.data.data, searchText);
      })
      .catch((error) => {
        console.log( error);
        setLoading(false);
      });
  }, [page, searchText, sortKey, sortOrder]);

  const filterAndSortLists = (data, filter) => {
    const filteredData = data.filter((item) => {
      const values = Object.values(item);
      return values.some((value) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      );
    });

    const sortedData = [...filteredData];

    if (sortKey) {
      sortedData.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (sortOrder === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
    }

    setFilteredLists(sortedData);
  };

  const handleSortChange = (e) => {
    const selectedKey = e.target.value;
    setSortKey(selectedKey);
  };

  



  const handleStatus = async (status, id) => {
    const token =  localStorage.getItem('token');
    const headerValue = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    try {

      const response = await axios.put("https://backend-bbi9.onrender.com/listings/status", { status, id } , {headers:headerValue});
      if (response.status === 200) {
        const updatedDocument = response.data;
        const indexToUpdate = lists.findIndex(item => item._id === updatedDocument._id);

        if (indexToUpdate !== -1) {
          const updatedLists = [...lists];
          updatedLists[indexToUpdate] = updatedDocument;
          setFilteredLists(updatedLists);
        }
      }
    } catch (err) {

    }
  }


  return (
    <>
{showSort && <div className='sortPage'>
  <div className='sortPage-header'>
  <h3>Sort Projects By</h3>
  <p onClick={() => setShowSort(false)}>X</p>
  </div>

  <div className='sortPage-main'>
    <ul>
    <li onClick={() => {setSortKey('priority') 
      setShowSort(false)}}>Priority</li>
    <li onClick={() => {setSortKey('project_name')
     setShowSort(false)}
  }>Project</li>
    <li onClick={() => {setSortKey('status')
   setShowSort(false)}  
  }>Status</li>
    <li onClick={() => {setSortKey('location')
   setShowSort(false)}  
  }>Location</li>
    <li onClick={() => {setSortKey('priority')
   setShowSort(false)}  
  }>End Date</li>
    </ul>
    </div>
  </div>
}  


<div className='Listening-container'>
  
<div className='sort-search'>
<div >
<IoIosSearch style={{
    position: 'relative',
    top: '3px',
    right: '-17px',
}
} />

      <input
        placeholder="Search"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      </div>
      <FcGenericSortingDesc size={24} color="grey" className='sort-icon' onClick={() => setShowSort(true)}/>
      

<div className="sort-controls">
        <label style={{color: 'grey' }}>Sort By :</label>
        <select onChange={handleSortChange} style={{border: 'none' , width: '55%'}}>
          <option value="">None</option>
          <option value="priority">Priority</option>
          <option value="project_name">Project</option>
          <option value="status">Status</option>
          <option value="location">Location</option>
        </select>
</div>
      </div>


      <div className="container">
      <div className='table-for-mobile'>
      <div className='tbody'>
            {loading ? (
              
                <td colSpan="10">Loading...</td>
              
            ) : (
              filteredLists.map((item, index) => (
                <div className='tr' key={index}>
                  <div className='td'> <div style={{fontWeight: 700, color: '#312b2b'}}> {item.project_name}</div>
                  <div className='td' style={{color: 'grey'}}>{item.startDate} to {item.lastDate}</div>
                  </div>
                  <div className='td'>Reason: {item.reason}</div>
                  <div className='td'>Type: {item.type} <span className="dot-icon"></span>Category: {item.category}</div>
                  <div className='td'>Div: {item.division} <span className="dot-icon"></span>Dept: {item.department}</div>
                  <div className='td'>Location: {item.location}</div>
                  <div className='td'>Priority: {item.priority}</div>
                  <div className="status" >{item.status}</div>
                  <div className='td'>
                    <button className='td-btn1' onClick={() => handleStatus("Running", item._id)}>Start</button>
                    <button className='td-btn' onClick={() => handleStatus("Closed", item._id)}>Close</button>
                    <button className='td-btn' onClick={() => handleStatus("Cancelled", item._id)}>Cancel</button>
                  </div>
                </div>
              ))
            )}
          </div>
      </div>
        <table className='table-for-desktop'>
          <thead>
            <tr>
              <th style={{whiteSpace: 'nowrap'}}>Project Name</th>
              <th>Reason</th>
              <th>Type</th>
              <th>Division</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Dept.</th>
              <th>Location</th>
              <th>Status</th>
              <th style={{color: 'transparent'}}>Status</th>
              <th style={{color: 'transparent'}}>Status</th>
              <th style={{color: 'transparent'}}>Status</th>
             
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="10">Loading...</td>
              </tr>
            ) : (
              filteredLists.map((item, index) => (
                <tr key={index}>
                  <td> <div style={{fontWeight: 700, color: '#312b2b'}}> {item.project_name}</div>
                  <div style={{color: 'grey', whiteSpace: 'nowrap',marginTop: '3px'}}>{item.startDate} to {item.lastDate}</div>
                  </td>
                  <td>{item.reason}</td>
                  <td>{item.type}</td>
                  <td>{item.division}</td>
                  <td>{item.category}</td>
                  <td>{item.priority}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                  <td className="status" >{item.status}</td>
                  <td>
                    <button className='td-btn1' onClick={() => handleStatus("Running", item._id)}>Start</button> </td>
               
                    <td>  <button className='td-btn' onClick={() => handleStatus("Closed", item._id)}>Close</button> </td>
                  
                  <td> <button className='td-btn' onClick={() => handleStatus("Cancelled", item._id)}>Cancel</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>

    <div className="pagination">
        <button className="arrow pagi-button" id="prevPage">← <span className="nav-text"
       onClick={() => setPage((prev) => prev > 0 ? prev - 1 : 1)}
        >PREV</span></button>
        <div className="pages">
            <div onClick={() => setPage(1)}className="page-number pagi-active">1</div>
            <div onClick={() => setPage(2)} className="page-number">2</div>
            
        </div>
        <button className="arrow pagi-button" id="nextPage"><span className="nav-text"
         onClick={() => setPage((prev) => prev < maxPage ? prev + 1 : maxPage)}
        >NEXT</span> →</button>
    </div>
   </>
  );
}