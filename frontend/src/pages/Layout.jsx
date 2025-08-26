import React from 'react'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
      <h1>LayOut</h1>
      <Outlet/>
    </div>
  )
}

export default LayOut
