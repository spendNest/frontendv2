import React from 'react'
import Layout from '@/components/Layout'
import { generateQuarterlyDates } from '@/utils'

const CreateSavings = () => {
  return (
    <Layout>
      <div className='pt-20 pb-5'>
        <div className='flex gap-5'>
          <div className="personal_savings_card p-6 flex flex-col gap-4 justify-between w-full md:w-[50%]">
            <span className='text-[20px] tracking-[0.085px] leading-5'>Create a Private Savings Club</span>
            <span className='grotesk_font text-base tracking-[0.085px] leading-5'>Use this option to create a private savings club for your close friends</span>
          </div>
          <div className="public_savings_bg p-6 flex flex-col gap-4 justify-between w-full md:w-[50%]">
            <span className='text-[20px] tracking-[0.085px] leading-5'>Create a Public Savings Club</span>
            <span className='grotesk_font text-base tracking-[0.085px] leading-5'>Use this option to create a public savings club for everyone</span>
          </div>
        </div>

        {/* form */}
        <div className='my-12'>
          <div className="grid md:flex gap-5 w-full mb-5">
            <div className='grid space-y-2 w-full'>
              <label>What are you Saving for? (Club Name)</label>
              <input type="text" placeholder="House rent" className="input input-bordered bg-[#696969] border-[#696969] w-full max-w-full bg-white" />
            </div>
            <div className='grid space-y-2 w-full'>
              <label>Target Amount</label>
              <input type="text" placeholder="$ 0.00" className="input input-bordered bg-[#696969] border-[#696969] w-full max-w-full bg-white" />
            </div>
          </div>
          <div className="grid md:flex gap-5 w-full mb-5">
            <div className='grid space-y-2 w-full'>
              <label>How will you prefer to save</label>
              <div className='flex gap-3'>
                <button className="btn bg-white font-normal">Weekly</button>
                <button className="btn bg-white font-normal">Monthly</button>
                <button className="btn bg-white font-normal">Manual</button>
              </div>
            </div>
            <div className='grid space-y-2 w-full'>
              <label>How much do you want to save anually</label>
              <input type="text" placeholder="$ 0.00" className="input input-bordered bg-[#696969] border-[#696969] w-full max-w-full bg-white" />
            </div>
          </div>
          <div className="grid md:flex gap-5 w-full mb-5">
            <div className='grid space-y-2 w-full'>
              <label>Start Date</label>
              <input type="date" placeholder="House rent" className="input input-bordered bg-[#696969] border-[#696969] w-full max-w-full bg-white" />
            </div>
            <div className='grid space-y-2 w-full'>
              <label>End Date (Quarterly)</label>
              <select className="select select-bordered w-full max-w-full bg-white">
                <option disabled selected>Select Option?</option>
                {generateQuarterlyDates().map((data, index) => (
                  <option key={index}>{data}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid md:flex gap-5 w-full mb-5">
            <div className='grid space-y-2 w-full'>
              <label>Primary Source of Funds</label>
              <select className="select select-bordered w-full max-w-full bg-white">
                <option disabled selected>Select Option?</option>
                <option>SpendNest Basic Account</option>
                <option>External Wallet</option>
              </select>
            </div>
            <div className='grid space-y-2 w-full'>
              <label>Who can add members</label>
              <select className="select select-bordered w-full max-w-full bg-white">
                <option disabled selected>Select Option?</option>
                <option>Admin</option>
                <option>Any member of the savings club</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateSavings