import React from "react";

export default function NotFound() {
  return (
    <section className="w-screen h-screen bg-[url('/public/assets/images/img-crayon-02.gif')]">
      <div className="flex flex-col items-center justify-center gap-y-[36px] py-[80px]">
        <p className="text-[48px] font-black leading-[1.8] bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-serif">
          앗 당신은 길을 잃었어요~!
          <br />
          주머니 속의 돈을 저에게 주세요
        </p>

        <div className="relative group">
          <img
            className="w-[360px] transition-transform group-hover:scale-150"
            src="/assets/images/img-money.jpeg"
            alt="give me money"
          />
          <p className="absolute left-1/2 top-3/4 px-[24px] py-0 whitespace-nowrap text-[48px] -translate-x-1/2 text-transparent transition-all group-hover:text-[#000] group-hover:bg-white">
            많이 주세요
          </p>
        </div>
      </div>
    </section>
  );
}
