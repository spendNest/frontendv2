
"use client"

import TokenTransfer from './TokenTransfer'
import FundHeader from './FundHeader'



 

export default function SendFund() {
      
  return (
    <main>
        <FundHeader/>


        {/* Token Transfer */}
        <div className="mt-[76px]">
                <TokenTransfer/>
        </div>
    </main>
  )
}
