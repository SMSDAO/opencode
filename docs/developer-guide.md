# Developer Guide

## Accessing the Developer Dashboard

Navigate to `/developer`. Users with the **Developer** or **Admin** role can view this page.

## API Monitoring

The four KPI cards show:
- **Requests (1h)** — total API requests in the last hour with vs-previous-hour delta.
- **P50 Latency** — median response time; P99 shown as sub-metric.
- **5xx Errors** — server error count in the last hour.
- **Open Connections** — combined WebSocket and HTTP keep-alive connections.

## Log Viewer

The log viewer shows the most recent application log lines in a terminal-style panel.

### Log Levels
| Level | Colour | Meaning |
|---|---|---|
| INFO | Blue | Normal operation |
| WARN | Amber | Non-fatal issue requiring attention |
| ERROR | Red | Error that may affect users |

Full structured logs are available via the SST Console or your cloud provider's log service (CloudWatch / Cloudflare Logpush).

## Environment Variables

The environment variable table shows all known variables, their environment (production / staging), last-update date, and whether they are set.

### Adding a New Variable

1. Add it to `docs/env-vars.md` first.
2. Update `.env.example`.
3. Set it in your cloud provider's secret manager or SST secrets.
4. Redeploy the affected service.

## Integration Testing Console

Three health cards show the status of key internal services:
- **Auth Service** — validates JWT signing / verification.
- **Storage Service** — checks S3/R2 read/write latency.
- **API Gateway** — end-to-end request routing check.

### Running Health Checks Manually

```bash
curl https://your-domain.com/api/health
```

Expected response:
```json
{ "status": "ok", "uptime": 1234567 }
```

## Deployment Diagnostics

The deployment table shows:
- Service name
- Target environment
- Current deployed version
- Deploy timestamp
- Status (Live / Deploying / Failed)

### Triggering a Deploy

```bash
sst deploy --stage production
```

Or push to the `production` branch in GitHub to trigger the `deploy.yml` workflow.

## SDK Generation

The TypeScript SDK under `packages/sdk/js` is auto-generated from the OpenAPI spec. Regenerate after API changes:

```bash
bun ./packages/sdk/js/script/build.ts
```

The CI pipeline verifies that committed SDK artefacts are in sync with the spec:
```bash
git diff --exit-code packages/sdk/js/src/gen packages/sdk/js/dist
```

## MIX Terminal

OpenCode ships a **MIX Terminal** mode for advanced AI-powered scripting:

```bash
# Start MIX Terminal
opencode mix-terminal start

# List available scripts
opencode mix-terminal script list

# Run a script
opencode mix-terminal script run smartbrain-init
```

See [packages/opencode/src/mix-terminal/README.md](../packages/opencode/src/mix-terminal/README.md) for full documentation.
