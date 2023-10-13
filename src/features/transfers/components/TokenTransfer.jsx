

export default function TokenTransfer() {
  return (
    <div>
        <form>
                <div className="flex gap-5">

                <div className="w-[50%]">

                <label htmlFor="" className="font-normal text-[17px] leading-5 tracking-[0.5%] ">Amount to transfer</label>
                <div className="flex items-center border-[1px] border-[#696969] rounded-lg pl-[10px] gap-4 h-[72px] mt-2">
                        <p className="font-normal head2 text-[24px] leading-[32px] ">$</p>
                <input type="text" placeholder="0.00" className="head2 text-[36px] leading-[53.2px] text-[#696969] h-[100%] outline-none  rounded-r-lg"/>
                </div>
                </div>
                <div className="w-[50%]">

                <label htmlFor="" className="font-normal text-[17px] leading-5 tracking-[0.5%] ">Beneficiary (NestSpend Address)</label>
                <div className="flex items-center border-[1px] border-[#696969] rounded-lg pl-[10px] gap-4 h-[72px] mt-2">
                <input type="text" placeholder="ehu7738939903mdjffjfj" className="head2 text-[20px] leading-[53.2px] text-[#696969] h-[100%] outline-none  rounded-r-lg font-bold" />
                </div>
                </div>
                </div>
                {/* button */}
                <div className="flex justify-center">

                <button className="w-[360px] h-[58px] rounded-lg bg-[#0F4880] text-[#FEFEFE] text-[17px] leading-[25.5px] tracking-[0.5%] mt-[80px] ">
                Send Fund
                </button>
                </div>
        </form>
    </div>
  )
}
