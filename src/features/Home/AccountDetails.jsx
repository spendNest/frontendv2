import React from 'react'
import Layout from '@/components/Layout'
import WalletId from "@/components/WalletId"


const AccountDetails = () => {
  return (
    <Layout>
<<<<<<< HEAD
      <div className='pt-16 pb-5'>
=======
      <div className='pt-20 pb-5'>
>>>>>>> 35c6848a9143ee2941a54358ae938c4080aecf64
        <div className='flex gap-6 w-'>
          <span className='text-5xl pr-3'>&#8592;</span>
          <div className='grid space-y-2'>
            <span className='tracking-[0.08px] text-3xl'>Accounts</span>

          </div>
        </div>

        <WalletId type="account" />
      </div>
    </Layout>
  )
}

export default AccountDetails