export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#33e1cd] border-t-4 border-black">
      <section className="mx-auto max-w-6xl px-4 py-16">
        {/* Heading row */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
              About us
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
              Learning made playful, smart &amp; simple.
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-black">
            
            <span className="font-semibold tracking-wide">35k+ happy learners</span>
          </div>
        </div>

        {/* Main content cards */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Left: story card */}
          <div className="relative">
            {/* <div className="absolute left-2 top-1 h-[88%] w-full bg-black" /> */}
            <div className="relative border-2 border-black bg-[#ffc928] p-6 border-2 border-black  px-3 py-4 shadow-[6px_6px_0_#000]">
              <h2 className="text-lg font-semibold text-black">
                Why we built Coursefy
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/90">
                Coursefy started with a simple idea: learning should feel as fun as
                it is useful. We combine crisp video lessons, interactive
                challenges, and real‑world projects to help you go from &quot;I
                have no idea&quot; to &quot;I&apos;ve got this&quot; without
                burning out.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/90">
                Our team of instructors, designers, and engineers work together to
                turn complex topics into clear, visual stories. Every course is
                broken into small wins so you stay motivated from the first
                lesson to the final project.
              </p>
            </div>
          </div>

          {/* Right: stats + pillars */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 text-center text-sm font-semibold text-black">
              <div className="border-2 border-black bg-white px-3 py-4 shadow-[4px_4px_0_#000]">
                <p className="text-2xl font-extrabold">35k+</p>
                <p className="mt-1 text-xs text-black/70">Students</p>
              </div>
              <div className="border-2 border-black bg-white px-3 py-4 shadow-[4px_4px_0_#000]">
                <p className="text-2xl font-extrabold">120+</p>
                <p className="mt-1 text-xs text-black/70">Courses</p>
              </div>
              <div className="border-2 border-black bg-white px-3 py-4 shadow-[4px_4px_0_#000]">
                <p className="text-2xl font-extrabold">4.8</p>
                <p className="mt-1 text-xs text-black/70">Avg rating</p>
              </div>
            </div>

            <div className="border-2 border-black bg-white p-5 shadow-[6px_6px_0_#000]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/70">
                Our pillars
              </p>
              <ul className="mt-3 space-y-2 text-sm text-black/90">
                <li>
                  <span className="font-semibold">Clarity first.</span> No jargon,
                  just clean explanations and visuals.
                </li>
                <li>
                  <span className="font-semibold">Practice over theory.</span> Short
                  lessons followed by hands‑on tasks.
                </li>
                <li>
                  <span className="font-semibold">Supportive community.</span> Learn
                  alongside peers who are on the same journey.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="mt-16 border-2 border-black bg-[#ffc928] px-6 py-8 shadow-[6px_6px_0_#000]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/70">
            How coursefy helps you learn
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-black">1. Discover</h3>
              <p className="mt-2 text-xs sm:text-sm text-black/80">
                Browse curated paths for design, development, and more—no need to
                guess where to start.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black">2. Practice</h3>
              <p className="mt-2 text-xs sm:text-sm text-black/80">
                Learn with bite‑sized lessons, guided projects, and quick checks so
                concepts stick.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black">3. Apply</h3>
              <p className="mt-2 text-xs sm:text-sm text-black/80">
                Turn your skills into real work—portfolio pieces, job interviews,
                and everyday problem‑solving.
              </p>
            </div>
          </div>
        </section>

        {/* Deep dive text block */}
        <section className="mt-16 border-2 border-black bg-white px-6 py-8 shadow-[6px_6px_0_#000]">
          <h2 className="text-lg font-semibold text-black">
            Our promise to every learner
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Aliquam erat volutpat. Suspendisse potenti. Cras sed
            pellentesque arcu. Sed at viverra magna. Aliquam a suscipit lorem.
            Integer vel pharetra purus. Vestibulum lacinia, tortor at
            ullamcorper fermentum, neque sapien tempus neque, nec dignissim
            mauris justo vitae odio. Duis a egestas arcu, sed ultricies nisi.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/80">
            Curabitur vel massa et sapien dictum dignissim. Etiam non nisl nec
            nisl malesuada fermentum. Vestibulum sit amet interdum erat, sed
            aliquet erat. Vivamus consectetur, velit quis malesuada convallis,
            purus arcu dignissim tortor, a accumsan tortor leo in nisl. Proin
            gravida feugiat urna, id posuere arcu condimentum sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/80">
            Mauris efficitur metus in elit aliquet, vitae facilisis ligula
            efficitur. Nullam aliquam consequat urna, id tincidunt nisl
            consectetur nec. Sed id tortor non turpis volutpat consequat. Sed
            molestie tincidunt ex in porttitor. Donec consequat, magna non
            commodo aliquet, augue magna scelerisque elit, vitae dictum ipsum
            odio ut leo.
          </p>
        </section>
      </section>
    </main>
  );
}

