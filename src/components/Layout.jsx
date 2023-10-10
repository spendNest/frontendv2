import React from 'react'
import SideBar from './SideBar'

export default function Layout({children}) {
  return (
    <main>
      <section className='min-h-screen max-h-screen flex gap-[24px]'>

      <SideBar />
      <div className="w-[100%]">
        {children}
      </div>
      </section>
    </main>
  )
}
