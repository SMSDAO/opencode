import { Nav } from "~/components/nav"

const SAMPLE_LOGS = [
  { time: "01:24:55", level: "INFO", msg: "POST /api/completions 200 142ms" },
  { time: "01:24:53", level: "INFO", msg: "GET /api/health 200 3ms" },
  { time: "01:24:51", level: "WARN", msg: "Rate limit approaching for token bucket user/carol" },
  { time: "01:24:48", level: "INFO", msg: "POST /api/completions 200 289ms" },
  { time: "01:24:44", level: "ERROR", msg: "Storage read timeout: share_data/abc123 (retrying)" },
  { time: "01:24:40", level: "INFO", msg: "WebSocket session opened: sess_8f3a" },
  { time: "01:24:38", level: "INFO", msg: "POST /api/share 201 56ms" },
  { time: "01:24:35", level: "INFO", msg: "GET /api/models 200 18ms" },
  { time: "01:24:31", level: "WARN", msg: "Slow query: SELECT * FROM sessions took 412ms" },
  { time: "01:24:28", level: "INFO", msg: "DELETE /api/share/xy77 204 22ms" },
]

export default function DeveloperDashboardPage() {
  return (
    <div class="dashboard">
      <Nav />
      <main class="dashboard__main">
        <div class="page-header">
          <div class="page-header__eyebrow">Developer Dashboard</div>
          <h1 class="page-header__title">Developer Tools</h1>
          <p class="page-header__subtitle">
            Monitor APIs, inspect logs, manage environments, and diagnose deployments.
          </p>
        </div>

        {/* API monitoring KPIs */}
        <div class="grid grid--4">
          <div class="card card--glow">
            <div class="card__label">Requests (1h)</div>
            <div class="card__value card__value--purple">8,421</div>
            <div class="card__delta card__delta--up">↑ 14% vs prev hour</div>
          </div>
          <div class="card">
            <div class="card__label">P50 Latency</div>
            <div class="card__value card__value--green">84ms</div>
            <div class="card__delta">P99: 480ms</div>
          </div>
          <div class="card">
            <div class="card__label">5xx Errors</div>
            <div class="card__value card__value--red">3</div>
            <div class="card__delta">last 1h</div>
          </div>
          <div class="card">
            <div class="card__label">Open Connections</div>
            <div class="card__value">142</div>
            <div class="card__delta">WS + HTTP</div>
          </div>
        </div>

        {/* Log viewer */}
        <div class="section">
          <h2 class="section__title">Live Log Viewer</h2>
          <div class="log-viewer">
            {SAMPLE_LOGS.map((line) => (
              <div class="log-line">
                <span class="log-line__time">{line.time}</span>
                <span class={`log-line__level log-line__level--${line.level.toLowerCase()}`}>[{line.level}]</span>
                <span class="log-line__msg">{line.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Environment management */}
        <div class="section">
          <h2 class="section__title">Environment Variables</h2>
          <div class="card">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Environment</th>
                  <th>Last Updated</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code style="font-size:0.75rem;color:#a78bfa">OPENCODE_STORAGE_BUCKET</code>
                  </td>
                  <td>production</td>
                  <td>Mar 10, 2026</td>
                  <td>
                    <span class="badge badge--green">Set</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code style="font-size:0.75rem;color:#a78bfa">OPENCODE_STORAGE_ADAPTER</code>
                  </td>
                  <td>production</td>
                  <td>Mar 10, 2026</td>
                  <td>
                    <span class="badge badge--green">Set</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code style="font-size:0.75rem;color:#a78bfa">DATABASE_URL</code>
                  </td>
                  <td>production</td>
                  <td>Mar 1, 2026</td>
                  <td>
                    <span class="badge badge--green">Set</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code style="font-size:0.75rem;color:#a78bfa">JWT_SECRET</code>
                  </td>
                  <td>production</td>
                  <td>Feb 28, 2026</td>
                  <td>
                    <span class="badge badge--green">Set</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code style="font-size:0.75rem;color:#fbbf24">STRIPE_WEBHOOK_SECRET</code>
                  </td>
                  <td>staging</td>
                  <td>—</td>
                  <td>
                    <span class="badge badge--amber">Missing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Integration testing console */}
        <div class="section">
          <h2 class="section__title">Integration Testing Console</h2>
          <div class="grid grid--3">
            <div class="card">
              <div class="card__label">Auth Service</div>
              <div class="card__value card__value--green" style="font-size:1.1rem;margin-top:0.25rem">
                Healthy
              </div>
              <div class="card__delta">Last check: 30s ago</div>
            </div>
            <div class="card">
              <div class="card__label">Storage Service</div>
              <div class="card__value card__value--amber" style="font-size:1.1rem;margin-top:0.25rem">
                Degraded
              </div>
              <div class="card__delta">Latency elevated: 412ms</div>
            </div>
            <div class="card">
              <div class="card__label">API Gateway</div>
              <div class="card__value card__value--green" style="font-size:1.1rem;margin-top:0.25rem">
                Healthy
              </div>
              <div class="card__delta">Last check: 15s ago</div>
            </div>
          </div>
        </div>

        {/* Deployment diagnostics */}
        <div class="section">
          <h2 class="section__title">Deployment Diagnostics</h2>
          <div class="card">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Deployment</th>
                  <th>Environment</th>
                  <th>Version</th>
                  <th>Deployed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>enterprise-app</td>
                  <td>production</td>
                  <td>v1.0.0</td>
                  <td>Mar 15, 2026</td>
                  <td>
                    <span class="badge badge--green">Live</span>
                  </td>
                </tr>
                <tr>
                  <td>enterprise-app</td>
                  <td>staging</td>
                  <td>v1.0.1-dev</td>
                  <td>Mar 15, 2026</td>
                  <td>
                    <span class="badge badge--purple">Deploying</span>
                  </td>
                </tr>
                <tr>
                  <td>opencode-api</td>
                  <td>production</td>
                  <td>v1.0.0</td>
                  <td>Mar 14, 2026</td>
                  <td>
                    <span class="badge badge--green">Live</span>
                  </td>
                </tr>
                <tr>
                  <td>opencode-web</td>
                  <td>production</td>
                  <td>v1.0.122</td>
                  <td>Mar 14, 2026</td>
                  <td>
                    <span class="badge badge--green">Live</span>
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
