import DashboardLayout from "../../layouts/DashboardLayout"

export default function AceStudentDashboard() {
  const mastery = [
    { topic: "Algebra", value: 45, color: "bg-rose-500", light: "bg-rose-100", text: "text-rose-600" },
    { topic: "Geometry", value: 60, color: "bg-amber-400", light: "bg-amber-100", text: "text-amber-600" },
    { topic: "Probability", value: 70, color: "bg-emerald-500", light: "bg-emerald-100", text: "text-emerald-600" },
    { topic: "Statistics", value: 52, color: "bg-amber-400", light: "bg-amber-100", text: "text-amber-600" },
  ]

  const studyPlan = [
    {
      day: "Monday",
      title: "10 Algebra practice questions",
      meta: "Estimated time: 15 minutes",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      day: "Wednesday",
      title: "Review Geometry concepts",
      meta: "Watch lesson + short quiz",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      day: "Friday",
      title: "Mini mock test",
      meta: "15 mixed questions",
      accent: "from-emerald-500 to-teal-400",
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
                <p className="text-sm font-medium text-slate-500">Predicted O-Level Math Score</p>
                <div className="mt-4 text-5xl font-semibold tracking-tight text-blue-600">78%</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                  <span>↗</span>
                  <span>+5% vs last week</span>
                </div>
              </div>
              <div className="flex h-20 w-28 items-end gap-2">
                {[30, 42, 36, 55, 60, 68, 78].map((h, i) => (
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
                <p className="text-sm font-medium text-slate-500">Exam Readiness</p>
                <div className="mt-4 text-2xl font-semibold tracking-tight">72% Ready</div>
                <p className="mt-2 text-sm text-slate-500">Based on your last 5 practices</p>
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
            <p className="text-sm font-medium text-slate-500">Practice Completed</p>
            <div className="mt-4 text-3xl font-semibold tracking-tight">18 / 25 questions</div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
            </div>
            <p className="mt-3 text-sm font-medium text-teal-600">72% completed this week</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Topic Mastery Heatmap</h2>
                <p className="mt-1 text-sm text-slate-500">Based on recent practice performance</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-500" />Weak</div>
                <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" />Moderate</div>
                <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />Strong</div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {mastery.map((item) => (
                <div key={item.topic} className={`rounded-2xl border border-slate-200 p-4 ${item.light}`}>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-800">{item.topic}</div>
                    <div className={`text-sm font-semibold ${item.text}`}>{item.value}%</div>
                  </div>
                  <div className="grid grid-cols-10 gap-1.5">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-10 rounded-lg ${i < Math.round(item.value / 10) ? item.color : "bg-white/80"}`}
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
                AI Learning Insight
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Weak Topic Detected</h3>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-600">Algebra</div>
              <div className="mt-2 text-sm font-medium text-slate-600">Accuracy: 45%</div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Practice 10 algebra questions today to improve mastery and raise your predicted score.
              </p>
              <button className="mt-5 w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Start Practice
              </button>
              <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-4">
                <p className="text-sm text-slate-600">
                  Students who practice Algebra today improve scores by <span className="font-semibold text-slate-900">12%</span> on average.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold tracking-tight">Today’s Focus</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm font-medium text-slate-500">Next best action</div>
                  <div className="mt-1 font-semibold">Complete Algebra drill set</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm font-medium text-slate-500">Estimated study time</div>
                  <div className="mt-1 font-semibold">20 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">AI Recommended Study Plan</h2>
              <p className="mt-1 text-sm text-slate-500">Optimized based on your weak topics and recent performance</p>
            </div>
            <div className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
              Adaptive this week
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {studyPlan.map((item) => (
              <div key={item.day} className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                <div className="text-sm font-semibold text-slate-500">{item.day}</div>
                <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">{item.title}</div>
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
