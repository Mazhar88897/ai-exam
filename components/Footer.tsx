export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top row */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
             
              <span>Coursefy</span>
            </div>
            <p className="text-lg font-semibold">Ready to get started?</p>
            <p className="max-w-sm text-sm text-neutral-300">
              Join thousands of learners leveling up their skills with playful,
              practical lessons.
            </p>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 max-w-md">
            <p className="text-sm font-semibold">Subscribe to our newsletter</p>
            <p className="text-xs text-neutral-400">
              Be the first to know about new courses, live sessions, and
              discounts.
            </p>
            <form className="flex overflow-hidden rounded-full border border-white/30 bg-zinc-900/60">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="flex h-11 items-center gap-1 bg-[#ffc928] px-5 text-sm font-semibold text-black"
              >
                Subscribe
                {/* <span className="text-base">&rarr;</span> */}
              </button>
            </form>
          </div>

          {/* Link columns */}
          <div className="flex flex-1 flex-wrap gap-10 text-sm md:justify-end">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                About
              </h4>
              <ul className="space-y-1 text-neutral-300">
                <li>Our Story</li>
                <li>Benefits</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Help
              </h4>
              <ul className="space-y-1 text-neutral-300">
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-neutral-500 md:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Coursefy</span>
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            {["F", "T", "In", "Ig"].map((label) => (
              <button
                key={label}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-[10px] hover:bg-white hover:text-black transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

