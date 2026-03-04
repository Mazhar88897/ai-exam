"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [showSubjects, setShowSubjects] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleRunTest = () => {
    // Dummy scoring logic just for UI demo
    const lengthScore = Math.min(10, Math.max(0, Math.floor(answer.length / 40)));
    setScore(lengthScore);
  };

  const handleSubjects = () => {
    setShowSubjects((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[#e6f3ff] border-t-4 border-black px-4 py-4">
      <section className="flex h-[calc(100vh-2rem)] w-full flex-col gap-4 lg:flex-row">
        {/* 1. Topics list (left) */}
        <aside className="w-full rounded-xl border-2 border-[#d0e0ff] bg-white/90 p-4 shadow-sm lg:w-1/4 lg:h-full overflow-auto">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">Topics</h2>
          <ol className="space-y-2 text-sm text-slate-800">
            <li className="rounded-lg bg-[#f0f5ff] px-3 py-2 font-medium">
              1. Arrays &amp; Strings
            </li>
            <li className="rounded-lg px-3 py-2 hover:bg-[#f5f7fb]">
              2. Algorithms &amp; Complexity
            </li>
            <li className="rounded-lg px-3 py-2 hover:bg-[#f5f7fb]">
              3. System Design Basics
            </li>
          </ol>
        </aside>

        {/* 2. Practice / test case (center) */}
        <section className="flex w-full flex-col rounded-xl border-2 border-[#c4d9ff] bg-white/95 p-5 shadow-sm lg:w-2/4 lg:h-full">
          <header className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Practice question
              </p>
              <h1 className="text-base font-semibold text-slate-900">
                Explain how you would design a feature to recommend the next best
                course to a student.
              </h1>
            </div>
            <button
              type="button"
              onClick={() => setIsFavorite((prev) => !prev)}
              className={`flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${
                isFavorite
                  ? "border-yellow-400 bg-yellow-100 text-yellow-800"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>{isFavorite ? "★" : "☆"}</span>
              <span>{isFavorite ? "Favorited" : " favorite"}</span>
            </button>
          </header>

          {/* Result panel (shown after test) */}
          {score !== null && (
            <div className="mt-4 rounded-lg border border-slate-200 bg-[#f8fafc] p-3 text-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Review
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  Score: {score}/10
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold text-slate-700">
                    Actual answer (reference)
                  </h3>
                  <p className="mt-1 text-xs text-slate-700">
                    A strong answer breaks the problem into signals (progress,
                    interests, time), data needed, and a simple ranking strategy
                    before mentioning ML. It also explains how the UI would set
                    expectations for the student.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-700">
                    Shortcomings
                  </h3>
                  <p className="mt-1 text-xs text-slate-700">
                    Use this space to note gaps in your attempt: missing edge
                    cases, unclear trade‑offs, or lack of concrete examples.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Answer field pinned towards bottom */}
          <div className="mt-5 lg:mt-auto">
            <label
              htmlFor="answer"
              className="mb-1 block text-xs font-semibold text-slate-700"
            >
              Your answer
            </label>
            <textarea
              id="answer"
              rows={6}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              placeholder="Describe your approach: what data would you use, how would you rank courses, and how would you explain the recommendation to the student?"
            />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-slate-500">
                Click &quot;Run review&quot; to reveal a reference answer and
                shortcomings panel above.
              </p>
              <button
                type="button"
                onClick={handleRunTest}
                className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Run review
              </button>
            </div>
          </div>
        </section>

        {/* 3. Case study (right) */}
        <section className="flex w-full flex-col rounded-xl border-2 border-[#d0e0ff] bg-white/90 p-4 shadow-sm lg:w-1/4 lg:h-full overflow-hidden">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-700">
              {showSubjects ? "Subjects" : "Question"}
            </div>
            <button
              type="button"
              onClick={handleSubjects}
              className="text-xs font-semibold text-sky-700 underline"
            >
              {showSubjects ? "Back to question" : "Subjects"}
            </button>
          </div>

          {showSubjects ? (
            <div className="flex-1 overflow-auto rounded-lg border border-slate-200 bg-white px-3 py-3 text-xs leading-relaxed text-slate-800">
              <ul className="space-y-2">
                <li className="rounded-lg bg-[#f0f5ff] px-3 py-2 font-semibold">
                  Science
                </li>
                <li className="rounded-lg px-3 py-2 hover:bg-[#f5f7fb]">
                  Mathematics
                </li>
                <li className="rounded-lg px-3 py-2 hover:bg-[#f5f7fb]">
                  Physics
                </li>
                <li className="rounded-lg px-3 py-2 hover:bg-[#f5f7fb]">
                  Chemistry
                </li>
                <li className="rounded-lg px-3 py-2 hover:bg-[#f5f7fb]">
                  Biology
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex-1 overflow-auto rounded-lg border border-slate-200 bg-white px-3 py-3 text-xs leading-relaxed text-slate-800">
              <p className="font-semibold ">Question # 1</p>
              <p className="mt-2">
                You notice that 40% of new students who enroll in a course
                abandon it before finishing the first lesson. Analytics show a
                large spike of exits on the &quot;Welcome&quot; screen and the
                first quiz.
              </p>
              <p className="mt-2">
                Your task is to diagnose possible reasons for this behavior and
                propose at least two experiments to improve completion of the
                first lesson. Consider expectations, time to value, and clarity
                of next actions.
              </p>
              <p className="mt-2">
                Think about what you would instrument (events, funnels), what
                qualitative feedback you might collect, and how you would
                decide whether your changes are successful.
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

