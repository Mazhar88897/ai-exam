import Image from "next/image";

export default function Hero() {
  const stars = [
    { size: "h-10 w-10", offset: "translate-y-[30px] translate-x-[-20px]" },
    { size: "h-8 w-8", offset: "translate-y-[10px] translate-x-[-22px]" },
    { size: "h-8 w-8", offset: "translate-y-[20px] translate-x-[-20px]" },
   
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-screen border-b-3 border-black items-stretch font-sans border-t-3 border-black">
      {/* Left side */}
      <div className="flex flex-1 flex-col justify-center bg-[#ffc928] px-6 py-12 sm:px-10 lg:px-24 border-b-3 md:border-b-0 md:border-r-3 border-black text-center md:text-left">
        {/* star icons */}
        <div className="mb-6 flex gap-2 text-black justify-center md:justify-start">
          {stars.map((star, idx) => (
            <div key={idx} className={star.offset}>
              <svg
                viewBox="0 0 24 24"
                className={star.size}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 2 15.8 8.2 22 12 15.8 15.8 12 22 8.2 15.8 2 12 8.2 8.2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* heading */}
        <h1 className="max-w-2xl mx-auto md:mx-0 text-[32px] sm:text-[40px] lg:text-[54px] xl:text-[64px] font-extrabold leading-[1.05] text-black">
          <span className="block">Get Started Your</span>
          <span className="block">Learning &amp; Enrich</span>
          <span
            className="mt-1 block text-[#ffc928]"
            style={{ WebkitTextStroke: "1.5px #000000" }}
          >
            Your Dream
          </span>
        </h1>

        {/* description */}
        <p className="mt-5 max-w-xl mx-auto md:mx-0 text-sm font-medium leading-relaxed text-black/90 sm:text-base">
          Learning is the ultimate journey. coursefy makes it easy to start,
          manage and finish your learning adventures.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
          {/* Enroll button */}
          <div className="relative inline-block">
            <button className="relative inline-flex items-center justify-center border-2 border-black bg-[#29e3dd] px-8 py-3 text-sm font-semibold text-black shadow-[4px_4px_0_#000]">
              Enroll Now
              <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full border border-black text-xs">
                <span className="translate-x-[1px] text-base">&gt;</span>
              </span>
            </button>
          </div>

          {/* Learn button */}
          <div className="relative inline-block">
            <button className="relative inline-flex items-center justify-center border-2 border-black bg-[#ffc928] px-8 py-3 text-sm font-semibold text-black shadow-[4px_4px_0_#000]">
              Enroll Now
              <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full border border-black text-xs">
                <span className="translate-x-[1px] text-base">&gt;</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#33e1cd] px-4 py-12 sm:py-16 md:px-10">
       

        <div className="relative z-10 w-full max-w-md mx-auto">
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
    </section>
  );
}

