import React from 'react'
import Layout from '@/components/Layout'
import WalletId from "@/components/WalletId"


const FundingSource = () => {
  return (
    <Layout>
      <div className='pt-20 pb-5'>
        <div className='flex gap-6 w-'>
          <span className='text-5xl pr-3'>&#8592;</span>
          <div className='grid space-y-2'>
            <span className='tracking-[0.08px] text-3xl'>Funding Source</span>
            <span className='text-base'>Select one of the funding sources and proceed</span>
          </div>
        </div>

        <WalletId type="fund" />
      </div>
    </Layout>
  )
}

export default FundingSource