import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS ,DASHBOARD_SIDEBAR_BOTTOM_LINKS} from '../lib/consts/navigation'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'


const linkClasses='flex item-center gap-1 font-normal text-md px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function SideBar({handlesignout}) {
  return (
    <div className='bg-neutral-900 w-64 p-7 m-4 flex flex-col rounded-2xl text-white'>
    <div className='flex items-center gap-2 px-4 py-3'>
            
            <span className='text-neutral-100 text-3xl font-bold'>Board</span>

    </div>
        <div className='flex-1 py-4 flex flex-col gap-2'>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item}/>
            ))}
        </div>
        <div>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
            <Link to={item.path} className='flex item-center gap-0.2 font-normal  px-3 py-1 text-white hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-xs'>
           
            {item.label}
        </Link>
        ))}
        </div>
        <div className={classNames('text-red-400 cursor-pointer',linkClasses)}>
            <span className='text-xl'>{<HiOutlineLogout/>}</span>
            <button onClick={handlesignout}>Log out</button>
        </div>
    </div>
  )
}

function SidebarLink({item}){

    const {pathname}=useLocation()
    

    return(
        <Link to={item.path} className={classNames(pathname===item.path?'bg-neutral-700 text-white':'text-neutral-400',linkClasses)}>
            <span className='text-xl mr-3'>{item.icon}</span>
            {item.label}
        </Link>
    )
}