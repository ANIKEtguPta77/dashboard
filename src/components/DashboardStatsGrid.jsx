import React from 'react'
import { BsWallet2 } from "react-icons/bs";
import { HiTag } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';


export default function () {
    return (
        <div className='flex gap-8 w-11/12 h-24'>
            <div className='rounded-xl p-4 flex-1 border border-gray-200 flex flex-col bg-green-100'>

                <div className='rounded-full flex flex-row justify-end font-extrabold '>
                    <BsWallet2 fontSize={20} />
                </div>
                <div className='ml-4 '>
                    <span className='text-xs font-bold'>Total Revenues</span>
                    <div className='mt-1'>
                        <strong className='font-extrabold text-l '>
                            $12,31,31
                        </strong>
                    </div>
                </div>
            </div>
            <div className='rounded-xl p-4 flex-1 border border-gray-200 flex flex-col bg-orange-100'>

                <div className='rounded-full flex flex-row justify-end font-extrabold '>
                    <HiTag fontSize={20} />
                </div>
                <div className='ml-4 '>
                    <span className='text-xs font-bold'>Total Transactions</span>
                    <div className='mt-1'>
                        <strong className='font-extrabold text-l '>
                            31231
                        </strong>
                    </div>
                </div>
            </div>
            <div className='rounded-xl p-4 flex-1 border border-gray-200 flex flex-col bg-red-100'>

                <div className='rounded-full flex flex-row justify-end font-extrabold '>
                    <BiLike fontSize={20} />
                </div>
                <div className='ml-4 '>
                    <span className='text-xs font-bold'>Total Likes</span>
                    <div className='mt-1'>
                        <strong className='font-extrabold text-l '>
                            1231
                        </strong>
                    </div>
                </div>
            </div>
            <div className='rounded-xl p-4 flex-1 border border-gray-200 flex flex-col bg-violet-100'>

                <div className='rounded-full flex flex-row justify-end font-extrabold '>
                    <FiUsers fontSize={20} />
                </div>
                <div className='ml-4'>
                    <span className='text-xs font-bold'>Total Users</span>
                    <div className='mt-1'>
                        <strong className='font-extrabold text-l '>
                            900
                        </strong>
                    </div>
                </div>
            </div>


        </div>
    )
}


