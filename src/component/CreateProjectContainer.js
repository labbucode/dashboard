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
         <input className='Project-Main-input' id='reason' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='type' style={{color: 'gray'}}>Type</label>
         <input className='Project-Main-input' id='type' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='division' style={{color: 'gray'}}>Division</label>
         <input className='Project-Main-input' id='division' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='category' style={{color: 'gray'}}>Category</label>
         <input className='Project-Main-input' id='category' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='priority' style={{color: 'gray'}}>Priority</label>
         <input className='Project-Main-input' id='priority' placeholder='Enter Project Theme'/>
        </div>
         <div>
        <label htmlFor='department' style={{color: 'gray'}}>Department</label>
         <input className='Project-Main-input' id='department' placeholder='Enter Project Theme'/>
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
         <input className='Project-Main-input' id='location' placeholder='Enter Project Theme'/>
        </div>
        
        </div>
        <div className='Project-status'>
            <p>Status: Registered</p>
        </div>
    </div>
    </div>
   
  )
}
