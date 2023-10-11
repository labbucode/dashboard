import React from 'react'
import '../component/GraphImage.css'
import RateCharts from './RateCharts'

export default function GraphImage() {
  return (
    <>
    <div className='Graph-Page'>
        <div className="box">
          <h4>Total Projects</h4>
          <p className='p'>8</p>
        </div>
        <div className="box">
          <h4>Closed</h4>
          <p className='p'>2</p>
        </div>
        <div className="box">
          <h4>Running</h4>
          <p className='p'>3</p>
        </div>
        <div className="box">
          <h4>Closure Delay</h4>
          <p className='p'>2</p>
        </div>
        <div className="box">
          <h4>Cancelled</h4>
          <p className='p'>3</p>
        </div>
         
      
    </div>
    <div>
        <h4>Department wise - Total Vs Closed</h4>
        <div className='Graph-Container'>
        <RateCharts />
        </div>
    </div>
    </>
  )
}
