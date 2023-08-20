import React,{Fragment} from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineBell } from "react-icons/ai";
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames';

export default function Header({handlesignout}) {
    const { pathname } = useLocation()
    const navigate=useNavigate()


    return (
        <div className='px-4 h-6 flex flex-row items-center mt-5 p-6 justify-between'>
            <div className='text-2xl font-bold ml-8'>
                Dashboard
            </div>
            <div className='flex flex-row gap-4'>
                <div className='relative'>
                    <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1 right-1' />
                    <input type='text' placeholder='Search .. ' className='text-sm focus:outline-none rounded-lg h-7' />
                </div>
                <Popover>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of the chevron icon. */
                        <>
                            <Popover.Button className="inline-flex items-center text-gray-700 hover:text-opacity-100 rounded-md">
                                <AiOutlineBell fontSize={25} />

                            </Popover.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Messages</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            This is notification panel
                                        </div>

                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Menu as="div" className="relative">
					<div>
						<Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<span className="sr-only">Open user menu</span>
							<div
								className="h-8 w-8 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
							>
								<span className="sr-only">Marc Backes</span>
							</div>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/profile')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Your Profile
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/settings')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Settings
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										<button onClick={handlesignout}>Sign Out</button>
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>

            </div>
        </div>
    )
}
