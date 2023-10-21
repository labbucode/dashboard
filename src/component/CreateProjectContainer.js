import React, { useState } from 'react';
import '../component/CreateProjectContainer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateProjectContainer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    theme: '',
    reason: '',
    type: '',
    division: '',
    category: '',
    priority: '',
    department: '',
    startDate: '',
    endDate: '',
    location: '',
    status: 'Registered'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [dateError, setDateError] = useState('');
  const [emptyError, setEmptyError] = useState('');


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === '' ) {
       setEmptyError(true);
        return; 
      }
    }

    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      setDateError('end date is less than start date');
      return;
    } else {
      setDateError('');
    }

    const content = {
      project_name: formData.theme,
      reason: formData.reason,
      type: formData.type,
      division: formData.division,
      category: formData.category,
      priority: formData.priority,
      department: formData.department,
      startDate: formData.startDate,
      lastDate: formData.endDate,
      location: formData.location,
      status: 'Registered'
    };

    setIsLoading(true);
   const token =  localStorage.getItem('token');
    const headerValue = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    axios.post("https://backend-bbi9.onrender.com/listings", content, { headers: headerValue })
    .then(data => {
      console.log(data);
      
      setFormData({
        theme: '',
        reason: '',
        type: '',
        division: '',
        category: '',
        priority: '',
        department: '',
        startDate: '',
        endDate: '',
        location: '',
        status: 'Registered',
      });
      navigate('/dashboard/list');
    })
    .finally(() => setIsLoading(false));
  };

  return (
    <div className='wrapper'>
      <div className='Project-Container'>
        <form onSubmit={handleSubmit}>
        <div className='Project-Head'>
          <div style={{marginLeft: '18px'}}>
            <textarea
            rows="2"
              className='Project-Head-input'
              id='theme'
              placeholder='Enter Project Theme'
              value={formData.theme}
              onChange={handleInputChange}
            />
            <div className='empty-error-msg'>{emptyError && formData.theme.length <= 0 &&  "Project Theme Required"}</div>
           </div>
            <button className="Project-Head-btn" type="submit" disabled={isLoading} >
              {isLoading ? loadingText : 'Save Project'}
            </button>
          </div>
          <div className='Project-Main'>
            <div>
              <label htmlFor='reason' className='label'>
                Reason
              </label>
              <select
                className='Project-Main-input'
                id='reason'
                value={formData.reason}
                onChange={handleInputChange}  
              >
                <option disabled value="">Select reason</option>
                <option>Business</option>
                <option>Dealership</option>
                <option>Transport</option>
              </select>
                 <div className='empty-error-msg'>{emptyError && formData.type.length <= 0 &&  "Project Reason Required"}</div>
            </div>
           
            <div>
              <label htmlFor='type' className='label'>
                Type
              </label>
              <select
                className='Project-Main-input'
                id='type'
                value={formData.type}
                onChange={handleInputChange}
              >
                 <option disabled value="">Select type</option>
                <option>Internal</option>
                <option>External</option>
                <option>Vendor</option>
              </select>
            <div className='empty-error-msg'>{emptyError && formData.type.length <= 0 &&  "Project Type Required"}</div>
            </div>
            <div>
              <label htmlFor='division' className='label'>
                Division
              </label>
              <select
                className='Project-Main-input'
                id='division'
                value={formData.division}
                onChange={handleInputChange}
              >
                 <option disabled value="">Select division</option>
                <option>Compressor</option>
                <option>Filters</option>
                <option>Pumps</option>
                <option>Glass</option>
                <option>Water Heater</option>
              </select>
              <div className='empty-error-msg'>{emptyError && formData.division.length <= 0 &&  "Project Division Required"}</div>
            </div>
            <div>
              <label htmlFor='category' className='label'>
                Category
              </label>
              <select
                className='Project-Main-input'
                id='category'
                value={formData.category}
                onChange={handleInputChange}
              >
                <option disabled value="">Select category</option>
                <option>Quality A</option>
                <option>Quality B</option>
                <option>Quality C</option>
                <option>Quality D</option>
              </select>
              <div className='empty-error-msg'>{emptyError && formData.category.length <= 0 &&  "Project Category Required"}</div>
            </div>
            <div>
              <label htmlFor='priority' className='label'>
                Priority
              </label>
              <select
                className='Project-Main-input'
                id='priority'
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option disabled value="">Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <div className='empty-error-msg'>{emptyError && formData.priority.length <= 0 &&  "Project Priority Required"}</div>
            </div>
            <div>
              <label htmlFor='department' className='label'>
                Department
              </label>
              <select
                className='Project-Main-input'
                id='department'
                value={formData.department}
                onChange={handleInputChange}
              >
                <option disabled value="">Select department</option>
                <option>Startegy</option>
                <option>Finance</option>
                <option>Quality</option>
                <option>Maintenance</option>
                <option>Stores</option>
              </select>
              <div className='empty-error-msg'>{emptyError && formData.department.length <= 0 &&  "Project Department Required"}</div>
            </div>

          <div>
            <label htmlFor='start' className='label'>
              Start Date as per Project Plan
            </label>
            <input
              type='date'
              className='Project-Main-input'
              id='startDate'
              value={formData.startDate}
              onChange={handleInputChange}
            />
            <div className='empty-error-msg'>{emptyError && formData.startDate.length <= 0 &&  "Project Start Date Required"}</div>
          </div>
          <div>
            <label htmlFor='end' className='label'>
              End Date as per Project Plan
            </label>
            <input
              type='date'
              className='Project-Main-input'
              id='endDate'
              value={formData.endDate}
              onChange={handleInputChange}
            />
            <div className='empty-error-msg'>{emptyError && formData.endDate.length <= 0 &&  "Project Last Date Required"}</div>
            {dateError && <p className="empty-error-msg">{dateError}</p>}
          </div>
          
          <div>
              <label htmlFor='location' className='label'>
                Location
              </label>
              <select
                className='Project-Main-input'
                id='location'
                value={formData.location}
                onChange={handleInputChange}
              >
                <option disabled value="">Select location</option>
                <option>Pune</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
              
            <div className='empty-error-msg'>{emptyError && formData.location.length <= 0 &&  "Project Location Required"}</div>
            </div>
            <div className='Project-status'>
            <p>Status:<span style={{fontWeight: 500}}> Registered</span> </p>
          </div>
          <button className="Project-Head-btn1" type="submit" disabled={isLoading} >
              {isLoading ? loadingText : 'Start Project'}
            </button>
          </div>

         

          

          
        </form>
        
      </div>
    </div>
  );
}
