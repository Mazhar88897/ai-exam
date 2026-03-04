import Image from "next/image";

export default function Hero() {
  const stars = [
    { size: "h-10 w-10", offset: "translate-y-[30px] translate-x-[-20px]" },
    { size: "h-8 w-8", offset: "translate-y-[10px] translate-x-[-22px]" },
    { size: "h-8 w-8", offset: "translate-y-[20px] translate-x-[-20px]" },
   
  ];

  return (
    <section className="flex  border-b-3 border-black items-stretch font-sans border-t-3 border-black ">
      {/* Left side */}
      

      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#33e1cd] px-4 py-12 md:px-10 ">
       

        <div className="relative z-10 max-w-md">
          <Image
            src="/test.png"
            alt="Happy student with laptop"
            width={680}
            height={680}
            priority
            className=""
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center bg-[#33e1cd] px-6 py-16 sm:px-10 lg:px-24 ">
        {/* star icons */}
        

        {/* heading */}
        <h1 className="max-w-2xl text-[40px] font-extrabold leading-[1.05] text-black sm:text-[54px] lg:text-[64px]">
          <span className="block">Get Started Your</span>
          <span className="block">Courses</span>
         
        </h1>

        {/* description */}
        <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-black/90 sm:text-base">
          Learning is the ultimate journey. coursefy makes it easy to start,
          manage and finish your learning adventures.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {/* Enroll button */}
          <div className="relative inline-block">
            <button className="relative inline-flex items-center justify-center border-2 border-black bg-[#ffc928] px-8 py-3 text-sm font-semibold text-black shadow-[4px_4px_0_#000]">
           Login Now
              <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full border border-black text-xs">
                <span className="translate-x-[1px] text-base">&gt;</span>
              </span>
            </button>
          </div>

          {/* Learn button */}
          
        </div>
      </div>
    </section>
  );
}

