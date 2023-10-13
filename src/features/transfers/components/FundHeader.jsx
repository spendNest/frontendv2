/** @format */
import { useRouter } from 'next/navigation'
import { PiArrowLeftBold } from 'react-icons/pi'

export default function FundHeader() {
  const router = useRouter()
  return (
    <div>
      <div className="flex gap-4 items-center pt-16 ">
        <PiArrowLeftBold
          size={24}
          className="font-bold cursor-pointer"
          onClick={() => router.back()}
        />
        <h2 className="font-normal text-[32px] leading-10 head2">Transfers</h2>
      </div>

      {/* Available Balance */}
      <div className="w-[100%] h-[91px] bg-[#D2E9FF] rounded-lg mt-[128px] flex items-center pl-6 gap-6">
        <div className=" flex items-center gap-2">
          <p className="text-[24px] font-normal leading-[31.2px] tracking-[1.3%] head2">
            $
          </p>
          <p className="text-[40px] font-normal leading-[60px] tracking-[1.3%] head2">
            0.00
          </p>
        </div>
        <p className="text-[17px] font-normal leading-[25.5px] tracking-[0.5%] head1">
          Available Balance
        </p>
      </div>
    </div>
  );
}
