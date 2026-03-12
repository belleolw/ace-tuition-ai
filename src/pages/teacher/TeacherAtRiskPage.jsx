import DashboardLayout from "../../layouts/DashboardLayout"

export default function TeacherAtRiskPage() {
  const navItems = [
    { label: "Dashboard", to: "/teacher/overview" },
    { label: "At-Risk Students", to: "/teacher/at-risk" },
    { label: "Topic Analytics", to: "/teacher/topic-analytics" },
    { label: "Intervention", to: "/teacher/intervention" },
  ]

  const atRiskStudents = [
    {
      name: "Ryan Tan",
      predictedScore: "52%",
      risk: "Very High",
      weakTopic: "Algebra",
      attendance: "78%",
      riskClass: "bg-rose-50 text-rose-600",
    },
    {
      name: "Chloe Lim",
      predictedScore: "56%",
      risk: "High",
      weakTopic: "Statistics",
      attendance: "84%",
      riskClass: "bg-amber-50 text-amber-600",
    },
    {
      name: "Ethan Ong",
      predictedScore: "59%",
      risk: "High",
      weakTopic: "Geometry",
      attendance: "81%",
      riskClass: "bg-amber-50 text-amber-600",
    },
    {
      name: "Sarah Lee",
      predictedScore: "61%",
      risk: "Medium",
      weakTopic: "Algebra",
      attendance: "88%",
      riskClass: "bg-blue-50 text-blue-600",
    },
  ]

  const interventionPlan = [
    {
      day: "Monday",
      title: "Algebra Support Group",
      meta: "Focus on highest-risk students",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      day: "Wednesday",
      title: "Statistics Review Check-In",
      meta: "Short targeted follow-up",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      day: "Friday",
      title: "Mini Diagnostic Quiz",
      meta: "Reassess weak-topic progress",
      accent: "from-emerald-500 to-teal-400",
    },
  ]

  const riskReasons = [
    "low topic mastery",
    "inconsistent homework completion",
    "falling quiz scores",
    "lower attendance",
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
                  <p className="text-sm font-medium text-slate-500">At-Risk Students</p>
                  <div className="mt-4 text-5xl font-semibold tracking-tight text-blue-600">6 Students</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                    <span>!</span>
                    <span>Need close monitoring</span>
                  </div>
                </div>
                <div className="flex h-20 w-28 items-end gap-2">
                  {[24, 30, 38, 46, 55, 62, 70].map((h, i) => (
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
                  <p className="text-sm font-medium text-slate-500">Highest Risk Level</p>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">Very High</div>
                  <p className="mt-2 text-sm text-slate-500">Immediate intervention needed</p>
                </div>
                <div className="relative h-24 w-24">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#ef4444 0 88%, #e2e8f0 88% 100%)`,
                    }}
                  />
                  <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900">
                    Urgent
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Average Predicted Score</p>
              <div className="mt-4 text-3xl font-semibold tracking-tight">58%</div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-teal-600">Across at-risk group</p>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Student Risk Overview</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Ranked by predicted academic risk and recent performance
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {atRiskStudents.map((student) => (
                  <div
                    key={student.name}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                      <div className="min-w-0">
                        <div className="text-lg font-semibold tracking-tight text-slate-900">
                          {student.name}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                            Predicted score: {student.predictedScore}
                          </div>
                          <div className={`rounded-full px-3 py-1 text-xs font-semibold ${student.riskClass}`}>
                            {student.risk}
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2 xl:min-w-[360px] xl:grid-cols-3">
                        <div className="rounded-2xl bg-white p-4">
                          <div className="text-sm font-medium text-slate-500">Weak topic</div>
                          <div className="mt-1 font-semibold">{student.weakTopic}</div>
                        </div>
                        <div className="rounded-2xl bg-white p-4">
                          <div className="text-sm font-medium text-slate-500">Attendance</div>
                          <div className="mt-1 font-semibold">{student.attendance}</div>
                        </div>
                        <div className="flex items-center">
                          <button className="w-full rounded-xl bg-white px-3 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100">
                            View student
                          </button>
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
                  AI Risk Insight
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Most Urgent Case</h3>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-600">Ryan Tan</div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Ryan shows the lowest predicted score and the weakest Algebra performance, with
                  attendance also below class average.
                </p>
                <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-4">
                  <p className="text-sm text-slate-600">
                    Students with both low mastery and lower attendance are the most likely to need
                    early intervention.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Risk Snapshot</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Most common weak topic</div>
                    <div className="mt-1 font-semibold">Algebra</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-500">Priority action</div>
                    <div className="mt-1 font-semibold">Small-group intervention</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight">Why students are at risk</h3>
                <div className="mt-4 space-y-3">
                  {riskReasons.map((reason) => (
                    <div key={reason} className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-sm font-medium text-slate-700">{reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Suggested Teacher Actions</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Prioritised intervention plan for this week
                </p>
              </div>
              <div className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                This week
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {interventionPlan.map((item) => (
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
