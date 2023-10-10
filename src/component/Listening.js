import React from 'react'
import '../component/Listening.css'

export default function Listening() {
  return (
    <div className='Listening-container'>
      <input placeholder='Search' className='search-input' />
      <div class="container">
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
            <tr>
              <td><p>Line Filter</p><p>jun-21, 2020 to Jan-01, 2021</p></td>
              <td>Bussiness</td>
              <td>Internal</td>
              <td>Compressor</td>
              <td>Quality A</td>
              <td>High</td>
              <td>Startegy</td>
              <td>Pune</td>
              <td>Running</td>
              <td><button className='td-btn1'>Start</button></td>
              <td><button className='td-btn'>Close</button></td>
              <td><button className='td-btn'>Cancel</button></td>

            </tr>
            <tr>
              <td>Line Filter</td>
              <td>Bussiness</td>
              <td>Internal</td>
              <td>Compressor</td>
              <td>Quality A</td>
              <td>High</td>
              <td>Startegy</td>
              <td>Pune</td>
              <td>Running</td>
              <td><button className='td-btn1'>Start</button></td>
              <td><button className='td-btn'>Close</button></td>
              <td><button className='td-btn'>Cancel</button></td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
