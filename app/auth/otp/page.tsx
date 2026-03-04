export default function OtpPage() {
  return (
    <main className="min-h-screen bg-[#33e1cd] border-t-4 border-black flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md border-2 border-black bg-[#ffc928] p-6 shadow-[10px_10px_0_#000]">
        <h1 className="text-2xl font-extrabold text-black sm:text-3xl">
          Enter OTP
        </h1>
        <p className="mt-2 text-sm text-black/80">
          We&apos;ve sent a 6‑digit one‑time code to your email or phone. Type it
          below to continue.
        </p>

        <form className="mt-6 space-y-4">
          <div className="flex justify-between gap-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                className="h-10 w-10 border-2 border-black bg-white text-center text-sm outline-none focus:bg-[#fff7d6]"
              />
            ))}
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center border-2 border-black bg-[#29e3dd] px-6 py-2 text-sm font-semibold text-black shadow-[4px_4px_0_#000]"
          >
            Verify code
          </button>
        </form>
      </section>
    </main>
  );
}

