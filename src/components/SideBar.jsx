"use client"
import React from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { BsSend } from 'react-icons/bs'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'
import { PiHandCoins } from 'react-icons/pi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




export default function SideBar() {
  const pathname = usePathname();
  const menu = [
    {
      name: "Home",
      icon: HiOutlineHome,
      href: "/home"
    },
    {
      name: "Transfers",
      icon: BsSend,
      href: "/transfers"
    },
    {
      name: "Savings",
      icon: MdOutlineEnergySavingsLeaf,
      href: "/savings"
    },
    {
      name: "Services",
      icon: PiHandCoins,
      href: "/services"
    },
  ]
  return (
    <main>
      <section className='w-[380px] min-h-screen max-h-screen bg-[#D2E9FF]'>
        <section className='w-[90%] mx-auto'>

          <Link href="/home" className="w-[221px] pt-[60px] flex items-center gap-1 mx-auto">
            <img src="/Group 1.svg" alt="logo" className='w-[40.5px] h-[39px]' />
<<<<<<< HEAD
            <h1 className="text-[28px] leading-6 text-[#0F4880] logo font-semibold ">SpendNest</h1>
=======
            <h1 className="text-[28px] leading-6 text-[#0F4880] orbitron_font font-semibold ">SpendNest</h1>
>>>>>>> 35c6848a9143ee2941a54358ae938c4080aecf64
          </Link>
          <div className='mt-[100px] flex flex-col gap-4'>
            {
              menu.map((items, index) => {
                const isActive = pathname?.startsWith(items?.href)

                return (
                  <Link href={items?.href} key={index} className={`${isActive && 'bg-[#FBFDFF] rounded-lg'} flex gap-2 items-center text-[#0F4880] w-[100%] h-[48px] pl-[90px]`}>
                    <items.icon size={30} className="" />
                    <h3 className="font-bold text-[20px] leading-7 tracking-[1.3%] head2">{items.name}</h3>
                  </Link>
                )
              }

              )
            }
          </div>

          <div className=" flex items-center bg-[#FBFDFF] rounded-2xl h-[80px] gap-2 justify-center relative w-[100%] top-[240px]">
            <img src="/MetaMask - png 0.svg" alt="wallet logo" className='w-[36px] h-[36px] rounded' />
            <p className="text-[17px] leading-6 font-normal tracking-[0.5%] text-[#0F4880] head1">194XV7C......ROFYOF</p>
          </div>
        </section>

      </section>

    </main>


  )
}
