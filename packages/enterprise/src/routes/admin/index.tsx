import { Nav } from "~/components/nav"
import "~/components/enterprise.css"

export default function AdminDashboardPage() {
  return (
    <div class="dashboard">
      <Nav />
      <main class="dashboard__main">
        <div class="page-header">
          <div class="page-header__eyebrow">Admin Dashboard</div>
          <h1 class="page-header__title">System Overview</h1>
          <p class="page-header__subtitle">Manage users, roles, billing, and platform configuration.</p>
        </div>

        {/* System KPIs */}
        <div class="grid grid--4">
          <div class="card card--glow">
            <div class="card__label">Total Users</div>
            <div class="card__value card__value--purple">1,284</div>
            <div class="card__delta card__delta--up">↑ 34 this week</div>
          </div>
          <div class="card">
            <div class="card__label">Active Sessions</div>
            <div class="card__value card__value--green">47</div>
            <div class="card__delta">right now</div>
          </div>
          <div class="card">
            <div class="card__label">API Requests (24h)</div>
            <div class="card__value">284K</div>
            <div class="card__delta card__delta--up">↑ 8% vs yesterday</div>
          </div>
          <div class="card">
            <div class="card__label">System Health</div>
            <div class="card__value card__value--green">99.9%</div>
            <div class="card__delta">uptime (30d)</div>
          </div>
        </div>

        {/* User management */}
        <div class="section">
          <h2 class="section__title">User Management</h2>
          <div class="card">
            <table class="data-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>alice@example.com</td>
                  <td>Admin</td>
                  <td>Enterprise</td>
                  <td>
                    <span class="badge badge--green">Active</span>
                  </td>
                  <td>2 min ago</td>
                </tr>
                <tr>
                  <td>bob@example.com</td>
                  <td>Developer</td>
                  <td>Pro</td>
                  <td>
                    <span class="badge badge--green">Active</span>
                  </td>
                  <td>1 hour ago</td>
                </tr>
                <tr>
                  <td>carol@example.com</td>
                  <td>User</td>
                  <td>Pro</td>
                  <td>
                    <span class="badge badge--amber">Idle</span>
                  </td>
                  <td>3 hours ago</td>
                </tr>
                <tr>
                  <td>dave@example.com</td>
                  <td>Auditor</td>
                  <td>Free</td>
                  <td>
                    <span class="badge badge--gray">Inactive</span>
                  </td>
                  <td>2 days ago</td>
                </tr>
                <tr>
                  <td>eve@example.com</td>
                  <td>User</td>
                  <td>Pro</td>
                  <td>
                    <span class="badge badge--red">Suspended</span>
                  </td>
                  <td>5 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Role / Permission matrix */}
        <div class="section">
          <h2 class="section__title">RBAC Role Matrix</h2>
          <div class="card">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Admin</th>
                  <th>Developer</th>
                  <th>User</th>
                  <th>Auditor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manage Users</td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                </tr>
                <tr>
                  <td>View API Logs</td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Billing Controls</td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Deploy Configs</td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Read Audit Logs</td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--gray">—</span>
                  </td>
                  <td>
                    <span class="badge badge--green">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing controls + metered */}
        <div class="section">
          <h2 class="section__title">Billing Controls</h2>
          <div class="grid grid--2">
            <div class="card">
              <div class="card__label">Revenue (MRR)</div>
              <div class="card__value card__value--purple" style="margin-top:0.25rem">$18,420</div>
              <div class="card__delta card__delta--up">↑ 7% vs last month</div>
              <div style="margin-top:1rem">
                <div class="meter">
                  <div class="meter__row">
                    <span class="meter__label">Enterprise seats</span>
                    <span>12 / 20</span>
                  </div>
                  <div class="meter__bar">
                    <div class="meter__fill" style="width:60%"></div>
                  </div>
                </div>
                <div class="meter">
                  <div class="meter__row">
                    <span class="meter__label">Pro seats</span>
                    <span>847 / 1000</span>
                  </div>
                  <div class="meter__bar">
                    <div class="meter__fill meter__fill--amber" style="width:85%"></div>
                  </div>
                </div>
                <div class="meter">
                  <div class="meter__row">
                    <span class="meter__label">Free seats</span>
                    <span>425 / unlimited</span>
                  </div>
                  <div class="meter__bar">
                    <div class="meter__fill meter__fill--green" style="width:42%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card__label">Platform Token Usage</div>
              <div class="card__value" style="margin-top:0.25rem">142M <span style="font-size:0.875rem;font-weight:400;color:rgba(232,230,230,0.4)">tokens</span></div>
              <div class="card__delta">of 500M monthly allocation</div>
              <div class="meter" style="margin-top:0.75rem">
                <div class="meter__bar">
                  <div class="meter__fill" style="width:28%"></div>
                </div>
              </div>
              <div style="margin-top:0.875rem;font-size:0.75rem;color:rgba(232,230,230,0.5)">
                Overage rate: <strong style="color:#e8e6e6">$0.002 / 1K tokens</strong>
              </div>
              <div style="margin-top:0.5rem;font-size:0.75rem;color:rgba(232,230,230,0.5)">
                Projected overage this cycle: <strong style="color:#34d399">$0.00</strong>
              </div>
            </div>
          </div>
        </div>

        {/* API Monitoring */}
        <div class="section">
          <h2 class="section__title">API Monitoring</h2>
          <div class="grid grid--3">
            <div class="card">
              <div class="card__label">Avg Response Time</div>
              <div class="card__value card__value--green">142ms</div>
              <div class="card__delta">p99: 480ms</div>
            </div>
            <div class="card">
              <div class="card__label">Error Rate</div>
              <div class="card__value card__value--amber">0.12%</div>
              <div class="card__delta">last 1h</div>
            </div>
            <div class="card">
              <div class="card__label">Throughput</div>
              <div class="card__value">2,840<span style="font-size:0.875rem;font-weight:400;color:rgba(232,230,230,0.4)">/min</span></div>
              <div class="card__delta card__delta--up">↑ 12% vs avg</div>
            </div>
          </div>
        </div>

        {/* Audit log */}
        <div class="section">
          <h2 class="section__title">Recent Audit Log</h2>
          <div class="card">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Actor</th>
                  <th>Action</th>
                  <th>Resource</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="color:rgba(232,230,230,0.4);font-size:0.75rem">01:18:42</td>
                  <td>alice</td>
                  <td>USER_SUSPEND</td>
                  <td>user/eve</td>
                  <td>
                    <span class="badge badge--green">OK</span>
                  </td>
                </tr>
                <tr>
                  <td style="color:rgba(232,230,230,0.4);font-size:0.75rem">00:54:11</td>
                  <td>system</td>
                  <td>RATE_LIMIT_TRIGGERED</td>
                  <td>api/completions</td>
                  <td>
                    <span class="badge badge--amber">Warn</span>
                  </td>
                </tr>
                <tr>
                  <td style="color:rgba(232,230,230,0.4);font-size:0.75rem">00:31:05</td>
                  <td>bob</td>
                  <td>CONFIG_UPDATE</td>
                  <td>env/production</td>
                  <td>
                    <span class="badge badge--green">OK</span>
                  </td>
                </tr>
                <tr>
                  <td style="color:rgba(232,230,230,0.4);font-size:0.75rem">00:12:30</td>
                  <td>carol</td>
                  <td>LOGIN</td>
                  <td>auth/session</td>
                  <td>
                    <span class="badge badge--green">OK</span>
                  </td>
                </tr>
                <tr>
                  <td style="color:rgba(232,230,230,0.4);font-size:0.75rem">yesterday</td>
                  <td>alice</td>
                  <td>ROLE_ASSIGN</td>
                  <td>user/dave → Auditor</td>
                  <td>
                    <span class="badge badge--green">OK</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
