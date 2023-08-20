import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

export default function Layout({handlesignout}) {

  

  return (
    <div className='flex flex-row bg-neutral-200 max-h-full w-screen overflow-x-hidden'>
     <SideBar handlesignout={handlesignout}/>
      <div className='flex-1'>
          <Header handlesignout={handlesignout}/>
            <div>
            {<Outlet />}
            </div>
      </div>
    </div>
  )
}
