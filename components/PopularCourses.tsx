const courses = [
  {
    title: "Learn Python: The Complete Python Programming Course",
    instructor: "Avinash Jain, The Codex",
    rating: 4.3,
  },
  {
    title: "Complete Blender Creator: Learn 3D Modelling",
    instructor: "GameDevTV Team",
    rating: 4.8,
  },
  {
    title: "Complete C# Unity Game Developer 2D",
    instructor: "Rick Davidson",
    rating: 4.9,
  },
  {
    title: "Complete Blender Creator: Learn 3D Modelling",
    instructor: "Grant Abbitt",
    rating: 4.9,
  },
  {
    title: "The Complete Networking Fundamentals Course",
    instructor: "David Bombal",
    rating: 4.8,
  },
  {
    title: "The C++20 Masterclass: From Fundamentals to Advanced",
    instructor: "Daniel Gakwaya",
    rating: 4.7,
  },
  {
    title: "Complete Figma Megacourse: UI/UX Design Beginner to Pro",
    instructor: "Creativity Unleashed",
    rating: 4.8,
  },
  {
    title: "Webflow for Beginners: How to Use Webflow",
    instructor: "Sam Harrison",
    rating: 4.8,
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-[#ffc928] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-black">
              <span className="text-4xl leading-none">&ldquo;</span>
              <h2 className="text-3xl font-extrabold">Our Popular Courses</h2>
            </div>
            <p className="max-w-xl text-sm text-black/80">
              Learn from the world&apos;s best instructors with coursefy. From
              beginner to pro, find the perfect course for you.
            </p>
          </div>

          <button className="border-2 border-black bg-[#ff6b6b] px-6 py-3 text-sm font-semibold text-black shadow-[4px_4px_0_#000]">
            Browse More
          </button>
        </div>

        {/* Grid of cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <article
              key={course.title}
              className={`flex h-full flex-col border-2 border-black bg-white shadow-[4px_6px_0_#000] hover:shadow-[8px_8px_0_#000] transition-shadow duration-300 hover:bg-red-400`}
            >
              {/* Content only, no thumbnail image */}
              <div className="flex flex-1 flex-col gap-2 p-4 text-sm">
                <h3 className="line-clamp-2 font-semibold">{course.title}</h3>
                <p className="text-xs ">{course.instructor}</p>

                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="font-semibold">
                    {course.rating.toFixed(1)}
                  </span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

