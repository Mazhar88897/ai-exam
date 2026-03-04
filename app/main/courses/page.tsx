import CoursesHero from "@/components/CoursesHero";
import PopularCourses from "@/components/PopularCourses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#ffc928]">
      <CoursesHero />
      <PopularCourses />
    </main>
  );
}

