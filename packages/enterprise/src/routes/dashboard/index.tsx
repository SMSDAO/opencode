import { Nav } from "~/components/nav"
import "~/components/enterprise.css"

export default function DashboardPage() {
  return (
    <div class="dashboard">
      <Nav />
      <main class="dashboard__main">
        <div class="page-header">
          <div class="page-header__eyebrow">User Dashboard</div>
          <h1 class="page-header__title">Welcome back</h1>
          <p class="page-header__subtitle">Here's what's happening with your account today.</p>
        </div>

        {/* KPI row */}
        <div class="grid grid--4">
          <div class="card card--glow">
            <div class="card__label">API Calls (30d)</div>
            <div class="card__value card__value--purple">42,891</div>
            <div class="card__delta card__delta--up">↑ 12% vs last month</div>
          </div>
          <div class="card">
            <div class="card__label">Tokens Used</div>
            <div class="card__value">1.2M</div>
            <div class="card__delta">of 5M included</div>
          </div>
          <div class="card">
            <div class="card__label">Sessions</div>
            <div class="card__value card__value--green">238</div>
            <div class="card__delta card__delta--up">↑ 5% this week</div>
          </div>
          <div class="card">
            <div class="card__label">Active Since</div>
            <div class="card__value" style="font-size:1.1rem">Mar 2024</div>
            <div class="card__delta">Pro plan</div>
          </div>
        </div>

        {/* Metered usage */}
        <div class="section">
          <h2 class="section__title">Metered Usage</h2>
          <div class="grid grid--2">
            <div class="card">
              <div class="card__label">Token Quota</div>
              <div style="margin-top:0.25rem">
                <div class="meter">
                  <div class="meter__row">
                    <span class="meter__label">Tokens</span>
                    <span>1.2M / 5M</span>
                  </div>
                  <div class="meter__bar">
                    <div class="meter__fill" style="width:24%"></div>
                  </div>
                </div>
                <div class="meter">
                  <div class="meter__row">
                    <span class="meter__label">API Requests</span>
                    <span>42.9K / 100K</span>
                  </div>
                  <div class="meter__bar">
                    <div class="meter__fill meter__fill--green" style="width:43%"></div>
                  </div>
                </div>
                <div class="meter">
                  <div class="meter__row">
                    <span class="meter__label">Storage</span>
                    <span>2.4 GB / 10 GB</span>
                  </div>
                  <div class="meter__bar">
                    <div class="meter__fill meter__fill--amber" style="width:24%"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing summary */}
            <div class="card">
              <div class="card__label">Current Billing Period</div>
              <div class="billing-plan" style="margin-top:0.75rem">
                <div>
                  <div class="billing-plan__name">Pro Plan</div>
                  <div style="font-size:0.75rem;color:rgba(232,230,230,0.4);margin-top:0.125rem">
                    Renews Apr 1, 2026
                  </div>
                </div>
                <div style="text-align:right">
                  <div class="billing-plan__price">
                    $49<span class="billing-plan__cycle">/mo</span>
                  </div>
                </div>
              </div>
              <div style="font-size:0.75rem;color:rgba(232,230,230,0.5);margin-top:0.25rem">
                Next invoice: <strong style="color:#e8e6e6">$49.00</strong> on Apr 1, 2026
              </div>
              <div style="margin-top:1rem">
                <a
                  href="#"
                  style="font-size:0.8125rem;color:#a78bfa;text-decoration:none;padding:0.5rem 1rem;border:1px solid rgba(167,139,250,0.3);border-radius:6px;display:inline-block"
                >
                  Manage Billing →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity + notifications */}
        <div class="section">
          <div class="grid grid--2">
            <div class="card">
              <div class="card__label">Recent Activity</div>
              <ul class="activity-list" style="margin-top:0.75rem">
                <li class="activity-item">
                  <div class="activity-item__dot activity-item__dot--green"></div>
                  <div>
                    <div class="activity-item__text">Completed session: "Refactor auth middleware"</div>
                    <div class="activity-item__time">2 minutes ago</div>
                  </div>
                </li>
                <li class="activity-item">
                  <div class="activity-item__dot"></div>
                  <div>
                    <div class="activity-item__text">Started session: "Add TypeScript strict mode"</div>
                    <div class="activity-item__time">1 hour ago</div>
                  </div>
                </li>
                <li class="activity-item">
                  <div class="activity-item__dot activity-item__dot--amber"></div>
                  <div>
                    <div class="activity-item__text">Token quota reached 24% — usage within limits</div>
                    <div class="activity-item__time">3 hours ago</div>
                  </div>
                </li>
                <li class="activity-item">
                  <div class="activity-item__dot activity-item__dot--green"></div>
                  <div>
                    <div class="activity-item__text">Shared session: "Database migration plan"</div>
                    <div class="activity-item__time">Yesterday</div>
                  </div>
                </li>
                <li class="activity-item">
                  <div class="activity-item__dot"></div>
                  <div>
                    <div class="activity-item__text">API key rotated successfully</div>
                    <div class="activity-item__time">2 days ago</div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card__label">Notifications</div>
              <ul class="notif-list" style="margin-top:0.75rem">
                <li class="notif-item notif-item--unread">
                  <span class="notif-item__icon">🔔</span>
                  <span class="notif-item__text">New model available: Claude 4 Sonnet</span>
                  <span class="notif-item__time">1h ago</span>
                </li>
                <li class="notif-item notif-item--unread">
                  <span class="notif-item__icon">💳</span>
                  <span class="notif-item__text">Invoice #INV-2026-03 ready for download</span>
                  <span class="notif-item__time">2d ago</span>
                </li>
                <li class="notif-item">
                  <span class="notif-item__icon">✅</span>
                  <span class="notif-item__text">Account verified and active</span>
                  <span class="notif-item__time">1w ago</span>
                </li>
                <li class="notif-item">
                  <span class="notif-item__icon">📦</span>
                  <span class="notif-item__text">opencode-ai updated to v1.0.0</span>
                  <span class="notif-item__time">1w ago</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Account settings summary */}
        <div class="section">
          <h2 class="section__title">Account Settings</h2>
          <div class="card">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Setting</th>
                  <th>Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Role</td>
                  <td>User</td>
                  <td>
                    <span class="badge badge--purple">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>2FA</td>
                  <td>TOTP enabled</td>
                  <td>
                    <span class="badge badge--green">Secured</span>
                  </td>
                </tr>
                <tr>
                  <td>API Keys</td>
                  <td>2 active keys</td>
                  <td>
                    <span class="badge badge--green">OK</span>
                  </td>
                </tr>
                <tr>
                  <td>Session Timeout</td>
                  <td>8 hours</td>
                  <td>
                    <span class="badge badge--gray">Default</span>
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
