import DashboardLayout from "../../layouts/DashboardLayout"

export default function TeacherInterventionPage() {
  const navItems = [
    { label: "Dashboard", to: "/teacher/overview" },
    { label: "At-Risk Students", to: "/teacher/at-risk" },
    { label: "Topic Analytics", to: "/teacher/topic-analytics" },
    { label: "Intervention", to: "/teacher/intervention" },
  ]

  const interventions = [
    {
      title: "Run Algebra Support Group",
      meta: "Small-group reteaching for highest-risk students",
      priority: "High",
      target: "Ryan, Chloe, Ethan",
      priorityClass: "bg-rose-50 text-rose-600",
      light: "bg-rose-50",
    },
    {
      title: "Review Statistics Errors",
      meta: "Whole-class correction and worked examples",
      priority: "Medium",
      target: "Entire class",
      priorityClass: "bg-amber-50 text-amber-600",
      light: "bg-amber-50",
    },
    {
      title: "Assign Mini Diagnostic Quiz",
      meta: "Reassess topic understanding after reteaching",
      priority: "High",
      target: "At-risk students",
      priorityClass: "bg-rose-50 text-rose-600",
      light: "bg-blue-50",
    },
    {
      title: "Follow Up on Attendance Gaps",
      meta: "Check in with students whose attendance is affecting progress",
      priority: "Medium",
      target: "Ryan, Ethan",
      priorityClass: "bg-amber-50 text-amber-600",
      light: "bg-amber-50",
    },
  ]

  const weeklyPlan = [
    {
      day: "Monday",
      title: "Algebra Support Group",
      meta: "25 mins with highest-risk students",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      day: "Wednesday",
      title: "Statistics Error Review",
      meta: "Whole-class concept correction",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      day: "Friday",
      title: "Mini Diagnostic Quiz",
      meta: "Measure progress after intervention",
      accent: "from-emerald-500 to-teal-400",
    },
  ]

  const whyItMatters = [
    "most at-risk students share the same weak topic",
    "whole-class reteaching alone may not be enough",
    "early intervention reduces further score decline",
  ]

  return (
    <DashboardLayout
      profileName="Ms Lim"
      profileSubtitle="Math Teacher"
      navItems={navItems}
    >
      <div className="space-y-6">
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Priority Intervention</p>
                  <div className="mt-4 text-5xl font-semibold tracking-tight text-blue-600">
                    Algebra Support Group
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    <span>✦</span>
                    <span>Most urgent this week</span>
                  </div>
                </div>
                <div className="flex h-20 w-28 items-end gap-2">
                  {[22, 30, 40, 48, 60, 70, 82].map((h, i) => (
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
                  <p className="text-sm font-medium text-slate-500">Students Requiring Support</p>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">6 Students</div>
                  <p className="mt-2 text-sm text-slate-500">High and very high risk</p>
                </div>
                <div className="relative h-24 w-24">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#8b5cf6 0 24%, #e2e8f0 24% 100%)`,
                    }}
                  />
                  <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white text-lg font-semibold text-slate-900">
                    6
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Intervention Capacity</p>
              <div className="mt-4 text-3xl font-semibold tracking-tight">3 Sessions</div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-teal-600">Planned for this week</p>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">AI Recommended Interventions</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Suggested teacher actions based on student risk and topic analytics
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {interventions.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border border-slate-200 p-5 ${item.light}`}
                  >
                    <div>
                      <div className="text-lg font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{item.meta}</div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className={`rounded-full px-3 py-1 text-xs font-semibold ${item.priorityClass}`}>
                        {item.priority} priority
                      </div>
                      <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                        {item.target}
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
                  AI Intervention Insight
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
                  Best Immediate Action
                </h3>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-600">
                  Algebra Support Group
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Algebra is the weakest class topic and is also the most common weak area among
                  at-risk students, making it the highest-value intervention this week.
                </p>
                <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-4">
                  <p className="text-sm text-slate-600">
                    Targeted small-group intervention can improve performance faster than broad
                    revision when only certain students are falling behind.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Intervention Snapshot</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Highest priority topic</div>
                    <div className="mt-1 font-semibold">Algebra</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Best format</div>
                    <div className="mt-1 font-semibold">Small-group reteaching</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Why this intervention matters</h3>
                <div className="mt-4 space-y-3">
                  {whyItMatters.map((item) => (
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
                <h2 className="text-xl font-semibold tracking-tight">Weekly Intervention Plan</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Suggested intervention schedule for this week
                </p>
              </div>
              <div className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                This week
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {weeklyPlan.map((item) => (
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
