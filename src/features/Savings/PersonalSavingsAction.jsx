import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { PiArrowLeftBold } from 'react-icons/pi'

import { useRouter, useSearchParams } from 'next/navigation'
import Auth from '@/app/auth/Auth'
import { ethers } from 'ethers'
import childAbi from "@/app/auth/abi/child.json";
export default function PersonalSavingsAction() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const [amountVal, setAmountVal] = useState();
  const {childAddress, provider} = Auth()
 
  const type = searchParams.get('type')
  console.log(type)


  const sendFund = async (e) => {
    console.log('clicked')
    e.preventDefault();

    const ChildContract = new ethers.Contract(
      childAddress,
      childAbi,
      provider.getSigner()
    );
    if(type == 'add'){

      const tx = await ChildContract.addPersonalSavings(Number(amountVal) * 1000000);
  
      const txResponse = await tx.wait();
      console.log(txResponse);
    }
    const tx = await ChildContract.withdrawSavings(Number(amountVal) * 1000000);

    const txResponse = await tx.wait();
    console.log(txResponse);

    // console.log(txResponse.error);
  };

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
          <span className='font-bold text-lg block'>{type == 'add'?'Add Funds' : 'Withdraw Savings' }</span>
          <span className='font-normal text-[17px] block pt-2'>{type == 'add'?"The funds will be added directly from your basic account" : 'The funds will be removed directly from your Savings account'}</span>
        </div>

        <div className='flex items-center mt-10 gap-2 grotesk_font'>
          <div onClick={()=>setAmountVal(10)} className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-3 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">10</button>
          </div>
          <div onClick={()=>setAmountVal(20)} className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">20</button>
          </div>
          <div onClick={()=>setAmountVal(50)} className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">50</button>
          </div>
          <div onClick={()=>setAmountVal(100)} className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">100</button>
          </div>
          <div onClick={()=>setAmountVal(200)} className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 w-fit gap-1 mt-2 hover:cursor-pointer">
            <p className="font-normal head2 text-[24px]">$</p>
            <button type="text" className="head2 text-[32px] leading-[53.2px] text-[#696969] outline-none  rounded-r-lg">200</button>
          </div>
          <div className="flex items-center border-[1px] border-[#696969] rounded-lg px-4 py-2 w-fit gap-1 mt-2">
            <p className="font-normal head2 text-[24px]">$</p>
            <input type="text" value={amountVal}
                  onChange={(e) => setAmountVal(e.target.value)} placeholder="Enter Amount" className="head2 text-[17px] leading-[53.2px] text-[#696969] h-[100%] outline-none  rounded-r-lg" />
          </div>
        </div>

        <button onClick={sendFund} className="w-[360px] h-[58px] rounded-lg bg-[#2A0FB1] text-[#FEFEFE] text-[17px] block mx-auto leading-[25.5px] tracking-[0.5%] mt-[80px] ">
          {type === 'add'?'Add Fund': 'Withdraw Fund'}
        </button>

      </div>
    </Layout>
  )
}
