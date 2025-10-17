import React from "react";

function Banner() {
  return (
    <>
      <div className="flex justify-center mt-10 flex-col-reverse md:flex-col items-center gap-10 ">
        <div className="flex justify-center flex-col items-center">
          <h1 className="md:text-6xl text-3xl font-bold text-center text-gray-800">We Build  <br></br><span className="text-[#9964EF]">Productive</span>Apps</h1>
          <p className="w-[80%] mt-5  leading-tight text-gray-500 text-base md:text-lg text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          <div className="flex space-x-3 mt-6">
             <a href="https://play.google.com/store/apps?hl=en" target='_blank' className="flex space-x-2 items-center bg-gray-100 border border-gray-400 rounded-2xl px-5 py-2">
                 <img src="./playstore.png" alt="" />
                <h2 className="font-bold text-lg">Google Play</h2>
             </a>

              <a href="https://www.apple.com/app-store/" target='_blank' className="flex space-x-2 items-center bg-gray-100 border border-gray-400 rounded-2xl px-5 py-2">
                 <img src="./appStore.png" alt="" />
                <h2 className="font-bold text-lg">App Store</h2>
             </a>
          </div>
        </div>
        <div>
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
