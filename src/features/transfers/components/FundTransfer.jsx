/** @format */
"use client"
import Auth from "@/app/auth/Auth";
import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export default function FundTransfer() {
        const {address} =Auth();

        const copyToClipboard = () => {
              
                let copyText = address;
                let isCopy = copy(copyText);
   
                if (isCopy) {
                  toast.success("Wallet Address Copied For Fund Transfer");
                }
              };
  return (
    <main>
      <section className="flex justify-between mt-20 ">
        <div onClick={copyToClipboard} className="w-[49%] funda_bg rounded-2xl cursor-pointer">
          <div className="w-[90%] mx-auto py-3 flex justify-between items-center">
        <div  className="">

            <img src="./Group.svg" alt="" className="w-[56px] h-[56px]" />
            <h2 className="text-[20px] font-bold head2 leading-[26px] tracking-[1.3%] mt-[20px]">Send using Wallet</h2>
                </div>
          <div className="">
                <img src="./Transfer.png" alt="" className="w-[48px] h-[48px]"/>
          </div>
          </div>
        </div>
        <div className="w-[49%] funda_bg rounded-2xl">
          <div className="w-[90%] mx-auto py-3 flex justify-between items-center">
        <div className="">

            <img src="./ Cryptocurrency.svg" alt="" className="w-[56px] h-[56px]" />
            <h2 className="text-[20px] font-bold head2 leading-[26px] tracking-[1.3%] mt-[20px]">Send between own accounts</h2>
                </div>
          <div className="">
                <img src="./Transfer.png" alt="" className="w-[48px] h-[48px]"/>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
