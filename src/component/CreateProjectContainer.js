import React from 'react'
import '../component/CreateProjectContainer.css';

export default function CreateProjectContainer() {
  return (
    <div className='wrapper'>
      
       <div className='Project-Container'>
        <div className='Project-Head'>
            <input className='Project-Head-input' placeholder='Enter Project Theme'/>
            <button className='Project-Head-btn'>Start Project</button>
        </div>
        <div className='Project-Main'>
         <div>
        <label htmlFor='reason' style={{color: 'gray'}}>Reason</label>
        <select  className='Project-Main-input' id='reason' placeholder='Enter Project Theme'>
        <option>For Business</option>
        <option>Dealership</option>
        <option>Transport</option>
      </select>
        </div>
         <div>
        <label htmlFor='type' style={{color: 'gray'}}>Type</label>
         <select className='Project-Main-input' id='type' placeholder='Enter Project Theme'>
        <option>Internal</option>
        <option>External</option>
        <option>Vendor</option>
      </select>
        </div>
         <div>
        <label htmlFor='division' style={{color: 'gray'}}>Division</label>
        <select className='Project-Main-input' id='division' placeholder='Enter Project Theme'>
        <option>Compressor</option>
        <option>Filters</option>
        <option>Pumps</option>
        <option>Glass</option>
        <option>Water Heater</option>
      </select>
        </div>
         <div>
        <label htmlFor='category' style={{color: 'gray'}}>Category</label>
        <select className='Project-Main-input' id='category' placeholder='Enter Project Theme'>
        <option>Quality A</option>
        <option>Quality B</option>
        <option>Quality C</option>
        <option>Quality D</option>
      </select>
        </div>
         <div>
        <label htmlFor='priority' style={{color: 'gray'}}>Priority</label>
        <select className='Project-Main-input' id='priority' placeholder='Enter Project Theme'>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
          </div>
         <div>
        <label htmlFor='department' style={{color: 'gray'}}>Department</label>
        <select className='Project-Main-input' id='department' placeholder='Enter Project Theme'>
        <option>Startegy</option>
        <option>Finance</option>
        <option>Quality</option>
        <option>Maintenance</option>
        <option>Stores</option>
      </select>
         </div>
         <div>
        <label htmlFor='start' style={{color: 'gray'}}>Start Date as per Project Plan</label>
         <input type='date' className='Project-Main-input' id='start' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='end' style={{color: 'gray'}}>End Date as per Project Plan</label>
         <input type='date' className='Project-Main-input' id='end' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='location' style={{color: 'gray'}}>Location</label>
        <select className='Project-Main-input' id='location' placeholder='Enter Project Theme'>
        <option>Pune</option>
        <option>Delhi</option>
        <option>Mumbai</option>
      </select>
        </div>
        
        </div>
        <div className='Project-status'>
            <p>Status: Registered</p>
        </div>
    </div>
    </div>
   
  )
}
