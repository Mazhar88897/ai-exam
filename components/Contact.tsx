export default function Contact() {
  return (
    <section className="bg-[#27e4d7] border-t-4 border-black py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Left: heading + copy */}
          <div className="space-y-4">
            
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
              Contact us
            </p>
            <div className="bg-white p-6 border-2 border-black shadow-[6px_6px_0_#000]">
            <h2 className="text-3xl font-extrabold text-black mb-4">
              Let&apos;s Start Your Learning Journey
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-black/80">
              Have questions about courses, pricing, or something else? Send us
              a message and our team will get back to you as soon as possible.
            </p>

            <div className="mt-4 grid gap-3 text-sm">
              <p className="font-semibold text-black">
                Email:{" "}
                <span className="font-normal underline decoration-black">
                  support@coursefy.com
                </span>
              </p>
              <p className="font-semibold text-black">
                Phone:{" "}
                <span className="font-normal">+1 (555) 123-4567</span>
              </p>
            </div>

            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="absolute left-3 top-3 h-full w-full bg-black" />
            <div className="relative border-2 border-black bg-[#ffc928] px-6 py-6">
              <h3 className="mb-4 text-lg font-semibold text-black">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="name" className="font-semibold text-black">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="h-10 border-2 border-black bg-white px-3 text-sm outline-none focus:bg-[#fff7d6]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <label
                      htmlFor="email"
                      className="font-semibold text-black"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="h-10 border-2 border-black bg-white px-3 text-sm outline-none focus:bg-[#fff7d6]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="subject"
                    className="font-semibold text-black"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="h-10 border-2 border-black bg-white px-3 text-sm outline-none focus:bg-[#fff7d6]"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="message"
                    className="font-semibold text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="border-2 border-black bg-white px-3 py-2 text-sm outline-none focus:bg-[#fff7d6]"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center border-2 border-black bg-[#29e3dd] px-8 py-2 text-sm font-semibold text-black shadow-[4px_4px_0_#000] transition hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

