const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Choose a course you like, click the Enroll button, and follow the checkout steps. You can start learning immediately after payment.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. All courses are self‑paced, so you can watch lessons, pause, and revisit content whenever it works for you.",
  },
  {
    question: "Do courses include certificates?",
    answer:
      "Most courses include a completion certificate you can download and share once you finish all required lessons.",
  },
  {
    question: "What if I’m not satisfied?",
    answer:
      "We offer a 14‑day refund window for eligible courses. Contact our support team and we’ll be happy to help.",
  },
];

export default function Faq() {
  return (
    <section className="bg-[#ffc928] border-t-4 border-black py-16 pb-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          {/* Left: FAQ list */}
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
               
                <h2 className="mt-2 text-3xl font-extrabold text-black">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-black/80">
                  Find quick answers about course access, certificates, and how
                  learning on Coursefy works.
                </p>
              </div>

              <div className="hidden sm:flex flex-col items-end text-[#00d0c6] text-4xl">
                <span className="drop-shadow-[3px_3px_0_#000]">?</span>
                {/* <span className="-mt-2 drop-shadow-[3px_3px_0_#000]">?</span> */}
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  className={`group border-2 border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000] ${
                    index === 1 ? "bg-[#27e4d7]" : ""
                  }`}
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-black">
                    <span>{item.question}</span>
                    <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full border border-black text-xs">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">–</span>
                    </span>
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-black/80">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Right: YouTube video */}
          <div className="relative mt-4 h-[260px] w-full overflow-hidden border-2 border-black bg-black shadow-[6px_6px_0_#000] sm:h-[320px] lg:h-[360px]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/iN_YehRCVPA"
              title="Subhanallah Subhanallah Subhanallah full naat HD video #1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

