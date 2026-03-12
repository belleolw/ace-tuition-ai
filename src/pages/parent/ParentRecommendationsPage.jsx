import DashboardLayout from "../../layouts/DashboardLayout"

export default function ParentRecommendationsPage() {
  const navItems = [
    { label: "Dashboard", to: "/parent/overview" },
    { label: "Child Progress", to: "/parent/child-progress" },
    { label: "Weak Topics", to: "/parent/weak-topics" },
    { label: "Recommendations", to: "/parent/recommendations" },
  ]

  const recommendations = [
    {
      title: "Prioritise Algebra Revision",
      meta: "Focus on equations and algebra fundamentals",
      priority: "High",
      time: "20 mins",
      priorityClass: "bg-rose-50 text-rose-600",
      light: "bg-rose-50",
    },
    {
      title: "Review Statistics Mistakes",
      meta: "Revisit common errors from the last mock test",
      priority: "Medium",
      time: "15 mins",
      priorityClass: "bg-amber-50 text-amber-600",
      light: "bg-amber-50",
    },
    {
      title: "Complete 1 Mini Mock",
      meta: "Build consistency before the next assessment",
      priority: "High",
      time: "15 mins",
      priorityClass: "bg-rose-50 text-rose-600",
      light: "bg-blue-50",
    },
    {
      title: "Maintain Geometry Practice",
      meta: "Keep current progress stable",
      priority: "Low",
      time: "5 mins",
      priorityClass: "bg-emerald-50 text-emerald-600",
      light: "bg-emerald-50",
    },
  ]

  const supportPlan = [
    {
      day: "Monday",
      title: "Support Algebra Practice",
      meta: "20 mins guided revision",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      day: "Wednesday",
      title: "Review Statistics Errors",
      meta: "15 mins correction session",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      day: "Friday",
      title: "Mini Mock Check-In",
      meta: "Review results and confidence",
      accent: "from-emerald-500 to-teal-400",
    },
  ]

  const whyThisMatters = [
    "Algebra affects performance across multiple question types",
    "One mini mock this week improves exam familiarity",
    "Statistics errors should be corrected quickly before they repeat",
  ]

  return (
    <DashboardLayout
      profileName="Grace Tan"
      profileSubtitle="Parent Account"
      navItems={navItems}
    >
      <div className="space-y-6">
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Top Priority</p>
                  <div className="mt-4 text-5xl font-semibold tracking-tight text-blue-600">
                    Algebra Revision
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    <span>✦</span>
                    <span>Most urgent this week</span>
                  </div>
                </div>
                <div className="flex h-20 w-28 items-end gap-2">
                  {[28, 42, 36, 54, 62, 72, 80].map((h, i) => (
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
                  <p className="text-sm font-medium text-slate-500">Recommended Study Time</p>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">55 mins</div>
                  <p className="mt-2 text-sm text-slate-500">Spread across this week</p>
                </div>
                <div className="relative h-24 w-24">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#8b5cf6 0 76%, #e2e8f0 76% 100%)`,
                    }}
                  />
                  <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white text-lg font-semibold text-slate-900">
                    55m
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Parent Support Need</p>
              <div className="mt-4 text-3xl font-semibold tracking-tight">High</div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-teal-600">Supervision recommended</p>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">AI Recommended Actions</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Based on weak topics, recent progress, and assessment performance
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {recommendations.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border border-slate-200 p-5 ${item.light}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-semibold tracking-tight text-slate-900">
                          {item.title}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-600">{item.meta}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className={`rounded-full px-3 py-1 text-xs font-semibold ${item.priorityClass}`}>
                        {item.priority} priority
                      </div>
                      <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                        {item.time}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-8 gap-1.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-8 rounded-lg ${
                            i < 5
                              ? item.priority === "High"
                                ? "bg-rose-400"
                                : item.priority === "Medium"
                                ? "bg-amber-400"
                                : "bg-emerald-400"
                              : "bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-orange-50 p-6 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500 shadow-sm">
                  AI Support Insight
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
                  Best Parent Action
                </h3>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-600">
                  Supervise Algebra Practice
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Your support is most valuable when your child is revising Algebra this week, as it
                  is currently the weakest and most urgent topic.
                </p>
                <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-4">
                  <p className="text-sm text-slate-600">
                    Students with guided revision on weak topics tend to improve readiness faster.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Recommendation Snapshot</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Most urgent task</div>
                    <div className="mt-1 font-semibold">Algebra Revision</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Best day to start</div>
                    <div className="mt-1 font-semibold">Monday</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Why this matters</h3>
                <div className="mt-4 space-y-3">
                  {whyThisMatters.map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-sm font-medium text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Weekly Parent Support Plan</h2>
                <p className="mt-1 text-sm text-slate-500">
                  A simple action plan to guide support this week
                </p>
              </div>
              <div className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                This week
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {supportPlan.map((item) => (
                <div
                  key={item.day}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                  <div className="text-sm font-semibold text-slate-500">{item.day}</div>
                  <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{item.meta}</div>
                  <button className="mt-5 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100">
                    View task
                  </button>
                </div>
              ))}
            </div>
          </section>
      </div>
    </DashboardLayout>
  )
}
