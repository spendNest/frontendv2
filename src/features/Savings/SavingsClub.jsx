import Layout from '@/components/Layout'
import Image from 'next/image'
import { useState } from 'react'
import { PiArrowLeftBold, PiArrowRightBold } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { clubs } from '@/utils'
import Link from 'next/link'

export default function SavingsClub() {
  const router = useRouter()
  // const [savingLive, setSavingLive] = useState(true)

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

        <div className='mt-8 sm:mt-10 mb-10'>
          <div href="/savings/club" className="flex items-center savings_club p-6 hover:cursor-pointer">
            <div className='grid w-full'>
              <div className='w-14 h-14 p-1'>
                <Image
                  src="/savings/saving_hands.svg"
                  alt={""}
                  className="object-cover w-full"
                  width={20}
                  height={20}
                />
              </div>
              <p className='text-[#C27810] text-lg font-bold'>Savings Club</p>
              <span className='grotesk_font text-[base] tracking-[0.085px] leading-5 my-2 block w-[55%]'>Reach your unique savings goals with others by locking funds to avoid temptation</span>
            </div>
            <span className='text-[#C27810] text-xl font-bold'>$100.80</span>
          </div>
        </div>

        {/* Transaction History */}
        <div className='mt-8 sm:my-10'>
          <div className='flex justify-between items-center'>
            <span className='font-bold text-lg'>Trending Savings Club</span>
            <Link href="/history" className='flex items-center text-base text-[#C27810] grotesk_font gap-1'>
              <span>See more</span>
              <span className=''>&#62;</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-8 text-white">
            {clubs.map((card, index) => (
              <div key={index} className='w-full rounded-[8px] border-t md:max-w-[300px]' >
                <div className='w-full h-[180px] flex justify-center' style={{ backgroundColor: card.bg_col }} >
                  <Image
                    src={card?.imagePath}
                    alt={""}
                    className="w-full"
                    width={120}
                    height={120}
                  />
                </div>

                <div className='text-black grid mt-1'>
                  <span className='font-bold text-lg'>{card.name}</span>
                  <div className="w-full bg-[#D9D9D9] h-[3px]">
                    <div
                      className="h-full bg-[#0F4880]"
                      role="progressbar"
                      style={{ width: `${10}%` }}
                    ></div>
                  </div>
                  <div className='space-x-2'>
                    <span className='text-[14px] font-bold'>{card.members}</span>
                    <span className='text-[12px]'>members</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 
        <div className="flex justify-center w-[50%] mx-auto">
          <div className='text-black grid mt-1 w-full'>
            <span className='font-bold text-lg pb-1 hover:cursor-pointer block text-center'>Live</span>
            <div className="w-full bg-[#D9D9D9] h-[3px]">
              <div
                className="h-full bg-[#0F4880]"
                role="progressbar"
                style={{ width: `100%` }}
              ></div>
            </div>
          </div>
          <div className='text-black grid mt-1 w-full'>
            <span className='font-bold text-lg pb-1 hover:cursor-pointer block text-center'>Completed</span>
            <div className="w-full bg-[#D9D9D9] h-[3px]">
              <div
                className="h-full bg-[#0F4880]"
                role="progressbar"
                style={{ width: `0%` }}
              ></div>
            </div>
          </div>
        </div> */}

        {/* <div className='mt-8 block text-center'>
          {!savingLive ?
            <span className='w-full md:w-[100px]'>
              You have <span className='font-bold'>Not Completed</span> any savings club yet. It will show here once you are done
            </span>
            :
            <span>
              You have <span className='font-bold'>No Ongoing</span> savings
            </span>
          }
        </div> */}

        <div className='flex justify-center items-center text-[#0F4880] gap-2 mt-4'>
          <span className='tracking-[0.08px] text-lg grotesk_font'>Create a Savings Club</span>
          <PiArrowRightBold
            size={24}
            className="font-bold hover:cursor-pointer"
            onClick={() => router.push('/savings/club/create_savings')}
          />
        </div>
      </div>
    </Layout>
  )
}
