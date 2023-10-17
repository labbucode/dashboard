import React, { useState } from 'react';
import '../component/CreateProjectContainer.css';
import axios from 'axios';

export default function CreateProjectContainer() {
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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === '' ) {
        alert(`Please fill in the ${key} field.`);
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
    axios.post("https://backend-bbi9.onrender.com/listings", content)
      .then(data => console.log(data))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='wrapper'>
      <div className='Project-Container'>
        <form onSubmit={handleSubmit}>
        <div className='Project-Head'>
            <input
              className='Project-Head-input'
              id='theme'
              placeholder='Enter Project Theme'
              value={formData.theme}
              onChange={handleInputChange}
            />
            <button className="Project-Head-btn" type="submit" disabled={isLoading} >
              {isLoading ? loadingText : 'Start Project'}
            </button>
          </div>
          <div className='Project-Main'>
            <div>
              <label htmlFor='reason' style={{ color: 'gray' }}>
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
              
            </div>
            <div>
              <label htmlFor='type' style={{ color: 'gray' }}>
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
            </div>
            <div>
              <label htmlFor='division' style={{ color: 'gray' }}>
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
            </div>
            <div>
              <label htmlFor='category' style={{ color: 'gray' }}>
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
            </div>
            <div>
              <label htmlFor='priority' style={{ color: 'gray' }}>
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
            </div>
            <div>
              <label htmlFor='department' style={{ color: 'gray' }}>
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
            </div>

          <div>
            <label htmlFor='start' style={{ color: 'gray' }}>
              Start Date as per Project Plan
            </label>
            <input
              type='date'
              className='Project-Main-input'
              id='startDate'
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='end' style={{ color: 'gray' }}>
              End Date as per Project Plan
            </label>
            <input
              type='date'
              className='Project-Main-input'
              id='endDate'
              value={formData.endDate}
              onChange={handleInputChange}
            />
            {dateError && <p className="error-text">{dateError}</p>}
          </div>
          
          <div>
              <label htmlFor='location' style={{ color: 'gray' }}>
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
            </div>
          </div>

          <div className='Project-status'>
            <p>Status: Registered</p>
          </div>

          
        </form>
      </div>
    </div>
  );
}
