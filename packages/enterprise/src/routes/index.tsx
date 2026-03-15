import { A } from "@solidjs/router"
import { Nav } from "~/components/nav"

export default function HomePage() {
  return (
    <div class="dashboard">
      <Nav />
      <main class="dashboard__main">
        <div class="page-header">
          <div class="page-header__eyebrow">OpenCode Enterprise</div>
          <h1 class="page-header__title">Production-Ready AI Coding Platform</h1>
          <p class="page-header__subtitle">
            Enterprise-grade AI coding agent with dashboards, RBAC, billing, and full observability.
          </p>
        </div>

        <div class="grid grid--3" style="margin-top:2rem">
          <A href="/dashboard" style="text-decoration:none" class="card card--glow">
            <div style="font-size:1.5rem;margin-bottom:0.5rem">📊</div>
            <div class="card__label">User Dashboard</div>
            <div style="font-size:0.9375rem;font-weight:600;color:#f5f3f3;margin:0.25rem 0">My Account</div>
            <div style="font-size:0.8125rem;color:rgba(232,230,230,0.5)">
              Overview, activity metrics, notifications, billing and metered usage.
            </div>
          </A>
          <A href="/admin" style="text-decoration:none" class="card">
            <div style="font-size:1.5rem;margin-bottom:0.5rem">🛡️</div>
            <div class="card__label">Admin Dashboard</div>
            <div style="font-size:0.9375rem;font-weight:600;color:#f5f3f3;margin:0.25rem 0">Administration</div>
            <div style="font-size:0.8125rem;color:rgba(232,230,230,0.5)">
              User management, RBAC roles, billing controls, audit logs, configuration.
            </div>
          </A>
          <A href="/developer" style="text-decoration:none" class="card">
            <div style="font-size:1.5rem;margin-bottom:0.5rem">🔧</div>
            <div class="card__label">Developer Dashboard</div>
            <div style="font-size:0.9375rem;font-weight:600;color:#f5f3f3;margin:0.25rem 0">Developer Tools</div>
            <div style="font-size:0.8125rem;color:rgba(232,230,230,0.5)">
              API monitoring, log viewer, environment management, deployment diagnostics.
            </div>
          </A>
        </div>

        <div class="section">
          <h2 class="section__title">Platform Status</h2>
          <div class="grid grid--4">
            <div class="card">
              <div class="card__label">API</div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.25rem">
                <span class="badge badge--green">Operational</span>
              </div>
            </div>
            <div class="card">
              <div class="card__label">Storage</div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.25rem">
                <span class="badge badge--amber">Degraded</span>
              </div>
            </div>
            <div class="card">
              <div class="card__label">Auth</div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.25rem">
                <span class="badge badge--green">Operational</span>
              </div>
            </div>
            <div class="card">
              <div class="card__label">CDN</div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.25rem">
                <span class="badge badge--green">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
