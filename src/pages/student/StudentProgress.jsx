import DashboardLayout from "../../layouts/DashboardLayout"

export default function StudentProgress() {
  const navItems = [
    { label: "Dashboard", to: "/student/overview" },
    { label: "Practice", to: "/student/practice" },
    { label: "Study Plan", to: "/student/study-plan" },
    { label: "Progress", to: "/student/progress" },
  ]

  const weeklyScores = [
    { label: "Week 1", value: 62 },
    { label: "Week 2", value: 66 },
    { label: "Week 3", value: 70 },
    { label: "Week 4", value: 74 },
    { label: "Week 5", value: 78 },
  ]

  const topicProgress = [
    {
      label: "Algebra",
      title: "45% → 68%",
      meta: "Strongest improvement",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      label: "Geometry",
      title: "60% → 71%",
      meta: "Steady progress",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      label: "Probability",
      title: "70% → 75%",
      meta: "Stable performance",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      label: "Statistics",
      title: "52% → 58%",
      meta: "Needs more revision",
      accent: "from-amber-400 to-orange-400",
    },
  ]

  const recentAssessments = [
    { label: "Quiz 1", score: "66%" },
    { label: "Quiz 2", score: "71%" },
    { label: "Mock Test 1", score: "74%" },
    { label: "Quiz 3", score: "82%" },
  ]

  return (
    <DashboardLayout
      profileName="Alicia Tan"
      profileSubtitle="Sec 4 Student"
      navItems={navItems}
    >
      <div className="space-y-6">
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Current Predicted Score</p>
                  <div className="mt-4 text-5xl font-semibold tracking-tight text-blue-600">78%</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    <span>↗</span>
                    <span>+6% vs last month</span>
                  </div>
                </div>
                <div className="flex h-20 w-28 items-end gap-2">
                  {[30, 40, 48, 60, 72, 76, 78].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-300"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Readiness Trend</p>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">72%</div>
                  <p className="mt-2 text-sm text-slate-500">Improving steadily</p>
                </div>
                <div className="relative h-24 w-24">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#8b5cf6 0 72%, #e2e8f0 72% 100%)`,
                    }}
                  />
                  <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white text-lg font-semibold text-slate-900">
                    72%
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Mock Test Average</p>
              <div className="mt-4 text-3xl font-semibold tracking-tight">74%</div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-teal-600">Based on last 3 mock tests</p>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Performance Trend</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Recent scores across quizzes and mock tests
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-64 items-end justify-between gap-4">
                  {weeklyScores.map((item, index) => (
                    <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                      <div className="text-sm font-semibold text-slate-700">{item.value}%</div>
                      <div className="flex h-44 w-full items-end justify-center">
                        <div
                          className={`w-full rounded-t-2xl bg-gradient-to-t ${
                            index % 3 === 0
                              ? "from-blue-500 to-cyan-300"
                              : index % 3 === 1
                              ? "from-violet-500 to-fuchsia-300"
                              : "from-emerald-500 to-teal-300"
                          }`}
                          style={{ height: `${item.value}%` }}
                        />
                      </div>
                      <div className="text-xs font-medium text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4">
                    <div className="text-sm font-medium text-slate-500">Overall improvement</div>
                    <div className="mt-1 font-semibold text-emerald-600">+16%</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <div className="text-sm font-medium text-slate-500">Strongest growth</div>
                    <div className="mt-1 font-semibold">Algebra</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <div className="text-sm font-medium text-slate-500">Needs more work</div>
                    <div className="mt-1 font-semibold">Statistics</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-orange-50 p-6 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500 shadow-sm">
                  AI Progress Insight
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
                  Biggest Improvement
                </h3>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-600">
                  Algebra
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Your Algebra performance has improved the most across recent practice and
                  assessments.
                </p>
                <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-4">
                  <p className="text-sm text-slate-600">
                    Students who practice Algebra consistently improve their overall predicted score
                    faster.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Progress Snapshot</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Best score</div>
                    <div className="mt-1 font-semibold">82% on Quiz 3</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Next milestone</div>
                    <div className="mt-1 font-semibold">Reach 80% readiness</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Recent Assessments</h3>
                <div className="mt-4 space-y-3">
                  {recentAssessments.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
                    >
                      <div className="text-sm font-medium text-slate-600">{item.label}</div>
                      <div className="text-sm font-semibold text-slate-900">{item.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Topic Progress Breakdown</h2>
                <p className="mt-1 text-sm text-slate-500">
                  See how each topic is improving over time
                </p>
              </div>
              <div className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                Last 5 weeks
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              {topicProgress.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                  <div className="text-sm font-semibold text-slate-500">{item.label}</div>
                  <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{item.meta}</div>
                  <button className="mt-5 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100">
                    View trend
                  </button>
                </div>
              ))}
            </div>
          </section>
      </div>
    </DashboardLayout>
  )
}
