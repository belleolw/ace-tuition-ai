import DashboardLayout from "../../layouts/DashboardLayout"

export default function StudentStudyPlan() {
  const studyTasks = [
    {
      day: "Monday",
      title: "Algebra Drill Set",
      duration: "20 mins",
      priority: "High priority",
      status: "Pending",
      priorityClass: "bg-rose-50 text-rose-600",
      statusClass: "bg-amber-50 text-amber-600",
    },
    {
      day: "Tuesday",
      title: "Review Geometry formulas",
      duration: "15 mins",
      priority: "Medium priority",
      status: "Completed",
      priorityClass: "bg-amber-50 text-amber-600",
      statusClass: "bg-emerald-50 text-emerald-600",
    },
    {
      day: "Wednesday",
      title: "Probability Quick Check",
      duration: "20 mins",
      priority: "Medium priority",
      status: "Pending",
      priorityClass: "bg-amber-50 text-amber-600",
      statusClass: "bg-slate-100 text-slate-600",
    },
    {
      day: "Thursday",
      title: "Mini Mock Review",
      duration: "30 mins",
      priority: "High priority",
      status: "Pending",
      priorityClass: "bg-rose-50 text-rose-600",
      statusClass: "bg-amber-50 text-amber-600",
    },
    {
      day: "Friday",
      title: "Statistics correction review",
      duration: "15 mins",
      priority: "Low priority",
      status: "Completed",
      priorityClass: "bg-emerald-50 text-emerald-600",
      statusClass: "bg-emerald-50 text-emerald-600",
    },
  ]

  const weeklySchedule = [
    {
      label: "Monday",
      title: "Algebra Focus",
      meta: "20 mins · High priority",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      label: "Tuesday",
      title: "Geometry Review",
      meta: "15 mins · Medium priority",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      label: "Wednesday",
      title: "Probability Practice",
      meta: "20 mins · Medium priority",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      label: "Thursday",
      title: "Mini Mock Review",
      meta: "30 mins · High priority",
      accent: "from-amber-400 to-orange-400",
    },
    {
      label: "Friday",
      title: "Statistics Corrections",
      meta: "15 mins · Low priority",
      accent: "from-sky-500 to-indigo-400",
    },
  ]

  const navItems = [
    { label: "Dashboard", to: "/student/overview" },
    { label: "Practice", to: "/student/practice" },
    { label: "Study Plan", to: "/student/study-plan" },
    { label: "Progress", to: "/student/progress" },
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
                  <p className="text-sm font-medium text-slate-500">Tasks This Week</p>
                  <div className="mt-4 text-5xl font-semibold tracking-tight text-blue-600">7 Tasks</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    <span>✦</span>
                    <span>AI generated plan</span>
                  </div>
                </div>
                <div className="flex h-20 w-28 items-end gap-2">
                  {[26, 40, 34, 50, 58, 64, 78].map((h, i) => (
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
                  <p className="text-sm font-medium text-slate-500">Completion Rate</p>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">4 / 7</div>
                  <p className="mt-2 text-sm text-slate-500">57% completed</p>
                </div>
                <div className="relative h-24 w-24">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#8b5cf6 0 57%, #e2e8f0 57% 100%)`,
                    }}
                  />
                  <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white text-lg font-semibold text-slate-900">
                    57%
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Estimated Weekly Time</p>
              <div className="mt-4 text-3xl font-semibold tracking-tight">2h 40m</div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-teal-600">Balanced across 5 days</p>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">AI Recommended Study Plan</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Personalised based on weak topics and upcoming assessments
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {studyTasks.map((task) => (
                  <div
                    key={`${task.day}-${task.title}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-500">{task.day}</div>
                        <div className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                          {task.title}
                        </div>
                        <div className="mt-2 text-sm text-slate-600">{task.duration}</div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <div className={`rounded-full px-3 py-1 text-xs font-semibold ${task.priorityClass}`}>
                          {task.priority}
                        </div>
                        <div className={`rounded-full px-3 py-1 text-xs font-semibold ${task.statusClass}`}>
                          {task.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-orange-50 p-6 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500 shadow-sm">
                  AI Planning Insight
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Best Study Focus</h3>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-600">Algebra</div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Algebra remains your weakest topic and should be prioritised early this week to
                  maximise score improvement.
                </p>
                <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-4">
                  <p className="text-sm text-slate-600">
                    Students who complete Algebra first tend to improve overall readiness faster.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Study Snapshot</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Highest priority</div>
                    <div className="mt-1 font-semibold">Algebra Drill Set</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Best study day</div>
                    <div className="mt-1 font-semibold">Monday</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Weekly Study Schedule</h2>
                <p className="mt-1 text-sm text-slate-500">
                  A balanced distribution of tasks across the week
                </p>
              </div>
              <div className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                This week
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {weeklySchedule.map((item) => (
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
