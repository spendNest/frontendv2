import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const JoinPublicClub = () => {
  const router = useRouter()
  const [showJoinModal, setShowJoinModal] = useState(false)

  const joinSavingsClub = () => {
    try {
      console.log("working")
    } catch (error) {
      console.log(error)
      toast.error("Joining Club Failed")
    }
  }
  return (
    <Layout>
      <div className='pt-20 pb-5 text-black'>
        <div className='w-full md:flex items-center justify-between rounded-[8px]' >
          <div className='flex items-center gap-2'>
            <div className='w-ful h-[100px] p-3 rounded-md flex justify-center' style={{ backgroundColor: "rgba(143, 231, 108, 0.50)" }} >
              <Image
                src="/savings/dollar_coins.svg"
                alt={""}
                className="w-full"
                width={80}
                height={80}
              />
            </div>
            <span className='font-bold text-lg'>Holiday in UK</span>
          </div>

          <div className='flex items-center gap-3'>
            <div className="w-[200px] bg-[#D9D9D9] h-[3px]">
              <div
                className="h-full bg-[#0F4880]"
                role="progressbar"
                style={{ width: `${10}%` }}
              ></div>
            </div>
            <span>17%</span>
          </div>
          <div className='grid'>
            <span className='text-[17px] font-bold'>120</span>
            <span className='text-[20px]'>members</span>
          </div>
          <div className='grid'>
            <span className='text-[17px] font-bold'>$15,802.00</span>
            <span className='text-[20px]'>Total saved</span>
          </div>
          <div className='grid'>
            <span className='text-[17px] font-bold'>$200</span>
            <span className='text-[20px]'>per members</span>
          </div>
        </div>

        {/* Payout */}
        <div className='my-12 space-y-2'>
          <span className='text-xl'>Payout Rule</span>
          <p className="text-base">YOU COLLECT OUR MONEY.<span>No one has access to your funds except you alone</span></p>
        </div>
      </div>

      {/* buttons */}
      <div className='flex gap-2 justify-center'>
        <button onClick={() => router.back()} className="w-[200px] h-[58px] rounded-lg bg-white border border-[#2A0FB1] text-[#2A0FB1] text-[17px] block leading-[25.5px] tracking-[0.5%] mt-[10px] ">
          Go Back
        </button>
        <button onClick={() => setShowJoinModal(true)} className="w-[200px] h-[58px] rounded-lg bg-[#2A0FB1] border border-[#2A0FB1] text-[#fefefe] text-[17px] block leading-[25.5px] tracking-[0.5%] mt-[10px] ">
          Join Now
        </button>
      </div>

      <div className='flex flex-wrap gap-4 mt-16'>
        <div className='grid bg-[#D2E9FF] p-2 w-[300px] rounded-md'>
          <span className='text-[17px]'>Start Date</span>
          <span className='text-[20px] font-bold text-black'>20th October, 2023</span>
        </div>
        <div className='grid bg-[#D2E9FF] p-2 w-[300px] rounded-md'>
          <span className='text-[17px]'>Withdrawal Date</span>
          <span className='text-[20px] font-bold text-black'>20th October, 2023</span>
        </div>
        <div className='grid bg-[#D2E9FF] p-2 w-[300px] rounded-md'>
          <span className='text-[17px]'>Target Per Member</span>
          <span className='text-[20px] font-bold text-black'>$1,000.00</span>
        </div>
        <div className='grid bg-[#D2E9FF] p-2 w-[300px] rounded-md'>
          <span className='text-[17px]'>Interest Per Annum</span>
          <span className='text-[20px] font-bold text-black'>8%</span>
        </div>
      </div>

      {/* Join Modal */}
      {showJoinModal &&
        <div>
          <input type="checkbox" checked={true} id="my_modal_6" className="modal-toggle" />
          <div className="modal bg-white">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">You are about to join this club savings</p>
              <div className="modal-action justify-center">
                <label onClick={() => setShowJoinModal(false)} htmlFor="my_modal_6" className="btn bg-white text-black">Close!</label>
                <label onClick={() => joinSavingsClub()} htmlFor="my_modal_" className="btn bg-[#2A0FB1] border border-[#2A0FB1] text-[#fefefe]">Proceed</label>
              </div>
            </div>
          </div>
        </div>
      }
    </Layout>
  )
}

export default JoinPublicClub