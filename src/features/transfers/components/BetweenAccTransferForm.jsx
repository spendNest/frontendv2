/** @format */

import { ethers } from "ethers";
import childAbi from "@/app/auth/abi/child.json";
import React, { useState } from "react";
import Auth from "@/app/auth/Auth";

export default function BetweenAccTransferForm() {
  const [amountVal, setAmountVal] = useState();
  const {childAddress, provider} = Auth()

  const sendBetweenAcct = async (e) => {
    e.preventDefault();

    const ChildContract = new ethers.Contract(
      childAddress,
      childAbi,
      provider.getSigner()
    );

    const tx = await ChildContract.transferBetweenOwnAcct(Number(amountVal) * 1000000);

    const txResponse = await tx.wait();
    console.log(txResponse);
    // console.log(txResponse.error);
  };
  return (
    <section>
      <div className="w-[50%] mx-auto relative">
        <form className="relative">
          <div className="flex items-center justify-between border-[2px] z-10 rounded-lg py-[14px] px-[15px] border-black relative">
            <div className="">
              <p className="font-bold text-[14px] leading-6 head2 tracking-[10%] ">
                From
              </p>
              <div className="flex items-center gap-2 h-[59px] mt-4">
                <p className="head2 text-[24px] leading-[32px] tracking-[1.3%] font-normal ">
                  $
                </p>
                <input
                  type="text"
                  value={amountVal}
                  onChange={(e) => setAmountVal(e.target.value)}
                  placeholder="0.00"
                  className="text-[40px] head2 leading-[60px] text-black  w-[200px] outline-none"
                />
              </div>
            </div>
            <div className="">
              <p className="font-normal text-[20px] leading-[26px] tracking-[1.3%]">
                Basic Account
              </p>
            </div>
          </div>
          <div className="absolute flex justify-center z-50 left-0 right-0 top-28">
            <img src="../Frame 108.svg" alt="" className="w-[48px] h-[48px]" />
          </div>

          <div className="flex items-center justify-between border-[2px] z-10 rounded-lg py-[14px] px-[15px] border-black mt-4 relative">
            <div className="">
              <p className="font-bold text-[14px] leading-6 head2 tracking-[10%] ">
                To
              </p>
              <div className="flex items-center gap-2 h-[59px] mt-4">
                <p className="head2 text-[24px] leading-[32px] tracking-[1.3%] font-normal ">
                  $
                </p>
                <input
                  type="text"
                  placeholder="0.00"
                  value={amountVal}
                  className="text-[40px] head2 leading-[60px] text-black  w-[200px] outline-none"
                />
              </div>
            </div>
            <div className="">
              <p className="font-normal text-[20px] leading-[26px] tracking-[1.3%]">
                Shared Account
              </p>
            </div>
          </div>
          {/*  */}

          {/*  */}

          {/* button */}
          <div className="flex justify-center">
            <button
              onClick={sendBetweenAcct}
              className="w-[360px] h-[58px] rounded-lg bg-[#0F4880] text-[#FEFEFE] text-[17px] leading-[25.5px] tracking-[0.5%] mt-[80px] "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
