"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Layout from '@/components/Layout'
import WalletId from "@/components/WalletId"
import { PiArrowLeftBold } from 'react-icons/pi'

const FundingSource = () => {
  const router = useRouter()

  return (
    <Layout>
      <div className='pt-16 pb-5'>
        <div className='flex gap-6 w-'>
          <PiArrowLeftBold
            size={24}
            className="font-bold cursor-pointer mt-2"
            onClick={() => router.back()}
          />
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