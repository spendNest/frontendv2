import Layout from '@/components/Layout'
import React from 'react'
import { PiArrowLeftBold } from 'react-icons/pi'

import { useRouter } from 'next/navigation'

export default function PersonalSavingsAction() {
  const router = useRouter()

  return (
    <Layout>
      <div className='pt-20 pb-5'>
        <div className='flex gap-6'>
          <PiArrowLeftBold
            size={24}
            className="font-bold cursor-pointer mt-2"
            onClick={() => router.back()}
          />
          <span className='tracking-[0.08px] text-3xl'>Personal Savings</span>
        </div>

        <div className='pt-10 '>
          <span className='font-bold text-lg block'>Add Funds</span>
          <span className='font-normal text-[17px] block pt-2'>The funds will be added directly from your basic account</span>
        </div>

        <div className='flex items-center mt-10 gap-2 grotesk_font'>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-3 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">10</button>
          </div>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">20</button>
          </div>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">50</button>
          </div>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">100</button>
          </div>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">200</button>
          </div>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 py-2 w-fit gap-1 mt-2">
            <p className="font-normal head2 text-[24px]">$</p>
            <input type="text" placeholder="Enter Amount" className="head2 text-[17px] leading-[53.2px] text-[#696969] h-[100%] outline-none  rounded-r-lg" />
          </div>
        </div>

        <button className="w-[360px] h-[58px] rounded-lg bg-[#2A0FB1] text-[#FEFEFE] text-[17px] block mx-auto leading-[25.5px] tracking-[0.5%] mt-[80px] ">
          Add Fund
        </button>

      </div>
    </Layout>
  )
}
